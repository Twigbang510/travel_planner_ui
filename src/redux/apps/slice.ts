import { createSlice } from "@reduxjs/toolkit";

interface RequestState {
  firstPage?: boolean;
  loading?: boolean;
  error?: string | null;
  errCode?: string | number | undefined;
  currentPlanId?: any;
  contexts?:
    | {
        [key: string]: any;
      }
    | undefined;
}

interface InitialState {
  [actionTypePrefix: string]: RequestState | any;
}

const initialState: InitialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  currentPlanId: null,
  success: false,
};

// Slice
const apps = createSlice({
  name: "apps",
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    },
    setCurrentPlanId: (state, { payload }) => {
      state.currentPlanId = payload;
    },
    logout: () => initialState,
  },
});

export default apps.reducer;
export const { setUserInfo, logout, setCurrentPlanId } = apps.actions;

export const selectCurrentToken = (state: any) => state.apps.userToken;
