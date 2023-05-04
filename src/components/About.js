import classes from './About.module.css'

import woman from '../images/woman.png'

const About = (props) => {
    return (
        <div className={`${classes.container} ${props.direction ? classes.reverse : undefined}`}>
            <h2 className={classes.titleMob}> 
                    About
                    <br />La Patisserie
                    Numerique 
                </h2>
            <div className={classes.imgHolder}>
                <img src={woman} alt='woman with cake'/>
            </div>
            <div>
                <h2 className={classes.title2}> 
                    {props.text}
                </h2>
                <p className={classes.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p className={classes.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </div>
    )
}

export default About