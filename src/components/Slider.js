import { useState } from "react"
import classes from './Slider.module.css'

import quotes from '../images/quotes.png'
import quotes2 from '../images/quotes2.png'

const Slider = ({slides}) => {
    
    const [curIndex, setCurIndex] = useState(0)

    const goToPrevious = () => {
        const isFirstSlide = curIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : curIndex - 1 
        setCurIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = curIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : curIndex + 1 
        setCurIndex(newIndex)
    }

    return (
        <div className={classes['slider-container']}>
            <div className={`${classes['left-arrow']} ${classes.arrow}`} onClick={goToPrevious}>
                <svg width="86" height="8" viewBox="0 0 86 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.646446 4.35355C0.451187 4.15829 0.451187 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53554 0.464466C4.7308 0.659728 4.7308 0.976311 4.53554 1.17157L1.70711 4L4.53554 6.82843C4.7308 7.02369 4.7308 7.34027 4.53554 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM86 4.5L1 4.5V3.5L86 3.5V4.5Z" />
                </svg>
            </div>
            <div className={`${classes['right-arrow']} ${classes.arrow}`} onClick={goToNext}>
                <svg width="86" height="8" viewBox="0 0 86 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M85.3536 4.35355C85.5488 4.15829 85.5488 3.84171 85.3536 3.64645L82.1716 0.464466C81.9763 0.269204 81.6597 0.269204 81.4645 0.464466C81.2692 0.659728 81.2692 0.976311 81.4645 1.17157L84.2929 4L81.4645 6.82843C81.2692 7.02369 81.2692 7.34027 81.4645 7.53553C81.6597 7.7308 81.9763 7.7308 82.1716 7.53553L85.3536 4.35355ZM0 4.5L85 4.5V3.5L0 3.5L0 4.5Z" />
                </svg>
            </div>
            
            <div className={classes['comment-slide']}>
                <div className={classes['comment-pic1']}>
                    <img src={quotes} alt='quotes' />
                </div>
                <div className={classes['comment-pic1-2']}>
                    <img src={quotes2} alt='quotes' />
                </div>
                <p className={classes.paragraph1}>{slides[curIndex].p}</p>
                <div className={classes['profile-container']}>
                    <img className={classes['profile-pic']} src={slides[curIndex].src} alt='profPic' />
                    <div>
                        <h3 className={classes.h3}>{slides[curIndex].name}</h3>
                        <p className={classes.paragraph2}>{slides[curIndex].title}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Slider