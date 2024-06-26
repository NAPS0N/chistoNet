import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchLogIn,
  fetchLogOut,
  fetchRegister,
  fetchUsers,
  // fetchToken,
} from '../../../components/Auth/api.auth';
import type { UserType, UserLogInForm } from '../../../components/Auth/UserType';

export type InitialStateType = {
  user: UserType | null;
  users: UserType[];
  accessToken: string | null;
  error?: string;
};

const initialState: InitialStateType = {
  user: null,
  users: [],
  accessToken: null,
  error: '',
};

const loadUsers = createAsyncThunk('users/load', async () => fetchUsers());

const logInThunk = createAsyncThunk('login', async (userLoginData: UserLogInForm) =>
  fetchLogIn(userLoginData),
);
const logOutThunk = createAsyncThunk('logout', async () => fetchLogOut());
// const tokenLoadThunk = createAsyncThunk('token', async () => fetchToken());
const registrationThunk = createAsyncThunk(
  'registration',
  async (userRegData: UserType, { dispatch }) => {
    const resReg = await fetchRegister(userRegData); // Регистрация
    const loginData: UserLogInForm = {
      email: userRegData.email,
      password: userRegData.password,
      phoneNumber: userRegData.phoneNumber,
    };

    const loginResponse = await dispatch(logInThunk(loginData)); // Авторизация после регистрации
    return {
      user: resReg.user,
      login: loginResponse.payload,
    };
  },
);

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
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(loadUsers.rejected, (state, action) => {
        state.user = null;
        state.error = action.error.message;
      })
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
        state.users = [...state.users, action.payload.user];
      });
  },
});

// // Action creators are generated for each case reducer function
export { logInThunk, logOutThunk, registrationThunk, loadUsers };
export const { setAccessToken, clearAccessToken, clearError, setUser } = authSlice.actions;

export default authSlice.reducer;
