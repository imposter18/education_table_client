import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/api/api";
import { IApiError, IWorkersData } from "@/types/response";

export const getWorkersDataThunk = createAsyncThunk<
	IWorkersData[],
	null,
	{ rejectValue: AxiosError<IApiError> }
>("workers/getWorkersData", async function ({}, { rejectWithValue }) {
	try {
		const res = await api.get("/getWorkes");
		return res.data as IWorkersData[];
	} catch (e) {
		return rejectWithValue(e);
	}
});
