import { createSlice } from "@reduxjs/toolkit";

export interface IinitialState {
	isModalVisible: boolean;
}

const initialState: IinitialState = {
	isModalVisible: false,
};

export const editEducationSlice = createSlice({
	name: "educationModal",
	initialState,
	reducers: {
		setVisible(state) {
			state.isModalVisible = true;
		},

		setNoVisible(state) {
			state.isModalVisible = false;
		},
	},
});

export const { setVisible, setNoVisible } = editEducationSlice.actions;

export const editEducationReducer = editEducationSlice.reducer;
