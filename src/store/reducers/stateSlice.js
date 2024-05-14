import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  alertText: {
    text: '',
    backColor: '',
    state: false,
  },
};

const stateSlice = createSlice({
  name: 'stateSlice',
  initialState,
  reducers: {
    changeAlertText: (state, action) => {
      state.alertText = action.payload;
    },
  },
});

export const { changeAlertText } = stateSlice.actions;

export default stateSlice.reducer;
