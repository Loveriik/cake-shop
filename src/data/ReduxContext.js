import { createSlice, configureStore } from "@reduxjs/toolkit";

const defaultCartState = {
    items: [],
    totalAmount:0
}

const cartSlice = createSlice({
    name:'cart',
    initialState: defaultCartState,
    reducers: {
        addToCart(state, action) {
            state.totalAmount = state.totalAmount + action.payload.price

            const existingCartItemIndex = state.items.findIndex((item) => item.id === action.payload.id)
            const existingCartItem = state.items[existingCartItemIndex]

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.payload.amount
                }

                state.items[existingCartItemIndex] = updatedItem
            } else {
                state.items = state.items.concat(action.payload)
            }

        },
        removeFromCart(state, action) {
            const existingCartItemIndex = state.items.findIndex((item) => item.id === action.payload)
            const existingCartItem = state.items[existingCartItemIndex]
            state.totalAmount = state.totalAmount - existingCartItem.price

            if (existingCartItem.amount === 1) {
                state.items = state.items.filter((item) => item.id !== action.payload)
            } else {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount - 1
                }
                state.items[existingCartItemIndex] = updatedItem
            }

        },
        deleteFromCart(state, action) {
            const existingCartItemIndex = state.items.findIndex((item) => item.id === action.payload)
            const existingCartItem = state.items[existingCartItemIndex]
            state.totalAmount = state.totalAmount - existingCartItem.price * existingCartItem.amount

            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        reset(state) {
            state.items = []
            state.totalAmount = 0
        }
    }
})


const clientSlice = createSlice({
    name:'clientInfo',
    initialState: { info: {} },
    reducers: {
        addInfo(state, action) {
            state.info = action.payload
        },
        reset(state) {
            state.info = {}
        }
    }
})

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        client:clientSlice.reducer
    }
})

export const cartActions = cartSlice.actions
export const clientActions = clientSlice.actions

export default store
