export interface CatalogItem {
    sku: string,
    manufacturer: string,
    color: string,
    material: string,
    season: string,
    reason: string,
    sizes: {
        size: string,
        available: boolean
    }[],
    images: string[],
    title: string,
    price: number,
    id: number
}
