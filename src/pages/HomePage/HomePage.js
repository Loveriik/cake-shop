import classes from './HomePage.module.css'
import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import RequestDemo from '../../components/RequestDemo'
import About from '../../components/About'
import News from '../../components/News'

import wave1 from '../../images/wave1.png'
import wave2 from '../../images/wave2.png'
import wave7 from '../../images/wave8.png'
import pic1 from '../../images/pic1.png'
import cakewalk from '../../images/cakewalk.png'
import petiss3 from '../../images/petiss3.png'
import pic2 from '../../images/pic2.png'

import Slider from '../../components/Slider'

import profilePic1 from '../../images/commentPic.png'
import profilePic2 from '../../images/profile2.jpg'
import profilePic3 from '../../images/profile3.jpg'
import profilePic4 from '../../images/profile4.jpg'

const slides = [
    { 
        p: 'My family stopped in this evening and were immediately impresses by the decor and friendly staff. While the shop is small and seating limited the food was delicious and      staff welcoming. I had a small bowl of red velvet ice cream and a coconut cupcake. Both were heavenly. The cupcakes would be great for a party or get together. Will be back next time we are in the area.',
        name: 'Elisabeth',
        title: 'CEO at Ikea',
        src: profilePic1
    },
    { 
        p: 'In actuality, i wanted to try the bday cake cupcake, but i came at the end of the day and they were out. So i ended up going with a chocolate cake and it was big with plenty of frosting - I generally prefer more than less because you can always scrape off excess. The worker was kind and invited me back the next day for what i really wanted. all in all, pleasant visit.',
        name: 'Mike',
        title: 'CEO at CakeIsLife',
        src: profilePic2
    },
    { 
        p: 'Their cupcakes are larger than norm and absolutely delicious. I had a tough time deciding and settled on the Piña Colada, a great, scrumptious choice. Much better than a slice of cake.',
        name: 'Tilda',
        title: 'CEO at SweetKitchen',
        src: profilePic3
    },
    { 
        p: 'This cake was amazing! Moist & rich with the perfect amount of chocolate! I loved the easy whipped ganache, but my kids want a sweeter frosting next time, so I’ll go for a buttercream or even just a sprinkle of powdered sugar. Cakes are not my strong suit in baking, so I’m very pleased with how well this turned out. Thanks!',
        name: 'Jhon',
        title: 'CEO at BestBuritos',
        src: profilePic4
    }
  ]


const HomePage = () => {
    return (
        <Fragment>
            <header className={classes.background}>
                <div className={classes.container}>
                    <h1 className={classes.h1}>Discover the</h1>
                    <h2 className={classes.h2}>3d food printing</h2>
                </div>
            </header>

            <section className={classes.section1}>
                <div className={classes.wave1}>
                    <img src={wave1} alt='wave1' />
                </div>
                <div className={classes.wave2}>
                    <img src={wave2} alt='wave2' />
                </div>
                <div className={classes.zon1}>
                    <h2 className={classes.title2}>We create <br />more than <br />just 3D printers</h2>
                </div>
                <div className={classes.zon3}>
                    <p className={classes.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div className={classes.zon2}>
                    <p className={classes.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a >Read more <FontAwesomeIcon icon={faArrowRight} size='lg' /></a>
                </div>
                <div className={classes.zon4}>
                    <img src={pic1} alt='cake' />
                </div>
            </section>

            <section className={classes.section2}>
                <h2 className={classes.title2}>Our solutions</h2>
                <div className={classes['section2-container']}>
                    <div>
                        <div><img src={petiss3} alt='petiss3' className={classes['section2-img']}/></div>
                        <h3 className={classes['section2-title3']}>Petiss3</h3>
                        <p className={classes['section2-paragraph']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a className={classes['section2-link']}>Pre-order <FontAwesomeIcon icon={faArrowRight} size='lg' /></a>
                    </div>
                    <div>
                        <div><img src={cakewalk} alt='cakewalk' className={classes['section2-img']}/></div>
                        <h3 className={classes['section2-title3']}>Cakewalk</h3>
                        <p className={classes['section2-paragraph']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a className={classes['section2-link']}>Pre-order <FontAwesomeIcon icon={faArrowRight} size='lg' /></a>
                    </div>
                </div>
            </section>

            <div className={classes['demo-margin']}>
                <RequestDemo src={pic2}/>
            </div>

            <section className={classes.section3}>
                <h2 className={classes.title2}>They talk about us</h2>
                <Slider slides={slides}/>
            </section>

            <div className={classes['about-margin']}>
                <About direction={false} text='About La Patisserie Numerique '/>
            </div>

            <div className={classes['news-margin']}>
                <News />
            </div>
            
            <section className={classes.section4}>
                <img src={wave7} alt='wave' />
            </section>

        </Fragment>
    )
}

export default HomePage