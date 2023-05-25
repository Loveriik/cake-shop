import classes from './RequestDemo.module.css'

import ThankyouPage from './ThankyouPage'
import { useReducer, useState, useEffect } from 'react'

const emailValidation = (item) => {
    return (
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(item)
    )
}

const inputTextValidation = (item) => {
    return item.trim().length > 0
}

const nameReducer = (state, action) => {

    if (action.type === 'NAME') {
        return {
            value:action.val,
            isValid: inputTextValidation(action.val),
            isTouched: state.isTouched 
        }
    }

    if (action.type === 'NAME_BLUR') {
        return {
            value:state.value,
            isValid:inputTextValidation(state.value),
            isTouched:true
        }
    }

    return {
        value: '',
        isValid: true,
        isTouched: false
    }
}

const emailReducer = (state, action) => {

    if (action.type === 'EMAIL') {
        return {
            value:action.val,
            isValid: emailValidation(action.val),
            isTouched: state.isTouched
        }
    }

    if (action.type === 'EMAIL_BLUR') {
        return {
            value:state.value,
            isValid: emailValidation(state.value),
            isTouched: true
        }
    }

    return {
        value: '',
        isValid: null,
        isTouched: false
    }
}

const areaReducer = (state, action) => {

    if (action.type === 'AREA') {
        return {
            value:action.val,
            isValid: inputTextValidation(action.val),
            isTouched: state.isTouched
        }
    }

    if (action.type === 'AREA_BLUR') {
        return {
            value:state.value,
            isValid: inputTextValidation(state.value),
            isTouched: true
        }
    }

    return {
        value: '',
        isValid: null,
        isTouched: false
    }
}

// const formInitialState = { 
//     nameValue:'', 
//     nameIsValid: true, 
//     nameIsTouched: false, 
//     emailValue:'',
//     emailIsValid:true,
//     emailIsTouched:false
// }

const RequestDemo = (props) => {

    const [ nameState, dispatchName ] = useReducer(nameReducer, { value: '', isValid: undefined, isTouched: false })
    const [ emailState, dispatchEmail ] = useReducer(emailReducer, { value: '', isValid: undefined, isTouched: false })
    const [ areaState, dispatchArea ] = useReducer(areaReducer, { value: '', isValid: undefined, isTouched: false })
    const [ formIsValid, setFormIsValid ] = useState(false)

    const [ showMessage, setShowMessage ] = useState(false)

    const { isValid: nameIsValid } = nameState
    const { isValid: emailIsValid } = emailState
    const { isValid: areaIsValid } = areaState

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(
                nameIsValid && emailIsValid && areaIsValid
            )
        }, 500)

        return () => {
            clearTimeout(identifier)
        }
    }, [nameIsValid, emailIsValid,areaIsValid])

    const nameChangeHandler = (e) => {
        dispatchName({
            type:'NAME',
            val:e.target.value
        })
    }                                   

    const emailChangeHandler = (e) => {
        dispatchEmail({
            type:'EMAIL',
            val:e.target.value
        })
    }

    const areaChangeHandler = (e) => {
        dispatchArea({
            type:'AREA',
            val:e.target.value
        })
    }   

    const nameValidity = () => {
        dispatchName({
            type:'NAME_BLUR'
        })
    }

    const emailValidity = () => {
        dispatchEmail({
            type: 'EMAIL_BLUR'
        })
    }

    const areaValidity = () => {
        dispatchArea({
            type:'AREA_BLUR'
        })
    }

    const verification = (e) => {
        e.preventDefault()
       
        if (!formIsValid) {
            return
        }

        setShowMessage(true)

    }   
    

    return (
        <section className={classes.section}>
            <div className={classes.image}><img src={props.src} alt='pic2'/></div>
            {!showMessage ? <form className={classes.form} onSubmit={verification}>
                <h2 className={classes.title2}>Request a demo</h2>
                <div className={`${classes['input-holder']} ${classes.input1}`}>
                    <label htmlFor='name' className={classes.label}>Name:</label>
                    <input 
                        value={nameState.value || ''} 
                        className={`${classes.input} ${!nameState.isValid && nameState.isTouched ? classes.error : ''}`} 
                        type='text' 
                        id='name' 
                        onChange={nameChangeHandler}
                        onBlur={nameValidity}
                    />
                    {!nameState.isValid && nameState.isTouched ? <p className={classes['error-paragraph']}>Please, type your name</p> : <p></p>}
                </div>
                <div className={`${classes['input-holder']} ${classes.input2}`}>
                    <label htmlFor='email' className={classes.label}>E-mail:</label>
                    <input 
                        value={emailState.value || ''} 
                        className={`${classes.input} ${!emailState.isValid && emailState.isTouched ? classes.error : ''}`}  
                        type='email' 
                        id='email' 
                        onChange={emailChangeHandler}
                        onBlur={emailValidity}
                    />
                    {!emailState.isValid && emailState.isTouched ? <p className={classes['error-paragraph']}>Email is incorrect</p> : <p></p>}
                </div>
                <div className={`${classes['input-holder']} ${classes.input2}`}>
                    <label className={classes.label}>Message</label>
                    <textarea 
                        value={areaState.value || ''}
                        className={`${classes.input} ${!areaState.isValid && areaState.isTouched ? classes.error : ''}`} 
                        name='message' 
                        rows='3' 
                        col='50' 
                        onChange={areaChangeHandler} 
                        onBlur={areaValidity}
                    />
                    {!areaState.isValid && areaState.isTouched ? <p className={classes['error-paragraph']}>Please, write a short message to us.</p> : <p></p>}
                </div>
                <input className={classes['submit-btn']} type='submit' value='Submit'/>
            </form> : <ThankyouPage /> }
        </section>
    )
}

export default RequestDemo