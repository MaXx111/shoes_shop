import { productID } from "../../../shared/model/brandtypes";

export interface ProductItem {
    id: productID,
    images: string[],
    price: number,
    title: string
}

