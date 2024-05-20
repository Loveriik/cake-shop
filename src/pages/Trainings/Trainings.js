import classes from './Trainings.module.css'

import { Fragment, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

import pic1 from '../../images/pic9.png'
import pic2 from '../../images/pic10.png'

import Item from './Item'

const Trainings = () => {
    const data = useLoaderData()

    const [state, setState] = useState('all')

    const changeTrainings = (tag) => {
        setState(tag)
    }

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
                        <img src={pic1} alt='' />
                    </div>
                    <div>
                        <img src={pic2} alt='' />
                    </div>
                </div>
            </header>

            <section className={classes.section}>
                <h2 className={classes.title2}>Trainings</h2>

                <div className={classes['trainings-container']}>
                    <div className={classes['menu-container']}>
                        <h3 className={classes.title3}>Trainings categories:</h3>
                        <ul className={classes.list}>
                            <li onClick={() => changeTrainings('all')}>All</li>
                            <li onClick={() => changeTrainings('petiss')}>Petiss3</li>
                            <li onClick={() => changeTrainings('cakewalk')}>Cakewalk</li>
                        </ul>
                    </div>

                    {state === 'all' ? <div className={classes['trainings-section']}>
                        <div className={classes.cell}>
                            <h3 className={classes['trainings-title']}>Featured</h3>
                            <div className={classes['description-container']}>
                                {data.Featured.map((item, index) => {
                                    return (
                                        <Item item={item} key={index} />
                                    )
                                })}
                            </div>
                            <div className={classes.border}></div>
                        </div>

                        <div className={classes.cell}>
                            <h3 className={classes['trainings-title']}>Petiss3</h3>
                            <div className={classes['description-container']}>
                                {data.Petiss.map((item, index) => {
                                    return (
                                        <Item item={item} key={index} />
                                    )
                                })}
                            </div>
                            <div className={classes.border}></div>
                        </div>

                        <div className={classes.cell}>
                            <h3 className={classes['trainings-title']}>Petiss3</h3>
                            <div className={classes['description-container']}>
                                {data.Cakewalk.map((item, index) => {
                                    return (
                                        <Item item={item} key={index} />
                                    )
                                })}
                            </div>
                        </div>

                    </div> : undefined}

                    {state === 'petiss' ? <div className={classes['trainings-section']}>
                        <div className={classes.cell}>
                            <h3 className={classes['trainings-title']}>Petiss3</h3>
                            <div className={classes['description-container']}>
                                {data.Petiss.map((item, index) => {
                                    return (
                                        <Item item={item} key={index} />
                                    )
                                })}
                            </div>
                        </div>
                    </div> : undefined}

                    {state === 'cakewalk' ? <div className={classes['trainings-section']}>
                        <div className={classes.cell}>
                            <h3 className={classes['trainings-title']}>Cakewalk</h3>
                            <div className={classes['description-container']}>
                                {data.Cakewalk.map((item, index) => {
                                    return (
                                        <Item item={item} key={index} />
                                    )
                                })}
                            </div>
                        </div>
                    </div> : undefined}

                </div>
            </section>
        </Fragment>
    )
}

export default Trainings

export const loader = async () => {
    const data = await fetch('https://trainings-ffda3-default-rtdb.firebaseio.com/store.json')
    const response = await data.json()

    return response
}