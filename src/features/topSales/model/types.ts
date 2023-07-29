import { categoryID, productID } from "../../../shared/model/brandtypes";

export interface topSalesItem {
    category: categoryID,
    id: productID,
    images: string[],
    price: number,
    title: string
}