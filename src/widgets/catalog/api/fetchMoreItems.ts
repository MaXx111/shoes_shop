import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

interface urlParams {
    length: number,
    categoryId: number,
    searchValue?: string
}

export const fetchMoreItems = createAsyncThunk(
    'moreItems/fetchMore',
    async(urlParams: urlParams, thunkAPI) => {
        try {
            const response = await axios.get(getUrl(urlParams.categoryId, urlParams.length, urlParams.searchValue))
            
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузке')
        }
    }
)

function getUrl(categoryId: number, length: number, seacrchValue: string = '') {

    if(categoryId == 1) return `http://localhost:7070/api/items?offset=${length}`

    if(categoryId == 0) return `http://localhost:7070/api/items?q=${seacrchValue}&offset=${length}`

    return `http://localhost:7070/api/items?categoryId=${categoryId}&offset=${length}`
}