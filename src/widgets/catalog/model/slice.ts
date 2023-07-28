import { createSlice } from "@reduxjs/toolkit";
import { CatalogItem } from "./type.tsx";
import { fetchCatalogCategoryes } from "../api/fetchCategoryes.ts";
import { fetchCatalogItems } from "../api/fetchCatalogItems.ts";
import { fetchMoreItems } from "../api/fetchMoreItems.ts";
import { fetchSearchItems } from "../api/fetchSearchItems.ts";

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
    allowMoreItems: boolean,
    searchValue: string
}

const initialState = {
    products: [],
    loading: false,
    error: null,
    selectedCategory: 1,
    categorys: [],
    loadingMoreItems: false,
    allowMoreItems: true,
    searchValue: ''
} as initialStateProps


export const CatalogSlice = createSlice({
    name: 'ProductInfo',
    initialState,
    reducers:{
        selectCategory(state, action) {
            state.selectedCategory = action.payload
        },
        addSearchValue(state, action) {
            state.searchValue = action.payload
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
                state.allowMoreItems = action.payload.length < 6 ? false : true
            })
            .addCase(fetchCatalogItems.rejected, (state, action) => {
                state.loading = false,
                state.error = String(action.payload)
            })
            .addCase(fetchMoreItems.pending, (state) => {
                state.loadingMoreItems = true,
                state.allowMoreItems = false
            })
            .addCase(fetchMoreItems.fulfilled, (state, action) => {
                state.loadingMoreItems = false,
                state.allowMoreItems = action.payload.length < 6 ? false : true,
                state.products = [...state.products, ...action.payload]
            })
            .addCase(fetchMoreItems.rejected, (state, action) => {
                state.allowMoreItems = false,
                state.error = String(action.payload),
                state.loading = false;
            })
            .addCase(fetchSearchItems.pending, (state) => {
                state.loading = true,
                state.allowMoreItems = false
            })
            .addCase(fetchSearchItems.fulfilled, (state, action) => {
                state.loading = false,
                state.allowMoreItems = action.payload.length < 6 ? false : true,
                state.products = action.payload
            })
            .addCase(fetchSearchItems.rejected, (state, action) => {
                state.loading = false,
                state.allowMoreItems = false,
                state.error = String(action.payload)
            })
    }
})

export default CatalogSlice.reducer