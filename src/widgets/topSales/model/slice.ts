import { createSlice} from "@reduxjs/toolkit";
import { fetchTopSalse } from "../api/topSalesApi";
import { topSalesItem } from '../model/types'

interface initialStateProps {
    items: topSalesItem[],
    loading: boolean,
    error: null | string
}

const initialState = {
    items: [],
    loading: false,
    error: null
} as initialStateProps


export const topSalesSlice = createSlice({
    name: 'TopSales',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopSalse.pending, (state) => {
                state.loading = true;
            }) 
            .addCase(fetchTopSalse.rejected, (state, action) => {
                state.loading = false;
                state.error = String(action.payload)
            })
            .addCase(fetchTopSalse.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload
            })
    }
})

export default topSalesSlice.reducer