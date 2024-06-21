import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchLogIn,
  fetchLogOut,
  fetchRegister,
  // fetchToken,
} from '../../../components/Auth/api.auth';
import type { User, UserLogInForm } from '../../../components/Auth/UserType';

export type InitialStateType = {
  user: User | null;
  accessToken: string | null;
  error?: string;
};

const initialState: InitialStateType = {
  user: null,
  accessToken: null,
  error: '',
};

const logInThunk = createAsyncThunk('login', async (userLoginData: UserLogInForm) =>
  fetchLogIn(userLoginData),
);
const logOutThunk = createAsyncThunk('logout', async () => fetchLogOut());
// const tokenLoadThunk = createAsyncThunk('token', async () => fetchToken());
const registrationThunk = createAsyncThunk('reg', async (userRegData: User, { dispatch }) => {
  const resReg = await fetchRegister(userRegData); // Регистрация
  const loginData: UserLogInForm = {
    email: userRegData.email,
    password: userRegData.password,
  };
  const loginResponse = await dispatch(logInThunk(loginData)); // Авторизация после регистрации
  return {
    user: resReg.user,
    login: loginResponse.payload,
  };
});

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    clearAccessToken: (state) => {
      state.accessToken = null;
    },
    clearError: (state) => {
      state.error = '';
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logInThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(logInThunk.rejected, (state, action) => {
        state.user = null;
        state.error = action.error.message;
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(registrationThunk.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(registrationThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
      });
  },
});

// // Action creators are generated for each case reducer function
export { logInThunk, logOutThunk, registrationThunk };
export const { setAccessToken, clearAccessToken, clearError, setUser } = authSlice.actions;

export default authSlice.reducer;