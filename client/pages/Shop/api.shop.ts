import { AxiosResponse } from "axios";
import axiosInstance from "../../src/axiosInstance";


export const fetchLoadIndividual = async () => {
    const res: AxiosResponse<{ individual: ProfileIndividualType; user: UserType }> =
      await axiosInstance.get('/profile');
    console.log(222222222, res.data);
  
    return res.data;
  };