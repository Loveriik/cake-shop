import classes from './Item.module.css'

import { cartActions } from '../../data/ReduxContext'
import { useDispatch } from 'react-redux'

const Item = ({item}) => {
    const dispatch = useDispatch()

    const cartItemAdd = (item) => {
        dispatch(cartActions.addToCart({...item, amount:1}))
    }

    return (
        <div className={classes['training-cell']} key={item.id}>
            <img src={item.src} alt='' className={classes.image} />
            <h4 className={classes.title4}>{item.name}</h4>
            <div className={classes['price-block']}>
                <span className={classes.price}>${item.price}</span>
                <span className={classes.tag}>{item.tag}</span>
            </div>
            <p className={classes.description}>
                {item.desc}
            </p>
            <button className={classes['training-btn']} onClick={cartItemAdd.bind(null, item)}>Buy</button>
        </div>
    )
}

export default Item