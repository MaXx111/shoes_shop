import { createSlice} from "@reduxjs/toolkit";
import { CartItem } from "./type";

interface initialStateProps {
    cartItems: CartItem[],
    loading: boolean,
    error: null | string,
    countItems: number,
    totalCostItems: number
}

const initialState: initialStateProps = {
    cartItems: [],
    loading: false,
    error: null,
    countItems: 0,
    totalCostItems: 0
}


export const CartSlice = createSlice({
    name: 'ProductInfo',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.cartItems = [...state.cartItems, action.payload],
            state.countItems = state.cartItems.length;
            state.totalCostItems = state.totalCostItems + action.payload.totalCost
        },
        deleteItem(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            state.totalCostItems = state.totalCostItems - action.payload.totalCost;
            state.countItems = state.cartItems.length
        }
     },
    extraReducers: (builder) => {
        builder
            
    }
})

export default CartSlice.reducer