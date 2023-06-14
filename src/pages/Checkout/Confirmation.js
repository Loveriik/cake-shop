import classes from './Confirmation.module.css'

import { Link, useSubmit } from 'react-router-dom'
import { Fragment, useState } from 'react'

import CheckoutCart from './CheckoutCart' 

import { cartActions, clientActions } from '../../data/ReduxContext'
import { useDispatch, useSelector } from 'react-redux'

let client

const Confirmation = () => {

    const submit = useSubmit()

    const [ messageVisible, setMessageVisible ] = useState(false)

    const totalAmount = useSelector(state => state.cart.totalAmount)
    const order = useSelector(state => state.cart.items)
    const clientInfo = useSelector(state => state.client.info)
    const dispatch = useDispatch()

    client = {...clientInfo, order: order}

    const finalPrice = +clientInfo.deliveryValue + totalAmount

    const confirmHandler = () => {
        dispatch(clientActions.reset())
        dispatch(cartActions.reset())

        submit(null, { method:'POST' })

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
                                    <td className={classes.td}>{clientInfo.name}</td>
                                </tr>
                                <tr className={classes.tr}>
                                    <th className={classes.th}>Email</th>
                                    <td className={classes.td}>{clientInfo.email}</td>
                                </tr>
                                <tr className={classes.tr}>
                                    <th className={classes.th}>Phone</th>
                                    <td className={classes.td}>{clientInfo.phone}</td>
                                </tr>
                                <tr className={classes.tr}>
                                    <th className={classes.th}>Address</th>
                                    <td className={classes.td}>{clientInfo.address}</td>
                                </tr>
                                <tr className={classes.tr}>
                                    <th className={classes.th}>Shipping method</th>
                                    <td className={classes.td}>{clientInfo.deliveryType}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className={classes.buttons}>
                            <Link to='..' relative='path' className={classes.leftbtn}>Go back</Link>
                            <button onClick={confirmHandler} className={classes.rightBtn}>Confirm</button>
                        </div>
                    </div>

                    <CheckoutCart finalPrice={finalPrice} deliveryPrice={clientInfo.deliveryValue} />
                </div>
            </section>
        </Fragment>
    )
}

export default Confirmation

export const action = async () => {
    fetch('https://cake-shop2-default-rtdb.firebaseio.com/order.json', {
        method:'POST',
        body: JSON.stringify(client)
    })

    return null
}