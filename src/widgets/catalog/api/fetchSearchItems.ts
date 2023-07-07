import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchSearchItems = createAsyncThunk(
    'searchItems/fetchAll',
    async(searchValue: string, thunkAPI) => {
        try {
            const response = await axios.get(`http://localhost:7070/api/items?q=${searchValue}`)

            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузке')
        }
    }
)