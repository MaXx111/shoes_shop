import axios from "axios"

export const backend = axios.create({
    baseURL: 'http://localhost:7070/api/'
})