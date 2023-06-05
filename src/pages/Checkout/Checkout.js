import classes from './Checkout.module.css'

import { Fragment, useContext, useState, useReducer, useEffect } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'
import CartContext from '../../data/cart-context'
import CheckoutContext from '../../data/checkout-context'
import { textInitial, textReducer, initial, reducer } from './Reducers'

import CheckoutCart from './CheckoutCart'

const Checkout = () => {

    const [ textValidation, dispatchTextVal ] = useReducer(textReducer, textInitial)
    const [ digitValidation, dispatchDigitVal ] = useReducer(reducer, initial)

    const navigate = useNavigate()

    const cartCtx = useContext(CartContext)
    const checkoutCtx = useContext(CheckoutContext)

    const [ formIsValid, setFormIsValid ] = useState(false)

    const { isNameValid: nameValid } = textValidation
    const { isEmailValid: emailValid } = digitValidation
    const { isPhoneValid: phoneValid } = digitValidation
    const { isAddressValid: addressValid } = textValidation
    const { isCityValid: cityValid } = textValidation
    const { isPostalValid: postalValid } = digitValidation
    const { isCountryValid: countryValid } = textValidation
    const { isCardValid: cardValid } = digitValidation
    const { isCardNameValid: cardNameValid } = textValidation
    const { isDateValid: dateValid } = digitValidation
    const { isCvvValid: cvvValid } = digitValidation
    

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(
                nameValid && emailValid && phoneValid && addressValid && cityValid && postalValid && countryValid && cardValid && cardNameValid && dateValid && cvvValid
            )
        }, 500)

        return () => {
            clearTimeout(identifier)
        }
    }, [nameValid, emailValid, phoneValid, addressValid, cityValid, postalValid, countryValid, cardValid, cardNameValid, dateValid, cvvValid])

    const textHandler = (type, e) => {
        dispatchTextVal({
            type:type,
            val: e.target.value
        })
    }

    const textFocus = (type) => {
        dispatchTextVal({
            type:type
        })
    }

    const digitHandler = (type, e) => {
        dispatchDigitVal({
            type:type,
            val: e.target.value
        })
    }

    const digitFocus = (type) => {
        dispatchDigitVal({
            type:type
        })
    }

    const deliveryHandler = (name, e) => {
        dispatchTextVal({
            type:'DELIVERY',
            name:name,
            value:e.target.value
        })
    }

    const finalPrice = +textValidation.deliveryValue + cartCtx.totalAmount

    const submitHandler = (e) => {
        e.preventDefault()

        if (!formIsValid) {
            return
        }

        if (formIsValid) {
            const clientData = {
                name: textValidation.nameValue,
                email: digitValidation.emailValue,
                phone: digitValidation.phoneValue,
                address: textValidation.addressValue + ', ' + textValidation.cityValue + ', ' + digitValidation.postalValue + ', ' + textValidation.countryValue,
                deliveryType:textValidation.deliveryName,
                deliveryValue:textValidation.deliveryValue
            }

            checkoutCtx.client = clientData

            navigate('/checkout/confirmation')
        }
    }

    return (
        <Fragment>
            <section className={classes.section}>
                <h2 className={classes.title2}>Checkout</h2>
                <div className={classes['checkout-container']}>
                    <div className={classes['personal-info']}>
                        <Form method='post' onSubmit={submitHandler}>
                            <div className={classes['info-block']}>
                                <h3 className={classes.title3}>Personal info</h3>
                                <input 
                                    type='text' 
                                    value={textValidation.nameValue || ''} 
                                    name='Name' 
                                    className={classes.input} 
                                    placeholder='Name' 
                                    onChange={textHandler.bind(null, 'NAME')} 
                                    onBlur={textFocus.bind(null, 'NAME_BLUR')}
                                />
                                {!textValidation.isNameValid && textValidation.isNameTouched && <span className={classes.error}>Type your name please</span>}
                                <input 
                                    type='email' 
                                    value={digitValidation.emailValue || ''}
                                    name='Email' 
                                    className={classes.input} 
                                    placeholder='Email'
                                    onChange={digitHandler.bind(null, 'EMAIL')}
                                    onBlur={digitFocus.bind(null, 'EMAIL_BLUR')}
                                />
                                {!digitValidation.isEmailValid && digitValidation.isEmailTouched && <span className={classes.error}>Type a valid E-mail please</span>} 
                                <input 
                                    type='text' 
                                    value={digitValidation.phoneValue || ''}
                                    name='Phone' 
                                    className={classes.input} 
                                    placeholder='Phone'
                                    onChange={digitHandler.bind(null, 'PHONE')}
                                    onBlur={digitFocus.bind(null, 'PHONE_BLUR')}
                                />
                                {!digitValidation.isPhoneValid && digitValidation.isPhoneTouched && <span className={classes.error}>Type your phone number please</span>} 
                            </div>

                            <div className={classes['info-block']}>
                                <h3 className={classes.title3}>Shipping address</h3>
                                <input 
                                    type='text' 
                                    value={textValidation.addressValue} 
                                    name='Address' 
                                    className={classes.input} 
                                    placeholder='Address' 
                                    onChange={textHandler.bind(null, 'ADDRESS')}
                                    onBlur={textFocus.bind(null, 'ADDRESS_BLUR')}
                                />
                                {!textValidation.isAddressValid && textValidation.isAddressTouched && <span className={classes.error}>Type your address please</span>}
                                <input 
                                    type='text' 
                                    value={textValidation.cityValue || ''} 
                                    name='City' 
                                    className={classes.input} 
                                    placeholder='City' 
                                    onChange={textHandler.bind(null, 'CITY')}
                                    onBlur={textFocus.bind(null, 'CITY_BLUR')}
                                />
                                {!textValidation.isCityValid && textValidation.isCityTouched && <span className={classes.error}>Type your city please</span>}
                                <input 
                                    type='text' 
                                    value={digitValidation.postalValue || ''} 
                                    name='Postal code' 
                                    className={classes.input} 
                                    placeholder='Postal code'
                                    onChange={digitHandler.bind(null, 'POSTAL')}
                                    onBlur={digitFocus.bind(null, 'POSTAL_BLUR')}
                                />
                                {!digitValidation.isPostalValid && digitValidation.isPostalTouched && <span className={classes.error}>Type your postal code please</span>} 
                                <input 
                                    type='text' 
                                    value={textValidation.countryValue || ''} 
                                    name='Country' 
                                    className={classes.input} 
                                    placeholder='Country'
                                    onChange={textHandler.bind(null, 'COUNTRY')}
                                    onBlur={textFocus.bind(null, 'COUNTRY_BLUR')}
                                />
                                {!textValidation.isCountryValid && textValidation.isCountryTouched && <span className={classes.error}>Type your country please</span>}
                            </div>

                            <div className={classes['info-block']}>
                                <h3 className={classes.title3}>Shipping method</h3>
                                <div className={classes.delivery}>
                                    <div className={classes['delivery-type']}>
                                        <div>
                                            <h4 className={classes.title4}>Collisimo</h4>
                                            <p className={classes.description}>Delivery: 3-4 business days</p>
                                        </div>
                                        <div>
                                            <input 
                                                type='radio' 
                                                name='delivery' 
                                                value='0' 
                                                id='freeDelivery' 
                                                className={classes.radio}
                                                onChange={deliveryHandler.bind(null, 'Colissimo')}
                                                checked='checked'
                                            />
                                            <label className={classes.price} htmlFor='freeDelivery'>Free</label>     
                                        </div>
                                    </div>

                                    <div className={classes['delivery-type']}>
                                        <div>
                                            <h4 className={classes.title4}>Mondial Relay</h4>
                                            <p className={classes.description}>Delivery: 2-3 business days</p>
                                        </div>
                                        <div>
                                            <input 
                                                type='radio' 
                                                name='delivery' 
                                                value='8' 
                                                id='costDelivery' 
                                                className={classes.radio}
                                                onChange={deliveryHandler.bind(null, 'Mondial Relay')}
                                            />
                                            <label className={classes.price} htmlFor='costDelivery'>$8.00</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={classes['info-block']}>
                                <h3 className={classes.title3}>Payment method</h3>
                                <input 
                                    type='text' 
                                    value={digitValidation.cardValue || ''}
                                    name='Card number' 
                                    className={classes.input} 
                                    placeholder='Card number'
                                    onChange={digitHandler.bind(null, 'CARD')}
                                    onBlur={digitFocus.bind(null, 'CARD_BLUR')}
                                />
                                {!digitValidation.isCardValid && digitValidation.isCardTouched && <span className={classes.error}>Type your card number please</span>} 
                                <input 
                                    type='text' 
                                    name='Cardholder' 
                                    value={textValidation.cardNameValue}
                                    className={classes.input} 
                                    placeholder='Cardholder name'
                                    onChange={textHandler.bind(null, 'CARDNAME')}
                                    onBlur={textFocus.bind(null, 'CARDNAME_BLUR')}
                                />
                                {!textValidation.isCardNameValid && textValidation.isCardNameTouched && <span className={classes.error}>Type the cardholder name please</span>}
                                <div className={classes.validity}>
                                    <div>
                                        <input
                                            type='text'
                                            value={digitValidation.dateValue || ''}
                                            name='Expiration date'
                                            className={classes.input}
                                            placeholder='Expiration date'
                                            onChange={digitHandler.bind(null, 'DATE')}
                                            onBlur={digitFocus.bind(null, 'DATE_BLUR')}
                                        />
                                        {!digitValidation.isDateValid && digitValidation.isDateTouched && <span className={classes.error}>Type your expiration date please</span>}
                                    </div>
                                    
                                    <div>
                                        <input
                                            type='text'
                                            value={digitValidation.cvvValue || ''}
                                            name='CVV'
                                            className={classes.input}
                                            placeholder='CVV'
                                            onChange={digitHandler.bind(null, 'CVV')}
                                            onBlur={digitFocus.bind(null, 'CVV_BLUR')}
                                        />
                                        {!digitValidation.isCvvValid && digitValidation.isCvvTouched && <span className={classes.error}>Type your cvv code please</span>}
                                    </div>
                                    
                                </div>
                            </div>

                            <div className={classes.buttons}>
                                <Link to='..' relative='path' className={classes.leftBtn}>Go back</Link>
                                <input type='submit' value='Save and continue' className={classes.rightBtn}/>
                            </div>
                        </Form>
                    </div>

                    <CheckoutCart finalPrice={finalPrice} deliveryPrice={textValidation.deliveryValue}/>
                </div>
            </section>
        </Fragment>
    )
}

export default Checkout