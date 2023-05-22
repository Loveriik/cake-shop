import classes from './Checkout.module.css'

import { Fragment } from 'react'

import pic from '../../images/profile2.jpg'

const Checkout = () => {
    return (
        <Fragment>
            <section className={classes.section}>
                <h2 className={classes.title2}>Checkout</h2>
                <div className={classes['checkout-container']}>
                    <div className={classes['personal-info']}>
                        <form>
                            <div className={classes['info-block']}>
                                <h3 className={classes.title3}>Personal info</h3>
                                <input type='text' name='Name' className={classes.input} placeholder='Name'/>
                                <input type='email' name='Email' className={classes.input} placeholder='Email'/>
                                <input type='number' name='Phone' className={classes.input} placeholder='Phone'/>
                            </div>

                            <div className={classes['info-block']}>
                                <h3 className={classes.title3}>Shipping address</h3>
                                <input type='text' name='Address' className={classes.input} placeholder='Address'/>
                                <input type='text' name='City' className={classes.input} placeholder='City'/>
                                <input type='number' name='Postal code' className={classes.input} placeholder='Postal code'/>
                                <input type='text' name='Country' className={classes.input} placeholder='Country'/>
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
                                            <input type='radio' name='delivery' value='free' id='freeDelivery' className={classes.radio} />
                                            <label className={classes.price} htmlFor='freeDelivery'>Free</label>     
                                        </div>
                                    </div>

                                    <div className={classes['delivery-type']}>
                                        <div>
                                            <h4 className={classes.title4}>Mondial Relay</h4>
                                            <p className={classes.description}>Delivery: 2-3 business days</p>
                                        </div>
                                        <div>
                                            <input type='radio' name='delivery' value='8.00' id='costDelivery' className={classes.radio}/>
                                            <label className={classes.price} htmlFor='costDelivery'>$8.00</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={classes['info-block']}>
                                <h3 className={classes.title3}>Payment method</h3>
                                <input type='number' name='Card number' className={classes.input} placeholder='Card number'/>
                                <input type='text' name='Cardholder' className={classes.input} placeholder='Cardholder name'/>
                                <div className={classes.validity}>
                                    <input type='number' name='Expirationo date' className={classes.input} placeholder='Expiration date'/>
                                    <input type='number' name='CVV' className={classes.input} placeholder='CVV'/>
                                </div>
                            </div>

                            <div className={classes.buttons}>
                                <button className={classes.leftBtn}>Go back</button>
                                <input type='submit' value='Save and continue' className={classes.rightBtn}/>
                            </div>
                        </form>
                    </div>

                    <div className={classes.cart}>
                        <div className={classes['products-container']}>
                            <div className={classes['product-summary']}>
                                <div className={classes['product-title']}>
                                    <img src={pic} alt='' className={classes['cartimg']} />
                                    <h5 className={classes.title5}>Cakewalk 3d Maker Kit</h5>
                                </div>
                                <span className={classes['product-price']}>$69</span>
                            </div>
                        </div>

                        <div className={classes.border}></div>

                        <div>
                            <div className={classes['price-container']}>
                                <span className={classes.tag}>Subtotal</span>
                                <span className={classes['tag-price']}>$69</span>
                            </div>
                            <div className={classes['price-container']}>
                                <span className={classes.tag}>Shipping</span>
                                <span className={classes['tag-price']}>$0</span>
                            </div>
                        </div>

                        <div className={classes.border}></div>

                       
                        <div className={classes['final-price-container']}>
                            <span className={classes['final-tag']}>Total</span>
                            <span className={classes['tag-price']}>$69</span>
                        </div>
                        
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Checkout