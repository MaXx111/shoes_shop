import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchTopSalse = createAsyncThunk(
    'topSales/fetchAll',
    async(_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:7070/api/top-sales');
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузке')
        }
    }
)