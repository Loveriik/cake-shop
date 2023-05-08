import classes from './Cart.module.css'

import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import CartItem from './CartItem'

import CartContext from '../data/cart-context'
import { useContext } from 'react'


const Cart = (props) => {

    const cartCtx = useContext(CartContext)

    const cartItemRemove = (id) => {
        cartCtx.removeItem(id)
    }

    const cartItemAdd = (item) => {
        cartCtx.addItem({...item, amount:1})
    }

    const cartItemDelete = (id) => {
        cartCtx.deleteItem(id)
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
                        {cartCtx.items.map((item, index) => {
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
                            <span className={classes['total-price']}>{cartCtx.totalAmount}</span>
                        </div>

                        <div className={classes.line}></div>
                        
                        <div>
                            <p className={classes.paragraph}>Shipping: Your shipping costs will be calculated in the last step of checkout.</p>
                        </div>
                    </div>

                    <button className={classes.button}>Checkout</button>

                </div>
            </div>
        </Fragment>
        
    )
}

export default Cart