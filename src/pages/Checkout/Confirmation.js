import classes from './Confirmation.module.css'

import { Link } from 'react-router-dom'

import CheckoutCart from './CheckoutCart' 

const Confirmation = () => {
    return (
        <section className={classes.section}>
            <h2 className={classes.title2}>Checkout</h2>
            <div className={classes['main-container']}>
                <div className={classes['personal-details']}>
                    <h3 className={classes.title3}>Confirmation</h3>
                    <table className={classes.table}>
                        <tbody>
                            <tr className={classes.tr}>
                                <th className={classes.th}>Name</th>
                                <td className={classes.td}>Mario Killi</td>
                            </tr>
                            <tr className={classes.tr}>
                                <th className={classes.th}>Email</th>
                                <td>s215@mnly@yandex.ru</td>
                            </tr>
                            <tr className={classes.tr}>
                                <th className={classes.th}>Phone</th>
                                <td>+365497</td>
                            </tr>
                            <tr className={classes.tr}>
                                <th className={classes.th}>Address</th>
                                <td>Moscow</td>
                            </tr>
                            <tr className={classes.tr}>
                                <th className={classes.th}>Shipping method</th>
                                <td>Callisimo</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={classes.buttons}>
                        <Link to='..' relative='path' className={classes.leftbtn}>Go back</Link>
                        <Link className={classes.rightBtn}>Confirm</Link>
                    </div>
                </div>
                
                <CheckoutCart />
            </div>
        </section>
    )
}

export default Confirmation