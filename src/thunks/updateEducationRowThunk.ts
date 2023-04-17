import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/api/api";
import { IApiError, IEducationData } from "@/types/response";

interface Iprops {
	_id: string;
	value: string;
}

export const updateEducationRowThunk = createAsyncThunk<
	IEducationData[],
	Iprops,
	{ rejectValue: AxiosError<IApiError> }
>(
	"education/updateEducationRow",
	async function ({ _id, value }, { rejectWithValue }) {
		try {
			const res = await api.post("/updateRow", { _id, value });
			return res.data as IEducationData[];
		} catch (e) {
			return rejectWithValue(e);
		}
	}
);
