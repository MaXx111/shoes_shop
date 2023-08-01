import axios from "axios"

export const backend = axios.create({
    baseURL: 'https://shoes-shop-5esb.onrender.com/api/'
})