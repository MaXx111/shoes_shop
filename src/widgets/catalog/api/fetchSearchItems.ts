import { createAsyncThunk } from "@reduxjs/toolkit"
import { backend } from "../../../shared/api/backend"

export const fetchSearchItems = createAsyncThunk(
    'searchItems/fetchAll',
    async(searchValue: string, thunkAPI) => {
        try {
            const response = await backend.get('items', {
                params: {q: searchValue}
            })

            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузке')
        }
    }
)