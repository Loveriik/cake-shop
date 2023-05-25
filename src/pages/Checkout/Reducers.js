
/* Reducer for text inputs */

export const textInitial = {
    nameValue: '',
    isNameValid: true,
    isNameTouched: false,
    addressValue: '',
    isAddressValid: true,
    isAddressTouched: false,
    cityValue: '',
    isCityValid: true,
    isCityTouched: false,
    countryValue: '',
    isCountryValid: true,
    isCountryTouched: false,
    cardNameValue: '',
    isCardNameValid: true,
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
            isNameTouched:state.isTouched
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
            isAddressTouched:state.isTouched
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
            isCityTouched:state.isTouched
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
            isCountryTouched:state.isTouched
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
            isCardNameTouched:state.isTouched
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