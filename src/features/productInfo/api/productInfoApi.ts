import { createAsyncThunk } from "@reduxjs/toolkit"
import { backend } from "../../../shared/api/backend"

export const fetchProductInfo = createAsyncThunk(
    'ProductInfo/fetchItem',
    async(idProduct: string, thunkAPI) => {
        try {
            const response = await backend.get(`items/${idProduct}`)
            
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузке')
        }
    }
)