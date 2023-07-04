import { createSlice} from "@reduxjs/toolkit";
import { fetchProductInfo } from "../api/prodectInfoApi";
import { ProductItem } from "./type";

interface initialStateProps {
    product: ProductItem,
    loading: boolean,
    error: null | string
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
    error: null
} as initialStateProps


export const ProductInfoSlice = createSlice({
    name: 'ProductInfo',
    initialState,
    reducers:{},
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