import { addworkerRowAction } from "@/actions/addworkerRowAction";
import { deleteWorkerRowAcrion } from "@/actions/deleteWorkerRowAcrion";
import { getWorkersDataAction } from "@/actions/getWorkersDataAction";
import { IWorkersData } from "@/types/response";
import { createSlice } from "@reduxjs/toolkit";

export interface IinitialState {
	data: IWorkersData;
	isModalVisible: boolean;
	choice: string;
}

const initialState: IinitialState = {
	data: null,
	isModalVisible: false,
	choice: null,
};

export const editWorkerSlice = createSlice({
	name: "editWorker",
	initialState,
	reducers: {
		setChoice(state, action) {
			state.choice = action.payload;
		},
		setEdit(state, acton) {
			state.data = acton.payload;
			state.isModalVisible = true;
		},
		clearEdit(state) {
			state.choice = null;
			state.data = null;
			state.isModalVisible = false;
		},
	},
	extraReducers: (builder) => {},
});

export const { setEdit, clearEdit, setChoice } = editWorkerSlice.actions;

export const editWorkerReducer = editWorkerSlice.reducer;
