import classes from './Navigation.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faMagnifyingGlass, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Fragment } from 'react'

import Footer from './Footer'
import Logo from '../images/Logo'
import MobileLogo from '../images/MobileLogo'

import { useState } from 'react'

const Navigation = () => {

    const [mobMenuOpen, setMobMenuOpen] = useState(false)

    const menuToggle = () => {
        setMobMenuOpen(!mobMenuOpen)
    }

    let location = useLocation()

    return (
        <Fragment>
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
                                <FontAwesomeIcon icon={faUser} size='lg' className={classes.iconMobile} />
                                <FontAwesomeIcon icon={faCartShopping} size='lg' className={classes.iconMobile} />
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
                        <NavLink>
                            <li>Trainings</li>
                        </NavLink>
                        <NavLink>
                            <li>Blog</li>
                        </NavLink>
                        <NavLink to='contactus' className={({ isActive }) => isActive ? classes.active : undefined} onClick={menuToggle}>
                            <li>Contact us</li>
                        </NavLink>
                    </ul>
                </div>
                
                <div className={`${location.pathname === '/' ? undefined : classes.dark} ${classes.socials}`}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' className={`${classes.icon} ${classes.glass}`}/>
                    <FontAwesomeIcon icon={faUser} size='lg' className={classes.icon}/>
                    <FontAwesomeIcon icon={faCartShopping} size='lg' className={classes.icon}/>
                </div>
            </nav>
            <Outlet />
            <Footer />

        </Fragment>
    )
}

export default Navigation