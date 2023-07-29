import { productForCartId, productID, productSize } from "../../../shared/model/brandtypes";

export interface CartItem {
    title: string,
    size: productSize,
    count: number,
    price: number,
    productId: productForCartId,
    id: productID
}