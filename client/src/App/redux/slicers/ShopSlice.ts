import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ShopType } from '../../../../pages/Shop/ShopType';
import { fetchShopLoad } from '../../../../pages/Shop/api.shop';

export type InitialStateType = {
  shop: ShopType;
};

const initialState: InitialStateType = {
  shop: {
    userId: null,
    labelName: '',
    logo: '',
    address: '',
    photo: '',
    description: '',
    lax: '',
    lon: '',
    phoneNumber: '',
  },
};

const loadShop = createAsyncThunk('shop/load', async () => fetchShopLoad());
// const updateImg = createAsyncThunk('shop/updateImg', async (data)=>fetchShopUpdateImg(data))
const updateFormShop = createAsyncThunk('shop/updateForm', async (updateForm:)=>fetchUpdateShop(updateForm))

export const shopSlicer = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadShop.fulfilled, (state, action) => {
        state.shop = action.payload.shop;
      })
      .addCase(loadShop.rejected, (state, action) => {
        state.shop = {
          userId: null,
          labelName: '',
          logo: '',
          address: '',
          photo: '',
          description: '',
          lax: '',
          lon: '',
          phoneNumber: '',
        };
      })
      .addCase(loadShop.pending, (state, action) => {
        state.shop = {
          userId: null,
          labelName: '',
          logo: '',
          address: '',
          photo: '',
          description: '',
          lax: '',
          lon: '',
          phoneNumber: '',
        };
      });
  },
});

// userId: 2,
// labelName: 'Мир Клининга',
// logo: 'https://mir-clininga.ru/bitrix/images/logo2.png',
// address: 'г. Краснодар, ул. Зиповская 5, с. 8',
// photo: 'https://mir-clininga.ru/upload/iblock/7eb/w6sdu6qr75smxsvkl98gpunn2uumka7a.jpg',
// description: 'успешно работая на рынке с 2010 года, мы специализируемся на реализации профессионального оборудования, расходных материалов, специнвентаря и моющих средств. клининг – одно из самых перспективных направлений, но одновременно весьма специфичный вид сервиса. одно дело - протереть полы в собственной квартире. и совсем иное – ликвидировать последствия масштабного события (вечеринки, банкета, другого мероприятия), навести идеальный порядок, чистоту в торгово-развлекательном, фитнес-центре, в отеле, в зале аэропорта, на огромных площадях административного учреждения, где имеет место высокая проходимость.  в то же время чистота кухонного и торгового оборудования, поверхностей - один из ключевых факторов, оказывающих влияние на формирование благоприятного имиджа любой компании, предприятия. именно поэтому вопрос поддержания чистоты заслуживает особого внимания.',
// lax: '45.065813',
// lon: '38.991923',
// phoneNumber: '89530873330',
// createdAt: new Date(),
// updatedAt: new Date(),

export { loadShop };

export default shopSlicer.reducer;
