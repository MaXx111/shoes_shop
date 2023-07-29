import { createAsyncThunk } from "@reduxjs/toolkit"
import { backend } from "../../../shared/api/backend"

export const fetchCatalogCategoryes = createAsyncThunk(
    'Categoryes/fetchAll',
    async(_, thunkAPI) => {
        try {
            const response = await backend.get("categories")
            
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузке')
        }
    }
)