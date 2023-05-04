import classes from './Footer.module.css'

import { Link } from 'react-router-dom'

import logo from '../images/footerLogo.png'
import mobileLogo from '../images/footerMobileLogo.png'

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.border}/>
            <div className={classes['links-container']}>
                <div className={classes['desk-logo']}>
                    <img src={logo} alt='logo'/>
                </div>
                <div className={classes.imgArea}>
                    <img src={mobileLogo} alt='logo'/>
                </div>
                <ul className={`${classes.list} ${classes['list1-area']}`}>
                    <Link to='about'><li>About us</li></Link>
                    <Link to='contactus'><li>Contact us</li></Link>
                    <Link><li>Blog us</li></Link>
                    <Link><li>Search</li></Link>
                </ul>
                <ul className={`${classes.list} ${classes['list2-area']}`}>
                    <Link to='patiss3'><li>Patiss3</li></Link>
                    <Link to='cakewalk'><li>Cakewalk</li></Link>
                    <Link><li>Shop</li></Link>
                    <Link><li>Trainings</li></Link>
                </ul>
                <ul className={`${classes.list} ${classes['list3-area']}`}>
                    <a><li>+4537-376-3676</li></a>
                    <a><li>lapatisserie@gmail.com</li></a>
                    <a><li>Search</li></a>
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