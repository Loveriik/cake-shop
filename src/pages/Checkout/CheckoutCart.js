import classes from './CheckoutCart.module.css'

import { useContext } from 'react'
import CartContext from '../../data/cart-context'
import CartItem from '../../Cart/CartItem'

const CheckoutCart = ({finalPrice, deliveryPrice}) => {
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
        <div className={classes.cart}>
            <div className={classes['products-container']}>
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

            <div className={classes.border}></div>

            <div>
                <div className={classes['price-container']}>
                    <span className={classes.tag}>Subtotal</span>
                    <span className={classes['tag-price']}>${cartCtx.totalAmount}</span>
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

