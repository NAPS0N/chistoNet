import { AxiosResponse } from "axios";
import axiosInstance from "../../src/axiosInstance";
import { ShopType, ShopTypeUpdate } from "./ShopType";


export const fetchShopLoad = async () => {
  
    const res: AxiosResponse<{ shop: ShopType }> =
      await axiosInstance.get('/profile/shop');
      
    return res.data;
  };

  export const fetchUpdateShop = async ({updateForm}: {updateForm: ShopType}) => {
    const res: AxiosResponse<{shop:ShopType}> =
    await axiosInstance.put('/profile/shop/user', updateForm)
    return res.data;
  }

  export const fetchCreateShop = async ({createForm}: {createForm: ShopType }) => {
    const res: AxiosResponse<{shop:ShopType}> =
    await axiosInstance.put('/profile/shop/create', createForm)
    console.log(888888888, res.data);
    
    return res.data;
  }