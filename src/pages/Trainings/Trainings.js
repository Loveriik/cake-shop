import classes from './Trainings.module.css'

import { Fragment } from 'react'

import pic1 from '../../images/pic9.png'
import pic2 from '../../images/pic10.png'

const Trainings = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes['header-textContainer']}>
                    <h2 className={classes.title2}>Our
                        <br />Trainings
                    </h2>
                    <p className={classes.paragraph}>
                        La Pâtisserie Numérique organizes online or face-to-face training and workshops.                     
                    </p>
                    <p className={classes.paragraph}>
                        Following numerous requests, we offer 100% online training to make your own silicone molds using 3d printing. This training is based on our experience and does not require any special skills in 3d modeling. Beginners are welcome!
                    </p>
                    <p className={classes.paragraph}>
                        The workshops and demonstrations make it possible to raise awareness among a wide audience of the opportunities offered
                    </p>
                </div>

                <div className={classes['header-imgContainer']}>
                    <div>
                        <img src={pic1} />
                    </div>
                    <div>
                        <img src={pic2} />
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Trainings