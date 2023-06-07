import classes from './Cart.module.css'

import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import CartItem from './CartItem'

import CartContext from '../data/cart-context'
import { useContext } from 'react'

import { useDispatch, useSelector } from 'react-redux' 
import { cartActions } from '../data/ReduxContext'

const Cart = (props) => {
    const navigate = useNavigate()
    const cartCtx = useContext(CartContext)
    /* Redux code */
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.items)
    const totalAmount = useSelector(state => state.cart.totalAmount)

    const cartItemRemove = (id) => {
        // cartCtx.removeItem(id)
        dispatch(cartActions.removeFromCart(id))
    }

    const cartItemAdd = (item) => {
        // cartCtx.addItem({...item, amount:1})
        dispatch(cartActions.addToCart({...item, amount:1}))
    }

    const cartItemDelete = (id) => {
        // cartCtx.deleteItem(id)
        dispatch(cartActions.deleteFromCart(id))
    }

    const cartClose = props.onClick

    const clickHandler = () => {
        navigate('checkout')
        cartClose()
    }

    return (
        <Fragment>
            <div className={`${classes.backdrop} ${props.toggle ? classes.active : undefined}`} onClick={props.onClick}></div>
            <div className={`${classes.cart} ${props.toggle ? classes.move : undefined}`}>
                <div className={classes['cart-container']}>
                    <div className={classes.header}>
                        <h2 className={classes.title2}>Cart</h2>
                        <FontAwesomeIcon className={classes.logo} icon={faXmark} size='lg' onClick={props.onClick}/>
                    </div>

                    <div className={classes['cart-items']}>
                        {/* {cartCtx.items.length === 0 && <p className={classes.paragraph}>Your cart is empty</p>} */}
                        {cartItems.length === 0 && <p className={classes.paragraph}>Your cart is empty</p>}
                        {/* {cartCtx.items.map((item, index) => { */}
                        {cartItems.map((item, index) => {
                            return <CartItem 
                                        data={item} 
                                        key={index}
                                        onRemove={cartItemRemove.bind(null, item.id)}
                                        onAdd={cartItemAdd.bind(null, item)}
                                        onDelete={cartItemDelete.bind(null, item.id)}
                                    />
                        })}
                    </div>

                    <div>
                        <div className={classes['total-container']}>
                            <span className={classes.subTotal}>Subtotal</span>
                            {/* <span className={classes['total-price']}>{cartCtx.totalAmount}</span> */}
                            <span className={classes['total-price']}>{totalAmount}</span>
                        </div>

                        <div className={classes.line}></div>
                        
                        <div>
                            <p className={classes.paragraph}>Shipping: Your shipping costs will be calculated in the last step of checkout.</p>
                        </div>
                    </div>

                    {/* <button className={classes.button} disabled={cartCtx.items.length === 0} onClick={clickHandler}>Checkout</button> */}
                    <button className={classes.button} disabled={cartItems.length === 0} onClick={clickHandler}>Checkout</button>

                </div>
            </div>
        </Fragment>
        
    )
}

export default Cart