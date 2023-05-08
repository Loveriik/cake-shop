import classes from './ContactUs.module.css'

import RequestDemo from '../../components/RequestDemo'

import pic3 from '../../images/pic3.png'
import wave from '../../images/wave8.png'
import wave2 from '../../images/wave9.png'

const ContactUs = () => {
    return (
        <div className={classes.container}>
            <div className={classes['request-container']}>
                <RequestDemo src={pic3} />
            </div>
            <div className={classes['desk-wave']}>
                <img src={wave2} alt='wave'/>
            </div>
            <div className={classes['mob-wave']}>
                <img src={wave} alt='wave'/>
            </div>
        </div>
    )
}

export default ContactUs