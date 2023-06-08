import classes from './CheckoutCart.module.css'

import CartItem from '../../Cart/CartItem'

import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../data/ReduxContext'

const CheckoutCart = ({finalPrice, deliveryPrice}) => {

    const cartItems = useSelector( state => state.cart.items)
    const totalAmount = useSelector( state => state.cart.totalAmount)
    const dispatch = useDispatch()

    const cartItemRemove = (id) => {
        dispatch(cartActions.removeFromCart(id))
    }

    const cartItemAdd = (item) => {
        dispatch(cartActions.addToCart({...item, amount:1}))
    }

    const cartItemDelete = (id) => {
        dispatch(cartActions.deleteFromCart(id))
    }

    return (
        <div className={classes.cart}>
            <div className={classes['products-container']}>
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

            <div className={classes.border}></div>

            <div>
                <div className={classes['price-container']}>
                    <span className={classes.tag}>Subtotal</span>
                    <span className={classes['tag-price']}>${totalAmount}</span>
                </div>
                <div className={classes['price-container']}>
                    <span className={classes.tag}>Shipping</span>
                    <span className={classes['tag-price']}>${deliveryPrice}</span>
                </div>
            </div>

            <div className={classes.border}></div>

            <div className={classes['final-price-container']}>
                <span className={classes['final-tag']}>Total</span>
                <span className={classes['tag-price']}>${finalPrice}</span>
            </div>

        </div>
    )
}

export default CheckoutCart

