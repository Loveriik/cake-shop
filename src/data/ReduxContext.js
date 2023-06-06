import { createSlice, configureStore } from "@reduxjs/toolkit";

const defaultCartState = {
    items: [],
    totalAmount:0
}

const cartSlice = createSlice({
    name:'cart',
    initialState: defaultCartState,
    reducers: {
        add(state, action) {
            state.totalAmount = state.totalAmount + action.payload.price

            const existingCartItemIndex = state.items.findIndex((item) => item.id === action.payload.id)
            const existingCartItem = state.items[existingCartItemIndex]

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.payload.amount
                }
                state.items[existingCartItem] = updatedItem
            } else {
                state.items = state.items.concat(action.item)
            }

        },
        remove(state, action) {
            const existingCartItemIndex = state.items.findIndex((item) => item.id === action.payload)
            const existingCartItem = state.items[existingCartItemIndex]
            state.totalAmount = state.totalAmount - existingCartItem.price

            if (existingCartItem.amount === 1) {
                state.items.filter((item) => item.id !== action.payload)
            } else {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount - 1
                }
                state.items[existingCartItemIndex] = updatedItem
            }

        },
        delete(state, action) {
            const existingCartItemIndex = state.items.findIndex((item) => item.id === action.payload)
            const existingCartItem = state.items[existingCartItemIndex]
            state.totalAmount = state.totalAmount - existingCartItem.price * existingCartItem.amount

            state.items.filter((item) => item.id !== action.payload)
        }
    }
})

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

export const cartActions = cartSlice.actions

export default store
