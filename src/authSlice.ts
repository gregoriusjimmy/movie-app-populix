import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IAuthState {
  accountId: string | null;
  accessToken: string | null;
}

const initialState: IAuthState = {
  accountId: null,
  accessToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<IAuthState>) => {
      return { ...state, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;
