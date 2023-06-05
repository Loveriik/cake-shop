import CheckoutContext from "./checkout-context"

const CheckoutProvider = (props) => {

    const checkoutContext = {
        client: {}
    }

    return (
        <CheckoutContext.Provider value={checkoutContext}>
            {props.children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutProvider