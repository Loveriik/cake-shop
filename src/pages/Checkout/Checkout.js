import classes from './Checkout.module.css'

import { Fragment } from 'react'

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
                                            <span className={classes.price}>Free</span>
                                            <input type='radio' name='delivery' value='free' className={classes.radio}/>
                                        </div>
                                    </div>

                                    <div className={classes['delivery-type']}>
                                        <div>
                                            <h4 className={classes.title4}>Mondial Relay</h4>
                                            <p className={classes.description}>Delivery: 2-3 business days</p>
                                        </div>
                                        <div>
                                            <span className={classes.price}>$8.00</span>
                                            <input type='radio' name='delivery' value='8.00' className={classes.radio}/>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </form>
                    </div>
                    <div>Cart</div>
                </div>
            </section>
        </Fragment>
    )
}

export default Checkout