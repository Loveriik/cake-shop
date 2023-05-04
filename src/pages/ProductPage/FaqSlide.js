import classes from './Slide.module.css'

import { Fragment } from 'react'

const FaqSlide = ({data}) => {
    return (
        <Fragment>
            {data.map((item, itemIndex) => {
                return (
                    <div key={itemIndex}>
                        <h3 className={classes['faq-title3']}>{item.title}</h3>
                        <p className={classes.paragraph}>{item.paragraph}</p>
                    </div>
                )
            })}
        </Fragment>
    )
}

export default FaqSlide