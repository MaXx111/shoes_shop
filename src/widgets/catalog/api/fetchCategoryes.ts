import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCatalogCategoryes = createAsyncThunk(
    'Categoryes/fetchAll',
    async(_, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:7070/api/categories")
            
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузке')
        }
    }
)