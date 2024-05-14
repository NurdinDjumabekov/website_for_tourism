import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {},
};

const saveDataSlice = createSlice({
  name: 'saveDataSlice',
  initialState,
  reducers: {
    changeUserInfo: (state, action) => {
      state.basketUser = action.payload;
    },
  },
});

export const { changeUserInfo } = saveDataSlice.actions;

export default saveDataSlice.reducer;
