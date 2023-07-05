import { createSlice } from "@reduxjs/toolkit";
import { CatalogItem } from "./type";
import { fetchCatalogCategoryes } from "../api/fetchCategoryes.ts";
import { fetchCatalogItems } from "../api/fetchCatalogItems.ts";

interface initialStateProps {
    products: CatalogItem[],
    loading: boolean,
    error: null | string,
    selectedCategory: number,
    categorys: {
        id: number,
        title: string
    }[],
    loadingMoreItems: boolean,
    allowMoreItems: boolean
}

const initialState = {
    products: [],
    loading: false,
    error: null,
    selectedCategory: 1,
    categorys: [],
    loadingMoreItems: false,
    allowMoreItems: true
} as initialStateProps


export const CatalogSlice = createSlice({
    name: 'ProductInfo',
    initialState,
    reducers:{
        selectCategory(state, action)  {
            state.selectedCategory = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalogCategoryes.fulfilled, (state, action) => {
                state.categorys = action.payload
            })
            .addCase(fetchCatalogCategoryes.rejected, (state, action) => {
                state.error = String(action.payload);
            })
            .addCase(fetchCatalogItems.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchCatalogItems.fulfilled, (state, action) => {
                state.loading = false,
                state.products = action.payload
            })
            .addCase(fetchCatalogItems.rejected, (state, action) => {
                state.loading = false,
                state.error = String(action.payload)
            })
    }
})

export default CatalogSlice.reducer