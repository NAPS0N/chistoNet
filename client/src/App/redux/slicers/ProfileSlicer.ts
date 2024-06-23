import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type {UserType} from '../../../components/Auth/UserType';
import type {ProfileIndividualType} from '../../../../pages/Profile/profielIndividualType';


export type InitialStateType = {
    user: UserType | null;
    individual: ProfileIndividualType;
}

const initialState: InitialStateType = {
    user: null,
    individual: {
        userId: null,
        photo: '',
        date: new Date(),
    },
}

const individualProfileThunk = createAsyncThunk('individualprofile', async () => 
fetchLoadIndividual());

export const individualProfileSlice = createSlice({
    name: 'individualProfile',
    initialState,
    reducers: {
        // что-то должно быть;
    }
    extraReducers: (builder) => {
        builder
        .addCase (individualThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        });
    },
});

export {individualThunk};
export default individualProfileSlice.reducer;


