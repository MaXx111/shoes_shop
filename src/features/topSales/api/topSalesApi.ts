import { createAsyncThunk } from "@reduxjs/toolkit"
import { backend } from "../../../shared/api/backend"

export const fetchTopSalse = createAsyncThunk(
    'topSales/fetchAll',
    async(_, thunkAPI) => {
        try {
            const response = await backend.get('top-sales')

            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузке')
        }
    }
)