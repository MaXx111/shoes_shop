import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchProductInfo = createAsyncThunk(
    'ProductInfo/fetchItem',
    async(idProduct: string, thunkAPI) => {
        try {
            const response = await axios.get(`http://localhost:7070/api/items/${idProduct}`)
            
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузке')
        }
    }
)