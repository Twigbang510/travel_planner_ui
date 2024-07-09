import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TripApiData } from "types/models/trip";

interface RequestState {
  firstPage?: boolean;
  loading?: boolean;
  error?: string | null;
  errCode?: string | number | undefined;
  contexts?:
    | {
        [key: string]: any;
      }
    | undefined;
}

interface InitialState {
  messages: {
    error?: string | string[];
    success?: string;
  };
  menu: {
    height: number;
    isShowDrawer?: boolean;
  };
  initLoading: boolean;
  isShowLoadingScreen: boolean;
  [actionTypePrefix: string]: RequestState | any;
  isShowAuthModal: boolean;
  newTripData: TripApiData;
}

const initialState: InitialState = {
  messages: {
    error: undefined,
    success: undefined,
  },
  menu: {
    height: 0,
    isShowDrawer: false,
  },
  initLoading: true,
  isShowLoadingScreen: false,
  isShowAuthModal: false,
  newTripData: null,
};

// Slice
const ui = createSlice({
  name: "uis",
  initialState,
  reducers: {
    notify(
      state,
      {
        payload,
      }: PayloadAction<{ type?: "error" | "success"; message: string }>
    ) {
      const { type = "success", message } = payload;
      state.messages[type] = message;
    },
    setMenuHeight(state, { payload }: PayloadAction<{ height: number }>) {
      const { height } = payload;
      state.menu.height = height;
    },
    showDrawer(state, { payload }: PayloadAction<boolean>) {
      state.menu.isShowDrawer = payload;
    },
    setInitLoading(state, { payload }: PayloadAction<boolean>) {
      state.initLoading = payload;
    },
    setShowLoadingScreen(state, { payload }: PayloadAction<boolean>) {
      state.isShowLoadingScreen = payload;
    },
    setShowAuthModal(state, { payload }: PayloadAction<boolean>) {
      state.isShowAuthModal = payload;
    },
    setTripData(state, { payload }: PayloadAction<TripApiData>) {
      state.newTripData = payload;
    },
  },
});

export const {
  notify,
  setMenuHeight,
  showDrawer,
  setShowLoadingScreen,
  setInitLoading,
  setShowAuthModal,
  setTripData,
} = ui.actions;

export default ui.reducer;
