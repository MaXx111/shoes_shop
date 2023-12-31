import { createSlice} from "@reduxjs/toolkit";
import { fetchProductInfo } from "../api/productInfoApi";
import { ProductItem } from "./type";
import { productSize } from "../../../shared/model/brandtypes";

interface initialStateProps {
    product: ProductItem,
    loading: boolean,
    error: null | string,
    selected: productSize | null,
    productCount: number,
    allowToAdd: boolean
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
    productCount: 0,
    allowToAdd: false
} as initialStateProps


export const ProductInfoSlice = createSlice({
    name: 'ProductInfo',
    initialState,
    reducers:{
        setInitialState(state) {
            state.selected = initialState.selected,
            state.productCount = initialState.productCount
            state.allowToAdd = initialState.allowToAdd
        },
        addSelected(state, action) {
            state.selected = action.payload
        },
        increment(state) {
            if(state.productCount <= 9)state.productCount = state.productCount + 1
        },
        decrement(state) {
            if(state.productCount >= 1) state.productCount = state.productCount - 1
        },
        allowAddToCart(state, action) {
            state.allowToAdd = action.payload;
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
                state.allowToAdd = getAllow(action.payload)
            })
            .addCase(fetchProductInfo.rejected, (state, action) => {
                state.loading = false,
                state.error = String(action.payload)
            })
            
    }
})

export default ProductInfoSlice.reducer

function getAllow(product: ProductItem) {

    let allow = false

    product.sizes.map(item => {
        if(item.available) {
            allow = true
        }
    })

    return allow
}