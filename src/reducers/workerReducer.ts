import { addworkerRowAction } from "@/actions/addworkerRowAction";
import { deleteWorkerRowAcrion } from "@/actions/deleteWorkerRowAcrion";
import { getWorkersDataAction } from "@/actions/getWorkersDataAction";
import { updateWorkerAction } from "@/actions/updateWorkerAction";
import { IApiError, IWorkersData } from "@/types/response";
import { createSlice } from "@reduxjs/toolkit";

export interface IinitialState {
	rows: IWorkersData[];
	isLoading: boolean;
	error: IApiError;
}

const initialState: IinitialState = {
	rows: [] as IWorkersData[],
	isLoading: false,
	error: null,
};

export const workerSlice = createSlice({
	name: "worker",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getWorkersDataAction(builder),
			addworkerRowAction(builder),
			deleteWorkerRowAcrion(builder);
		updateWorkerAction(builder);
	},
});

export const {} = workerSlice.actions;

export const workerReducer = workerSlice.reducer;
