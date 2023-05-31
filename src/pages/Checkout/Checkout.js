import classes from './Checkout.module.css'

import { Fragment, useContext, useState, useReducer } from 'react'
import { Form, Link } from 'react-router-dom'
import CartContext from '../../data/cart-context'
import { textInitial, textReducer } from './Reducers'

import CheckoutCart from './CheckoutCart'

const Checkout = () => {

    const [ textValidation, dispatchTextVal ] = useReducer(textReducer, textInitial)

    const cartCtx = useContext(CartContext)
    const [ deliveryPrice, setDelivery ] = useState(0)

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

    // const digitHandler = (type, e) => {
    //     dispatchDigitVal({
    //         type:type,
    //         val: e.target.value
    //     })
    // }

    // const digitFocus = (type) => {
    //     dispatchDigitVal({
    //         type:type
    //     })
    // }

    const deliveryHandler = (e) => {
        setDelivery(e.target.value)
    }

    const finalPrice = +deliveryPrice + cartCtx.totalAmount

    const submitHandler = (e) => {
        
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
                                    name='Email' 
                                    className={classes.input} 
                                    placeholder='Email'
                                />
                                <input 
                                    type='number' 
                                    name='Phone' 
                                    className={classes.input} 
                                    placeholder='Phone'
                                />
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
                                <input type='number' name='Postal code' className={classes.input} placeholder='Postal code'/>
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
                                                onChange={deliveryHandler}
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
                                                onChange={deliveryHandler}
                                            />
                                            <label className={classes.price} htmlFor='costDelivery'>$8.00</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={classes['info-block']}>
                                <h3 className={classes.title3}>Payment method</h3>
                                <input type='number' name='Card number' className={classes.input} placeholder='Card number'/>
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
                                    <input type='number' name='Expirationo date' className={classes.input} placeholder='Expiration date'/>
                                    <input type='number' name='CVV' className={classes.input} placeholder='CVV'/>
                                </div>
                            </div>

                            <div className={classes.buttons}>
                                <Link to='..' relative='path' className={classes.leftBtn}>Go back</Link>
                                <input type='submit' value='Save and continue' className={classes.rightBtn}/>
                            </div>
                        </Form>
                    </div>

                    <CheckoutCart finalPrice={finalPrice} deliveryPrice={deliveryPrice}/>
                </div>
            </section>
        </Fragment>
    )
}

export default Checkout

export const action = async ({request}) => {
    const data = await request.formData()

    const address = data.get('Address') + ', ' + data.get('City') + ', ' + data.get('Postal code')+ ', ' + data.get('Country')

    const paymentData = {
        name:data.get('Name'),
        email:data.get('Email'),
        phone:data.get('Phone'),
        address:address,
        shipping: data.get('Delivery')
    }

    return paymentData
}