import { createSlice} from "@reduxjs/toolkit";
import { fetchProductInfo } from "../api/productInfoApi";
import { ProductItem } from "./type";

interface initialStateProps {
    product: ProductItem,
    loading: boolean,
    error: null | string,
    selected: string | null,
    productCount: number
}

const initialState = {
    product: {
        sku: '',
        manufacturer: '',
        color: '',
        material: '',
        season: '',
        reason: '',
        sizes: [{
        size: '',
        available: false
        }],
    images: [''],
    title: '',
    price: 0,
    id: 0
    },
    loading: false,
    error: null,
    selected: null,
    productCount: 0
} as initialStateProps


export const ProductInfoSlice = createSlice({
    name: 'ProductInfo',
    initialState,
    reducers:{
        setInitialState(state) {
            state.selected = initialState.selected,
            state.productCount = initialState.productCount
        },
        addSelected(state, action) {
            state.selected = action.payload
        },
        increment(state) {
            if(state.productCount <= 9)state.productCount = state.productCount + 1
        },
        decrement(state) {
            if(state.productCount >= 1) state.productCount = state.productCount - 1
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductInfo.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProductInfo.fulfilled, (state, action) => {
                state.loading = false,
                state.product = action.payload
            })
            .addCase(fetchProductInfo.rejected, (state, action) => {
                state.loading = false,
                state.error = String(action.payload)
            })
            
    }
})

export default ProductInfoSlice.reducer