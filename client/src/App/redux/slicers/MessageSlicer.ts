import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { MessageType } from '../../../../pages/Chat/MessageType';
import { addMessage, fetchMessage } from '../../../../pages/Chat/api.message';

export type InitialStateType = {
  chatMessages: MessageType[];
  isLoading: boolean;
};

const initialState: InitialStateType = {
  chatMessages: [],
  isLoading: true,
};

const loadMessages = createAsyncThunk('message/load', async () => fetchMessage());

const createMessage = createAsyncThunk('message/create', async (newMessage: MessageType) =>
  addMessage(newMessage),
);
// фудфилды написать!!!!
export const questionSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadMessages.fulfilled, (state, action) => {
        state.chatMessages = action.payload;
        state.isLoading = false;
      })
      .addCase(loadMessages.rejected, (state, action) => {
        state.chatMessages = [];
      })
      .addCase(loadMessages.pending, (state, action) => {
        state.chatMessages = [];
        state.isLoading = true;
      })
      .addCase(createMessage.fulfilled, (state, action) => {
        state.chatMessages = [...state.chatMessages, action.payload];
      });
  },
});

export { loadMessages };

export default questionSlice.reducer;
