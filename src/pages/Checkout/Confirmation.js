import classes from './Confirmation.module.css'

import { Link } from 'react-router-dom'
import { Fragment, useContext, useState } from 'react'

import CheckoutCart from './CheckoutCart' 

import CartContext from '../../data/cart-context'
import CheckoutContext from '../../data/checkout-context'

const Confirmation = () => {

    const [ messageVisible, setMessageVisible ] = useState(false)

    const cartCtx = useContext(CartContext)
    const clientCtx = useContext(CheckoutContext)

    const finalPrice = +clientCtx.client.deliveryValue + cartCtx.totalAmount

    const confirmHandler = () => {
        clientCtx.client = {}
        cartCtx.items = []
        cartCtx.totalAmount = 0

        setMessageVisible(!messageVisible)
    }

    const messageToggle = () => {
        setMessageVisible(!messageVisible)
    }

    return (
        <Fragment>
            {messageVisible && <div className={classes.backdrop}></div>}
            {messageVisible && <div className={classes.message}>
                <h1 className={classes['message-h1']}>Congratulations!</h1>
                <p className={classes['message-p']}>
                    Thank you for your time. Your order has been placed. Soon you will receive an e-mail with your order details and tracking number.
                </p>
                <Link to='/' onClick={messageToggle}>To homepage</Link>
            </div>}
            <section className={classes.section}>
                <h2 className={classes.title2}>Checkout</h2>
                <div className={classes['main-container']}>
                    <div className={classes['personal-details']}>
                        <h3 className={classes.title3}>Confirmation</h3>
                        <table className={classes.table}>
                            <tbody>
                                <tr className={classes.tr}>
                                    <th className={classes.th}>Name</th>
                                    <td className={classes.td}>{clientCtx.client.name}</td>
                                </tr>
                                <tr className={classes.tr}>
                                    <th className={classes.th}>Email</th>
                                    <td>{clientCtx.client.email}</td>
                                </tr>
                                <tr className={classes.tr}>
                                    <th className={classes.th}>Phone</th>
                                    <td>{clientCtx.client.phone}</td>
                                </tr>
                                <tr className={classes.tr}>
                                    <th className={classes.th}>Address</th>
                                    <td>{clientCtx.client.address}</td>
                                </tr>
                                <tr className={classes.tr}>
                                    <th className={classes.th}>Shipping method</th>
                                    <td>{clientCtx.client.deliveryType}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className={classes.buttons}>
                            <Link to='..' relative='path' className={classes.leftbtn}>Go back</Link>
                            <button onClick={confirmHandler} className={classes.rightBtn}>Confirm</button>
                        </div>
                    </div>

                    <CheckoutCart finalPrice={finalPrice} deliveryPrice={clientCtx.client.deliveryValue} />
                </div>
            </section>
        </Fragment>
    )
}

export default Confirmation