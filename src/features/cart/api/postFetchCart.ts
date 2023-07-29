import { createAsyncThunk } from "@reduxjs/toolkit"
import { CartItem } from "../model/type"
import { backend } from "../../../shared/api/backend"

interface data {
    owner: {
        phone: string,
        address: string
    },
    items: CartItem[]
    
}

export const fetchCartPost = createAsyncThunk(
    'CartPost/fetchPost',
    async(dataItem: data, thunkAPI) => {
        try {
            const response = await backend.post('order', {
                    owner: {
                        phone: dataItem.owner.phone,
                        address: dataItem.owner.address
                    },
                    items: dataItem.items
            })

            return response.status
        } catch (error) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузке')
        }
    }
)