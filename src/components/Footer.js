import classes from './Footer.module.css'

import { Link, useLocation } from 'react-router-dom'

import FooterLogoDesktop from '../images/FooterLogoDes'
import FooterLogoMob from '../images/FooterLogoMob'

const Footer = () => {
    const location = useLocation()

    return (
        <footer className={classes.footer}>
            <div className={classes.border}/>
            <div className={classes['links-container']}>
                <Link to='/cake-shop' className={classes['desk-logo']}>
                    <FooterLogoDesktop fill={`${location.pathname === '/cake-shop' ? '#FCD303' : 'black'}`} />
                </Link>

                <Link to='/cake-shop' className={classes.imgArea}>
                    <FooterLogoMob fill={`${location.pathname === '/cake-shop' ? '#FCD303' : 'black'}`} />
                </Link>

                <ul className={`${classes.list} ${classes['list1-area']}`}>
                    <Link to='about'><li>About us</li></Link>
                    <Link to='contactus'><li>Contact us</li></Link>
                    <a className={classes.disabled}><li>Blog us</li></a>
                    <a className={classes.disabled}><li>Search</li></a>
                </ul>
                <ul className={`${classes.list} ${classes['list2-area']}`}>
                    <Link to='patiss3'><li>Patiss3</li></Link>
                    <Link to='cakewalk'><li>Cakewalk</li></Link>
                    <Link to='shop'><li>Shop</li></Link>
                    <Link to='trainings'><li>Trainings</li></Link>
                </ul>
                <ul className={`${classes.list} ${classes['list3-area']}`}>
                    <a className={classes.info}><li>+4537-376-3676</li></a>
                    <a className={classes.info}><li>lapatisserie@gmail.com</li></a>
                    <a className={classes.info}><li>Search</li></a>
                </ul>
                <div className={classes['mob-border']}></div>
            </div>
            <div className={classes['privacy-container']}>
                <p className={classes.paragraph}>2022. La Patisserie Numerique. All rights reserved.</p>
                <div>
                    <a className={classes['terms-link']}>Terms</a>
                    <a className={classes['terms-link']}>Privacy policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer