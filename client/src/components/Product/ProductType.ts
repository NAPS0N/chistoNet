import type { ProductImgType } from "../ProductImg/ProductImgType";

export type ProductType = {
    id: number,
    title: string,
    price: number,
    description: string,
    userId: number,
    categoryId: number | null,
    geo: string,
    ProductImgs: ProductImgType[],
}

