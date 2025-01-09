import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

type HelperType = {
  isSubs?: boolean;
  deviceId?: string;
  isOneTimeTried?: boolean;
  isTryToOpenPdf?: boolean;
  specialOfferShown?: boolean;
  invoices?: any[];
};

const initialState: HelperType = {
  isSubs: undefined,
  deviceId: '',
  isOneTimeTried: false,
  isTryToOpenPdf: false,
  specialOfferShown: false,
  invoices: [],
};

const helperSlice = createSlice({
  name: 'helper',
  initialState,
  reducers: {
    setIsSubs: (state, {payload: {isSubs}}: PayloadAction<HelperType>) => {
      state.isSubs = isSubs;
    },
    setDeviceId: (state, {payload: {deviceId}}: PayloadAction<HelperType>) => {
      state.deviceId = deviceId;
    },
    setIsOneTimeTried: (
      state,
      {payload: {isOneTimeTried}}: PayloadAction<HelperType>,
    ) => {
      state.isOneTimeTried = isOneTimeTried;
    },
    setIsTryToOpenPdf: (
      state,
      {payload: {isTryToOpenPdf}}: PayloadAction<HelperType>,
    ) => {
      state.isTryToOpenPdf = isTryToOpenPdf;
    },
    setSpecialOfferShown: (
      state,
      {payload: {specialOfferShown}}: PayloadAction<HelperType>,
    ) => {
      state.specialOfferShown = specialOfferShown;
    },
    setInvoices: (state, {payload: {invoices}}: PayloadAction<HelperType>) => {
      state.invoices = invoices;
    },
  },
});

export const {
  setIsSubs,
  setDeviceId,
  setIsOneTimeTried,
  setIsTryToOpenPdf,
  setSpecialOfferShown,
  setInvoices,
} = helperSlice.actions;

export const selectSubsInfo = (state: {helper: HelperType}) =>
  state.helper.isSubs;

export const selectDeviceId = (state: {helper: HelperType}) =>
  state.helper.deviceId;

export const selectIsOneTimeTried = (state: {helper: HelperType}) =>
  state.helper.isOneTimeTried;

export const selectIsTryToOpenPdf = (state: {helper: HelperType}) =>
  state.helper.isTryToOpenPdf;

export const selectSpecialOfferShown = (state: {helper: HelperType}) =>
  state.helper.specialOfferShown;

export const selectInvoices = (state: {helper: HelperType}) =>
  state.helper.invoices;

export default helperSlice.reducer;
