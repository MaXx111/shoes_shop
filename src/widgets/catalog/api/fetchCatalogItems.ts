import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCatalogItems = createAsyncThunk(
    'CatalogItems/fetchCustom',
    async(id: number, thunkAPI) => {
        try {
            const response = await axios.get(getCustomLink(id))
            
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузке')
        }
    }
)

function getCustomLink(id: number) {

    if(id == 1) return 'http://localhost:7070/api/items'

    return `http://localhost:7070/api/items?categoryId=${id}`
}