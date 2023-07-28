import { combineReducers } from "@reduxjs/toolkit";
import TopSalseReducer from '../features/topSales/model/slice'
import ProductInfoReducer from '../features/productInfo/model/slice'
import CatalogReducer from '../widgets/catalog/model/slice'
import CartReducer from '../features/cart/model/slice'

export const rootReducer = combineReducers({
    TopSalseReducer,
    ProductInfoReducer,
    CatalogReducer,
    CartReducer
})