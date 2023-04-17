import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/api/api";
import { IApiError, IWorkersData } from "@/types/response";

interface Iprops {
	_id: string;
}

export const deleteWorkerRowThunk = createAsyncThunk<
	IWorkersData[],
	Iprops,
	{ rejectValue: AxiosError<IApiError> }
>("workers/deleteWorkwr", async function ({ _id }, { rejectWithValue }) {
	try {
		const res = await api.post("/deleteWorker", { _id });
		return res.data as IWorkersData[];
	} catch (e) {
		return rejectWithValue(e);
	}
});
