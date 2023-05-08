import classes from './CartItem.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const CartItem = ({data, onRemove, onAdd, onDelete}) => {
    return (
        <div className={classes['item-container']}>
            <div className={classes['left-container']}>
                <div className={classes['pic-container']}>
                    <img src={data.src} alt='product' />
                </div>
                <div className={classes['title-container']}>
                    <span className={classes['item-title']}>{data.name}</span>
                    <div className={classes['item-options']}>
                        <span className={classes.sign} onClick={onRemove}>-</span>
                        <span className={classes.quantity}>{data.amount}</span>
                        <span className={classes.sign} onClick={onAdd}>+</span>
                    </div>
                </div>
            </div>

            <div className={classes['right-container']}>
                <span className={classes.price}>{data.price}</span>
                <FontAwesomeIcon className={classes.logo} icon={faTrash} size='lg' onClick={onDelete}/>
            </div>
        </div>
    )
}

export default CartItem