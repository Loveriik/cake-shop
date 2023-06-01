
/* Reducer for text inputs */

export const textInitial = {
    nameValue: '',
    isNameValid: undefined,
    isNameTouched: false,
    addressValue: '',
    isAddressValid: undefined,
    isAddressTouched: false,
    cityValue: '',
    isCityValid: undefined,
    isCityTouched: false,
    countryValue: '',
    isCountryValid: undefined,
    isCountryTouched: false,
    cardNameValue: '',
    isCardNameValid: undefined,
    isCardNameTouched: false,

}

const inputTextValidation = (item) => {
    return item.trim().length > 0
}

export const textReducer = (state, action) => {
    if (action.type === 'NAME') {
        return {
            ...state,
            nameValue:action.val,
            isNameValid:inputTextValidation(action.val),
            isNameTouched:state.isNameTouched
        }
    }

    if (action.type === 'NAME_BLUR') {
        return {
            ...state,
            nameValue:state.nameValue,
            isNameValid:inputTextValidation(state.nameValue),
            isNameTouched:true
        }
    }

    if (action.type === 'ADDRESS') {
        return {
            ...state,
            addressValue:action.val,
            isAddressValid:inputTextValidation(action.val),
            isAddressTouched:state.isAddressTouched
        }
    }

    if (action.type === 'ADDRESS_BLUR') {
        return {
            ...state,
            addressValue:state.addressValue,
            isAddressValid:inputTextValidation(state.addressValue),
            isAddressTouched:true
        }
    }

    if (action.type === 'CITY') {
        return {
            ...state,
            cityValue:action.val,
            isCityValid:inputTextValidation(action.val),
            isCityTouched:state.isCityTouched
        }
    }

    if (action.type === 'CITY_BLUR') {
        return {
            ...state,
            cityValue:state.cityValue,
            isCityValid:inputTextValidation(state.cityValue),
            isCityTouched:true
        }
    }

    if (action.type === 'COUNTRY') {
        return {
            ...state,
            countryValue:action.val,
            isCountryValid:inputTextValidation(action.val),
            isCountryTouched:state.isCountryTouched
        }
    }
    
    if (action.type === 'COUNTRY_BLUR') {
        return {
            ...state,
            countryValue:state.countryValue,
            isCountryValid:inputTextValidation(state.countryValue),
            isCountryTouched:true
        }
    }

    if (action.type === 'CARDNAME') {
        return {
            ...state,
            cardNameValue:action.val,
            isCardNameValid:inputTextValidation(action.val),
            isCardNameTouched:state.isCardNameTouched
        }
    }

    if (action.type === 'CARDNAME_BLUR') {
        return {
            ...state,
            cardNameValue:state.cardNameValue,
            isCardNameValid:inputTextValidation(state.cardNameValue),
            isCardNameTouched:true
        }
    }

    return textInitial
}

/* Digital reducer */

export const initial = {
    emailValue: '',
    isEmailValid: undefined,
    isEmailTouched: false,
    phoneValue: '',
    isPhoneValid: undefined,
    isPhoneTouched: false,
    postalValue: '',
    isPostalValid: undefined,
    isPostalTouched: false,
    cardValue: '',
    isCardValid: undefined,
    isCardTouched: false,
    dateValue: '',
    isDateValid: undefined,
    isDateTouched: false,
    cvvValue: '',
    isCvvValid: undefined,
    isCvvTouched: false
}

const emailValidation = (item) => {
    return (
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(item)
    )
}

const inputValidation = (item) => {
    return item.trim().length > 0 
}

export const reducer = (state, action) => {
    if (action.type === 'EMAIL') {
        return {
            ...state,
            emailValue:action.val,
            isEmailValid:emailValidation(action.val),
            isEmailTouched:state.isEmailTouched
        }
    }

    if (action.type === 'EMAIL_BLUR') {
        return {
            ...state,
            emailValue:state.emailValue,
            isEmailValid:emailValidation(state.emailValue),
            isEmailTouched:true
        }
    }

    if (action.type === 'PHONE') {
        return {
            ...state,
            phoneValue:action.val,
            isPhoneValid:inputValidation(action.val),
            isPhoneTouched:state.isPhoneTouched
        }
    }

    if (action.type === 'PHONE_BLUR') {
        return {
            ...state,
            phoneValue:state.phoneValue,
            isPhoneValid:inputValidation(state.phoneValue),
            isPhoneTouched:true
        }
    }

    if (action.type === 'POSTAL') {
        return {
            ...state,
            postalValue:action.val,
            isPostalValid:inputValidation(action.val),
            isPostalTouched:state.isPostalTouched
        }
    }

    if (action.type === 'POSTAL_BLUR') {
        return {
            ...state,
            postalValue:state.postalValue,
            isPostalValid:inputValidation(state.postalValue),
            isPostalTouched:true
        }
    }

    if (action.type === 'CARD') {
        return {
            ...state,
            cardValue:action.val,
            isCardValid:inputValidation(action.val),
            isCardTouched:state.isCardTouched
        }
    }

    if (action.type === 'CARD_BLUR') {
        return {
            ...state,
            cardValue:state.cardValue,
            isCardValid:inputValidation(state.cardValue),
            isCardTouched:true
        }
    }

    if (action.type === 'DATE') {
        return {
            ...state,
            dateValue:action.val,
            isDateValid:inputValidation(action.val),
            isDateTouched:state.isDateTouched
        }
    }

    if (action.type === 'DATE_BLUR') {
        return {
            ...state,
            dateValue:state.dateValue,
            isDateValid:inputValidation(state.dateValue),
            isDateTouched:true
        }
    }

    if (action.type === 'CVV') {
        return {
            ...state,
            cvvValue:action.val,
            isCvvValid:inputValidation(action.val),
            isCvvTouched:state.isCvvTouched
        }
    }

    if (action.type === 'CVV_BLUR') {
        return {
            ...state,
            cvvValue:state.cvvValue,
            isCvvValid:inputValidation(state.cvvValue),
            isCvvTouched:true
        }
    }

    return initial
}