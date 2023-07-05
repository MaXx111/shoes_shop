import { combineReducers } from "@reduxjs/toolkit";
import TopSalseReducer from '../widgets/topSales/model/slice'
import ProductInfoReducer from '../widgets/productInfo/model/slice'
import CatalogReducer from '../widgets/catalog/model/slice'

export const rootReducer = combineReducers({
    TopSalseReducer,
    ProductInfoReducer,
    CatalogReducer
})