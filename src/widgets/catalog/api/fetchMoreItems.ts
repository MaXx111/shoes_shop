import { createAsyncThunk } from "@reduxjs/toolkit"
import { backend } from "../../../shared/api/backend"

interface urlParams {
    length: number,
    categoryId: number,
    searchValue?: string
}

export const fetchMoreItems = createAsyncThunk(
    'moreItems/fetchMore',
    async(urlParams: urlParams, thunkAPI) => {

        try {
            const response = await backend.get('items', {
                params: {offset: urlParams.length, q: urlParams.searchValue, categoryId: urlParams.categoryId},
                paramsSerializer: function paramsSerializer(params) {
                    if(params.categoryId == 1) return `offset=${params.offset}`

                    if(params.categoryId == 1) return `q=${params.q}&offset=${params.offset}`

                    return `categoryId=${params.categoryId}&offset=${params.offset}`
                }
            })
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузке')
        }
    }
)