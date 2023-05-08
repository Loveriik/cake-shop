import classes from './Shop.module.css'

import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'
import Item from './Item'

const Shop = () => {
    const data = useLoaderData()
    const [ title, setTitle ] = useState('all')

    const titleHandler = (title) => {
        setTitle(title)
    }

    const patiss3Data = data.filter((item) => item.type === 'patiss3')
    const cakewalkData = data.filter((item) => item.type === 'cakewalk')
    const kitData = data.filter((item) => item.type === 'kit')

    return (
        <section className={classes.section}>
            <h2 className={classes.title2}>Shop</h2>
            <div className={classes['flex-container']}>
                <div className={classes['menu-container']}>
                    <h3 className={classes.title3}>Product categories:</h3>
                    <ul className={classes.list}>
                        <li onClick={() => titleHandler('all')}>All</li>
                        <li onClick={() => titleHandler('patiss3')}>Patiss3</li>
                        <li onClick={() => titleHandler('cakewalk')}>Cakewalk</li>
                        <li onClick={() => titleHandler('kit')}>Kits</li>
                    </ul>
                </div>

                <div className={classes['grid-container']}> 
                    {title === 'all' && data.map((item, index) => <Item item={item} key={index}/>)}
                    {title === 'patiss3' && patiss3Data.map((item, index) => <Item item={item} key={index}/>)}
                    {title === 'cakewalk' && cakewalkData.map((item, index) => <Item item={item} key={index}/>)}
                    {title === 'kit' && kitData.map((item, index) => <Item item={item} key={index}/>)}
                </div>
                
            </div>
        </section>
    )
}

export default Shop


export const loader = async () => {
    const response = await fetch('https://cake-shop-39b0c-default-rtdb.firebaseio.com/shop.json')
    const data = await response.json()

    return data.items
}