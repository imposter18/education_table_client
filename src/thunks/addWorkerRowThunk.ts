import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/api/api";
import { IApiError, IWorkersData } from "@/types/response";

export const addWorkerRowThunk = createAsyncThunk<
	IWorkersData[],
	null,
	{ rejectValue: AxiosError<IApiError> }
>("workers/addWorker", async function ({}, { rejectWithValue }) {
	try {
		const res = await api.post("/addWorker");
		return res.data as IWorkersData[];
	} catch (e) {
		return rejectWithValue(e);
	}
});
