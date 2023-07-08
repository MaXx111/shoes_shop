import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { CartItem } from "../model/type"

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
            const response = await axios({
                method: "POST",
                url: 'http://localhost:7070/api/order',
                data: {
                    owner: {
                        phone: dataItem.owner.phone,
                        address: dataItem.owner.address
                    },
                    items: dataItem.items
                }
            })

            return response.status
        } catch (error) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузке')
        }
    }
)