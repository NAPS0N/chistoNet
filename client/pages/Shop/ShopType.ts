export type ShopType = {
    userId: number | null;
    labelName: string;
    logo: string;
    address: string;
    photo: string;
    description: string;
    lax:string | null;
    lon: string | null;
    phoneNumber: string ;
}
export type ShopTypeUpdate = {
    userId: null,
    labelName: string,
    logo: string,
    address: string,
    photo: File | null,
    description: string,
    lax: string,
    lon: string,
    phoneNumber: string,
}