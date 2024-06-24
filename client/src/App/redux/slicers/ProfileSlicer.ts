import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { UserType } from '../../../components/Auth/UserType';
import type { ProfileIndividualType } from '../../../../pages/Profile/Individual/profielIndividualType';
import { fetchLoadIndividual } from '../../../../pages/Profile/Individual/api.profile';

export type InitialStateType = {
  user: UserType | null;
  individual: ProfileIndividualType;
};

const initialState: InitialStateType = {
  user: null,
  individual: {
    userId: null,
    photo: '',
    date: '',
  },
};

const loadProfileUser = createAsyncThunk('individualprofile', async () => fetchLoadIndividual());

export const individualProfileSlice = createSlice({
  name: 'individualProfile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProfileUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(loadProfileUser.rejected, (state, action) => {
        state.user = null;
      })
      .addCase(loadProfileUser.pending, (state, action) => {
        state.user = null;
      });
  },
});

export { loadProfileUser };
export default individualProfileSlice.reducer;
