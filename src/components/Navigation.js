import classes from './Navigation.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faMagnifyingGlass, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Outlet, useLocation, useNavigation } from 'react-router-dom'

import Footer from './Footer'
import Logo from '../images/Logo'
import MobileLogo from '../images/MobileLogo'
import Cart from '../Cart/Cart'

import { useState, useContext } from 'react'
import CartContext from '../data/cart-context'

import { useSelector } from 'react-redux'

const Navigation = () => {

    const cartItems = useSelector((state) => state.cart.items)

    const cartCtx = useContext(CartContext)

    // const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
    //     return curNumber + item.amount
    // }, 0)

    const numberOfItems = cartItems.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    const [ mobMenuOpen, setMobMenuOpen ] = useState(false)
    const [ cartOpen, setCartOpen ] = useState(false)

    const menuToggle = () => {
        setMobMenuOpen(!mobMenuOpen)
    }

    const cartToggle = () => {
        setCartOpen(!cartOpen)
    }

    let location = useLocation()
    const navigation = useNavigation()

    return (
        <div className={classes.shell}>
            <Cart 
                onClick={cartToggle} 
                toggle={cartOpen} 
            />

            <nav className={classes.nav}>               
                <FontAwesomeIcon icon={faBars} size='lg' className={`${classes.burgerBtn} ${location.pathname === '/' ? undefined : classes.dark}`} onClick={menuToggle}/>

                <NavLink to='/' className={classes.desktopLogo} >
                    <Logo fill={`${location.pathname === '/' ? '#FCD303' : 'black'}`}/>
                </NavLink>
                <NavLink to='/' className={classes.mobHeaderLogo}>
                    <MobileLogo fill={`${location.pathname === '/' ? '#FCD303' : 'black'}`}/>
                </NavLink>
                <div className={`${classes.mobContainer} ${ mobMenuOpen ? '' : classes.slideMenu }`}>
                    <div className={classes.mobHeader}>
                        <div className={classes.mobNavigation}>
                            <NavLink to='/' className={classes.mobHeaderLogo} onClick={menuToggle}>
                                <MobileLogo fill={`${location.pathname === '/' ? '#FCD303' : 'black'}`}/>
                            </NavLink>
                            <div className={classes.mobIcons}>
                                <FontAwesomeIcon icon={faUser} size='lg' className={`${classes.iconMobile} ${classes.disabled}`} />
                                <div className={classes['cart-container']}>
                                    <FontAwesomeIcon icon={faCartShopping} size='lg' className={classes.iconMobile} onClick={cartToggle} />
                                    <span className={classes.amount}>{numberOfItems}</span>
                                </div>
                                <FontAwesomeIcon icon={faXmark} size='lg' className={classes.iconMobile} onClick={menuToggle}/>
                            </div>
                        </div>
                        <div className={classes.mobForm}>
                            <label htmlFor='textInput' className={classes.label}>Search</label>
                            <input id='textInput' type='text' className={classes.input}/>
                        </div>
                    </div>
                    <ul className={`${location.pathname === '/' ? undefined : classes.dark} ${classes.list}`}>
                        <NavLink to='about' className={({ isActive }) => isActive ? classes.active : undefined} onClick={menuToggle}>
                            <li>About us</li>
                        </NavLink>
                        <NavLink to='patiss3' className={({ isActive }) => isActive ? classes.active : undefined} onClick={menuToggle}>
                            <li>Patiss3</li>
                        </NavLink>
                        <NavLink to='cakewalk' className={({ isActive }) => isActive ? classes.active : undefined} onClick={menuToggle}>
                            <li>Cakewalk</li>
                        </NavLink>
                        <NavLink to='shop' className={({ isActive }) => isActive ? classes.active : undefined} onClick={menuToggle}>
                            <li>Shop</li>
                        </NavLink>
                        <NavLink to='trainings' className={({ isActive }) => isActive ? classes.active : undefined} onClick={menuToggle}>
                            <li>Trainings</li>
                        </NavLink>
                        <NavLink className={classes.disabled}>
                            <li>Blog</li>
                        </NavLink>
                        <NavLink to='contactus' className={({ isActive }) => isActive ? classes.active : undefined} onClick={menuToggle}>
                            <li>Contact us</li>
                        </NavLink>
                    </ul>
                </div>
                
                <div className={`${location.pathname === '/' ? undefined : classes.dark} ${classes.socials}`}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' className={`${classes.icon} ${classes.glass} ${classes.disabled}`}/>
                    <FontAwesomeIcon icon={faUser} size='lg' className={`${classes.icon} ${classes.disabled}`}/>
                    <div className={classes['cart-container']}>
                        <FontAwesomeIcon icon={faCartShopping} size='lg' className={classes.icon} onClick={cartToggle}/>
                        <span className={classes.amount}>{numberOfItems}</span>
                    </div>
                </div>
            </nav>

            { navigation.state === 'loading' ? <p className={classes.status}>Loading page...</p> : <Outlet />}

            <Footer />

        </div>
    )
}

export default Navigation