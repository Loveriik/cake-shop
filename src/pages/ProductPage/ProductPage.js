import classes from './ProductPage.module.css'

import FaqSlide from './FaqSlide'
import RequestDemo from '../../components/RequestDemo'
import PictureSlider from '../../components/PictureSlider'

import { sliderData as PictureSliderData } from '../../data/PictureSliderData'

import { 
    slideData as Compatibility,
    slideInstallation as Installation,
    slideTechnicalInfo as Technical,
    slideUse as Use,
    slideMaintenance as Maintenance
} from '../../data/Data' 

import { Fragment, useState } from 'react'

import drawing from '../../images/printerDrawing.png'
import wave1 from '../../images/wave12.png'
import wave2 from '../../images/wave9.png'
import wave3 from '../../images/wave13.png'
import phone1 from '../../images/phoneSmall.png'
import phone2 from '../../images/phoneBig.png'
import pic from '../../images/pic3.png'

const ProductPage = ({src, title}) => {

    const [ slide, setSlide ] = useState(1)

    const slideToggler = (num) => {
        setSlide(num)
    }

    return (
        <Fragment>
            <section className={classes.section1}>
                <div className={classes['section1-wave']}>
                    <img src={wave1} alt='wave' />
                </div>

                <div className={classes['section1-imageContainer']}> 
                    <img src={src} alt='cake printer' />
                </div>
                <div className={classes['section1-textContainer']}>
                    <h2 className={classes.title2}>{title}</h2>
                    <div className={classes['section1-btnContainer']}>
                        <button className={`${classes['section1-leftBtn']} ${classes.blackBtn}`}>Pre-order</button>
                        <button className={classes['section1-rightBtn']}>Request a sample</button>
                    </div>
                    <div className={classes['section1-paragraphContainer']}>
                        <p className={classes.paragraph}>Cakewalk 3d is a personal 3d printer kit that converts temporarily your device into a 3d food printer. For example, you can print cake dough or meringue in 3d. You can also make 3d printed chocolate or mashed vegetables.</p>
                        <p className={classes.paragraph}>Cakewalk 3D is the perfect tool to start food 3d printing on a small budget. And for learning how to cook at home with your 3D printer!</p>
                        <p className={classes.paragraph}> Cakewalk 3d is a fast, efficient way to get a 3d chocolate 3d printer or a sugar paste 3d printer at home. And that, for a small price.</p>
                    </div>
                </div>
            </section>

            <section className={classes.section2}>
                <h2 className={classes.title2}>Specification</h2>
                <div className={classes['section2-container']}>
                    <div>
                        <table className={classes['section2-table']}>
                            <tbody>
                                <tr className={classes.tr}>
                                    <th className={classes.th}>Dimensions</th>
                                    <td className={classes.td}>400 x 600 x 150 mm (H x W x D)</td>
                                </tr>
                                <tr className={classes.tr}>
                                    <th className={classes.th}>Paste tank capacity</th>
                                    <td className={classes.td}>1.2 L</td>
                                </tr>
                                <tr className={classes.tr}>
                                    <th className={classes.th}>New Powder tank capacity</th>
                                    <td className={classes.td}>8 L</td>
                                </tr>
                                <tr className={classes.tr}>
                                    <th className={classes.th}>Reused Powder tank capacity</th>
                                    <td className={classes.td}>8 L</td>
                                </tr>
                                <tr className={classes.tr}>
                                    <th className={classes.th}>Features</th>
                                    <td className={classes.td}>Automatic filling of the pastry tank
                                        Automatic powder refilling between layers
                                        Automatic head start
                                        Head extruder from 0.8 to 3mm
                                    </td>
                                </tr>
                                <tr className={classes.tr}>
                                    <th className={classes.th}>Printing setup</th>
                                    <td className={classes.td}>2 min.
                                        Just fill the paste tanke with your dough and connect it to the head with a clean pipe and fit the correct size head nozzle.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={classes['section2-imgContainer']}>
                        <img src={drawing} alt='drawing'/>
                    </div>
                </div>
            </section>

            <section className={classes.section3}>
                <h2 className={classes.title2}>How the cakewalk 3D works</h2>
                <iframe width="1000" height="500" src="https://www.youtube.com/embed/MKQlys-z7SM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </section>

            <section className={classes.section4}>
                <div className={classes['section4-imgContainer']}>
                    <div>
                        <img src={phone1} alt='phone' />
                    </div>
                    <div className={classes.section4Img}>
                        <img src={phone2} alt='phone' />
                    </div>
                </div>

                <div className={classes['section4-listContainer']}>
                    <h2 className={classes.title2}>Recipes in your phone</h2>
                    <ul className={classes['section4-list']}>
                        <li>
                            <h3>Be your own chef</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </li>
                        <li>
                            <h3>Printer control from the phone</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                        </li>
                        <li>
                            <h3>Create culinary masterpieces</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                        </li>
                        <li>
                            <h3>Have all recipes in your phone</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                        </li>
                    </ul>
                    <button className={`${classes.blackBtn} ${classes.section4Btn}`}>Download</button>
                </div>
            </section>

            <section className={classes['section-slider']}>
                <PictureSlider data={PictureSliderData} />
            </section>

            <section className={classes.faq}>
                <h2 className={classes.title2}>FAQ</h2>
                <div className={classes['faq-container']}>
                    <div>
                        <ul className={classes['faq-list']}>
                            <li onClick={() => {slideToggler(1)}}>Compatibility</li>
                            <li onClick={() => {slideToggler(2)}}>Installation</li>
                            <li onClick={() => {slideToggler(3)}}>Technical details</li>
                            <li onClick={() => {slideToggler(4)}}>Use</li>
                            <li onClick={() => {slideToggler(5)}}>Maintenance</li>
                            <li onClick={() => {slideToggler(6)}}>Delivery</li>
                        </ul>
                    </div>

                    <div className={classes['info-container']}>
                        { slide === 1 && <FaqSlide data={Compatibility} />}
                        { slide === 2 && <FaqSlide data={Installation} />}
                        { slide === 3 && <FaqSlide data={Technical} />}
                        { slide === 4 && <FaqSlide data={Use} />}
                        { slide === 5 && <FaqSlide data={Maintenance} />}
                        { slide === 6 && <FaqSlide data={Installation} />}   
                    </div>
                </div>
            </section>

            <div className={classes['section-demo']}>
                <div className={classes['demo-wave']}>
                    <img src={wave2} alt='wave' />
                </div>
                <div className={classes['request-container']}>
                    <RequestDemo src={pic} />
                </div>
            </div>

            <section className={classes['training-section']}>
                <div className={classes['training-wave']}>
                    <img src={wave3} alt='wave' />
                </div>

                <div>
                    <h2 className={classes.title2}>Trainings for your team</h2>
                </div>

                <div>
                    <p className={classes.paragraph}>
                        With a new 3D printer you discovers the trainings opportunities for your team. Visit our trainings page to find out more.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className={classes.blackBtn}>Trainings</button> 
                </div>
            </section>
        </Fragment>
    )
}

export default ProductPage