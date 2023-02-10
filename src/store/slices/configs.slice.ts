import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import update from "immutability-helper";

export type ConfigsState = Readonly<{
	showTopNavbar: boolean;
	showBottomNavbar: boolean;
	isFullScreen: boolean;
}>;

const initialState: ConfigsState = {
	showBottomNavbar: true,
	showTopNavbar: true,
	isFullScreen: false,
};

export const ConfigsSlice = createSlice({
	name: "configs",
	initialState,
	reducers: {
		setConfig: (state, action: PayloadAction<Partial<ConfigsState>>) =>
			update(state, { $merge: action.payload }),
	},
});

export const { setConfig } = ConfigsSlice.actions;

export default ConfigsSlice.reducer;
