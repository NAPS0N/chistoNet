import { AxiosResponse } from "axios";
import axiosInstance from "../../src/axiosInstance";
import { ShopType } from "./ShopType";


export const fetchShopLoad = async () => {
  
    const res: AxiosResponse<{ shop: ShopType }> =
      await axiosInstance.get('/profile/shop');
    console.log(111111, 'SHOP LOG', res.data);
  
    return res.data;
  };