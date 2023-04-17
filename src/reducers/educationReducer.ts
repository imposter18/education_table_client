import { addEducationRowAction } from "@/actions/addEducationRowAction";
import { deleteEducationRowAction } from "@/actions/deleteEducationRowAction";
import { getEducationDataAction } from "@/actions/getEducationDataAction";
import { updateEducationRowAction } from "@/actions/updateEducationRowAction";
import { getEducationDataThunk } from "@/thunks/getEducationDataThunk";
import { IApiError, IEducationData } from "@/types/response";
import { createSlice } from "@reduxjs/toolkit";

export interface IinitialState {
	rows: IEducationData[];
	isLoading: boolean;
	error: IApiError;
}

const initialState: IinitialState = {
	rows: [] as IEducationData[],
	isLoading: false,
	error: null,
};

export const educationSlice = createSlice({
	name: "education",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getEducationDataAction(builder);
		addEducationRowAction(builder);
		updateEducationRowAction(builder);
		deleteEducationRowAction(builder);
	},
});

export const {} = educationSlice.actions;

export const educationReducer = educationSlice.reducer;
