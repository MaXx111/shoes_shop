import { createSlice} from "@reduxjs/toolkit";
import { CartItem } from "./type";

interface initialStateProps {
    cartItems: CartItem[],
    loading: boolean,
    error: null | string,
    countItems: number,
}

const initialState: initialStateProps = {
    cartItems: [],
    loading: false,
    error: null,
    countItems: 0
}


export const CartSlice = createSlice({
    name: 'ProductInfo',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.cartItems = [...state.cartItems, action.payload],
            state.countItems = state.cartItems.length;
        },
        deleteItem(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            state.countItems = state.cartItems.length
        },
        upgradeItem(state, action) {
            state.cartItems = upgrateCartItems(state.cartItems, action.payload)
        }     
    },
    extraReducers: (builder) => {
        builder
            
    }
})

export default CartSlice.reducer

function upgrateCartItems(initial:CartItem[], updrate: CartItem) {

    let cart = initial.map(item => {
        if(item.productId == updrate.productId && item.size == updrate.size) {
            item.count = item.count + updrate.count
            console.log(item)
        }

        return item
    })

    return cart
}