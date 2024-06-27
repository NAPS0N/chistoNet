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

export type CreateProductType = {
    title: string,
    price: number | null,
    description: string,
    userId: number | null
    categoryId: number | null,
    geo: string,
    ProductImgs: ProductImg,
}
