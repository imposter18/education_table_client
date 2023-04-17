import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/api/api";
import { IApiError, IWorkersData } from "@/types/response";

interface Iprops {
	_id: string;
	name: string;
	education: string;
}

export const updateWorkerThunk = createAsyncThunk<
	IWorkersData[],
	Iprops,
	{ rejectValue: AxiosError<IApiError> }
>(
	"workers/updateWorker",
	async function ({ _id, name, education }, { rejectWithValue }) {
		try {
			const res = await api.post("/updateWorker", {
				_id,
				name,
				educationId: education,
			});
			return res.data as IWorkersData[];
		} catch (e) {
			return rejectWithValue(e);
		}
	}
);
