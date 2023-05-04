import classes from './News.module.css'

import news1 from '../images/news1.png'
import news2 from '../images/news2.png'
import news3 from '../images/news3.png'
import wave5 from '../images/wave5.png'
import wave6 from '../images/wave6.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const News = () => {
    return (
        <section className={classes.section}>
            <div className={classes['wave-pic']}>
                <img src={wave5} alt='wave5'/>
            </div>
            <div className={classes['mobile-wave']}>
                <img src={wave6} alt='wave6'/>
            </div>
            <h2 className={classes.title2}>News & <br/>recipes</h2>
            <div className={classes['news-container']}>
                <a className={`${classes.link} ${classes.firstLink}`}>View all <FontAwesomeIcon icon={faArrowRight} size='lg' /></a>
                <div className={classes['first-container']}>
                    <div className={classes['img-container']}>
                        <img src={news1} alt='picture'/>
                    </div>
                    <div className={classes['caption-container']}>
                        <h3 className={classes.title3}>Lorem ipsum dolor sit amet</h3>
                        <div className={classes['tag-container']}>
                            <span className={classes.tag}>Recipes</span>
                            <span className={`${classes.tag} ${classes.mobTag}`}>Patiss3</span>
                        </div>
                        <p className={classes.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a className={`${classes.link} ${classes.linkPosition}`}>Discover <FontAwesomeIcon icon={faArrowRight} size='lg' /></a>
                    </div>
                    <div className={classes.border}></div>
                </div>

                <div>
                    <div className={classes['img-container']}>
                        <img src={news2} alt='picture'/>
                    </div>
                    <div className={classes['caption-container']}>
                        <h3 className={classes.title3}>Lorem ipsum dolor sit amet</h3>
                        <div className={classes['tag-container']}>
                            <span className={classes.tag}>Recipes</span>
                            <span className={`${classes.tag} ${classes.mobTag}`}>Patiss3</span>
                        </div>
                        <p className={classes.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a className={`${classes.link} ${classes.linkPosition}`}>Discover <FontAwesomeIcon icon={faArrowRight} size='lg' /></a>
                    </div>
                    <div className={classes.border}></div>
                </div>

                <div>
                    <div className={classes['img-container']}>
                        <img src={news3} alt='picture'/>
                    </div>
                    <div className={classes['caption-container']}>
                        <h3 className={classes.title3}>Lorem ipsum dolor sit amet</h3>
                        <div className={classes['tag-container']}>
                            <span className={classes.tag}>Recipes</span>
                            <span className={`${classes.tag} ${classes.mobTag}`}>Patiss3</span>
                        </div>
                        <p className={classes.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a className={`${classes.link} ${classes.linkPosition}`}>Discover <FontAwesomeIcon icon={faArrowRight} size='lg' /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News