import { createAsyncThunk } from "@reduxjs/toolkit"
import { backend } from "../../../shared/api/backend"

export const fetchCatalogItems = createAsyncThunk(
    'CatalogItems/fetchCustom',
    async(id: number, thunkAPI) => {

        try {
                const response = await backend.get('items', {
                    params: {categoryId: id},
                    paramsSerializer: function paramsSerializer(params) {
                        if(params.categoryId == 1) return ''

                        return Object.entries(params)
                        .map(([key, value]) => `${key}=${value}`)
                        .join('&')
                    }
                })
            
            
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузке')
        }
    }
)