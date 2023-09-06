import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../store/store';

interface AlertState {
  status: 'success' | 'error' | 'warning' | null;
  message: string;
}

const initialState: AlertState = {
  status: null,
  message: '',
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<AlertState>) => {
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
    clearAlert: state => {
      state.message = '';
      state.status = null;
    },
  },
});

export const {setAlert, clearAlert} = alertSlice.actions;

export const selectAlert = (state: RootState) => state.alert;

export default alertSlice.reducer;
