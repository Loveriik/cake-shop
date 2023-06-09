import classes from './Item.module.css'

import { useDispatch } from 'react-redux'
import { cartActions } from '../../data/ReduxContext'

const Item = ({ item }) => {

    const dispatch = useDispatch()

    const buyHandler = () => {
        dispatch(cartActions.addToCart({
            id:item.id,
            src:item.src,
            name:item.name,
            price:item.price,
            amount:1
        }))
    }

    return (
        <div key={item.id}>
            <div className={classes['pic-container']}>
                <img src={item.src} alt='cake' />
            </div>
            <h3 className={classes['grid-title3']}>{item.name}</h3>
            <div className={classes['price-container']}>
                <span className={classes.price}>${item.price}</span>
                <button className={classes.button} onClick={buyHandler}>Buy</button>
            </div>
        </div>
    )
}

export default Item