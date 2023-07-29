import { productID, productSize } from "../../../shared/model/brandtypes"

export interface ProductItem {
    sku: string,
    manufacturer: string,
    color: string,
    material: string,
    season: string,
    reason: string,
    sizes: {
        size: productSize,
        available: boolean
    }[],
    images: string[],
    title: string,
    price: number,
    id: productID
}
