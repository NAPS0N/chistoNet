import { AxiosResponse } from "axios";
import axiosInstance from "../../src/axiosInstance";
import { ShopType, ShopTypeUpdate } from "./ShopType";


export const fetchShopLoad = async () => {
  
    const res: AxiosResponse<{ shop: ShopType }> =
      await axiosInstance.get('/profile/shop');
      
    return res.data;
  };

  export const fetchUpdateShop = async ({updateForm}: {updateForm: ShopTypeUpdate}) => {
    const res: AxiosResponse<{shop:ShopType}> =
    await axiosInstance.put('/profile/shop/user', updateForm)
    return res.data;
  }