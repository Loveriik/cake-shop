import classes from './AboutUs.module.css'

import { Fragment } from 'react'
import About from '../../components/About'
import RequestDemo from '../../components/RequestDemo'

import pic from '../../images/pic4.png'
import pic2 from '../../images/pic5.png'
import pic3 from '../../images/pic6.png'
import cake from '../../images/pic3.png'
import wave from '../../images/wave10.png'
import waveMob from '../../images/wave10Mobile.png'
import wave2 from '../../images/wave11.png'
import wave3 from '../../images/wave8.png'

const AboutUs = () => {
    
    return (
        <Fragment>
            <section className={classes.section1}>
                <div className={classes['text-container']}>
                    <h2 className={classes.title2}>Our story</h2>
                    <p className={classes.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className={classes.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className={classes['image-container']}>
                    <div className={classes.imgWrapper}>
                        <img src={pic} alt='cake' />
                    </div>
                    <div className={classes.imgWrapper}>
                        <img src={pic2} alt='cake' />
                    </div>
                </div>
            </section>
 
            <section className={classes.section2}>
                
                <div className={classes.mobWave}>
                    <img src={waveMob} alt='wave' />
                </div>
                <div className={classes.deskWave}>
                    <img src={wave} alt='wave' />
                </div>

                <div>
                    <img className={classes['section2-img']} src={pic3} alt='cake'/>
                </div>
                <div className={classes['list-container']}>
                    <div className={classes['list-block']}>
                        <div className={classes.listDot}>
                            <h2 className={classes.title2}>Product</h2>
                            <p className={classes.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>
                        <h2 className={classes.title2}>2</h2>
                    </div>
                    <div className={classes.border}></div>
                    
                    <div className={classes['list-block']}>
                        <div className={classes.listDot}>
                            <h2 className={classes.title2}>3D printing <br />duration</h2>
                            <p className={classes.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>
                        <h2 className={classes.title2}>170</h2>
                    </div>
                    <div className={classes.border}></div>

                    <div className={classes['list-block']}>
                        <div className={classes.listDot}>
                            <h2 className={classes.title2}>Years</h2>
                            <p className={classes.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>
                        <h2 className={classes.title2}>3</h2>
                    </div>
                </div>
            </section>

            <div className={classes['about-margin']}>
                <About direction={true} text='La Patisserie Numerique Team'/>
            </div>

            <div className={classes['inclined-wave']}>
                <img src={wave2} alt='wave' />
            </div>

            <div>
                <RequestDemo src={cake}/>
            </div>

            <div className={classes['final-wave']}>
                <img src={wave3} alt='wave' />
            </div>

        </Fragment>
    )
}

export default AboutUs