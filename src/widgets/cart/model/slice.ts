import { createSlice} from "@reduxjs/toolkit";
import { CartItem } from "./type";
import { fetchCartPost } from "../api/postFetchCart";

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
    name: 'Cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.cartItems = [...state.cartItems, action.payload],
            state.countItems = state.cartItems.length;
        },
        deleteItem(state, action) {
            state.cartItems = state.cartItems.filter(item => item.productId !== action.payload.productId);
            state.countItems = state.cartItems.length
        },
        upgradeItem(state, action) {
            state.cartItems = upgrateCartItems(state.cartItems, action.payload)
        }     
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartPost.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchCartPost.fulfilled, (state) => {
                state.loading = false,
                state.cartItems = initialState.cartItems
                state.countItems = initialState.countItems
            })
            
    }
})

export default CartSlice.reducer

function upgrateCartItems(initial:CartItem[], updrate: CartItem) {

    let cart = initial.map(item => {
        if(item.id == updrate.id && item.size == updrate.size) {
            item.count = item.count + updrate.count
        }

        return item
    })

    return cart
}