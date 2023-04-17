import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/api/api";
import { IApiError, IEducationData } from "@/types/response";

interface Iprops {
	_id: string;
}

export const deleteEducationRowThunk = createAsyncThunk<
	IEducationData[],
	Iprops,
	{ rejectValue: AxiosError<IApiError> }
>(
	"education/deleteEducationRow",
	async function ({ _id }, { rejectWithValue }) {
		try {
			const res = await api.post("/deleteEducationRow", { _id });
			return res.data as IEducationData[];
		} catch (e) {
			return rejectWithValue(e);
		}
	}
);
