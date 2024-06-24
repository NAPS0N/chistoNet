import type { ProductImg } from "../ProductImg/ProductImg";

export type ProductType = {
    id: number,
    title: string,
    price: number,
    description: string,
    userId: number,
    categoryId: number | null,
    geo: string,
    ProductImgs: ProductImg[],
}

