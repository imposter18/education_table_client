import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/api/api";
import { IApiError, IEducationData } from "@/types/response";

export const addEducationRowThunk = createAsyncThunk<
	IEducationData[],
	null,
	{ rejectValue: AxiosError<IApiError> }
>("education/addEducationRow", async function ({}, { rejectWithValue }) {
	try {
		const res = await api.post("/addEducationRow");
		return res.data as IEducationData[];
	} catch (e) {
		return rejectWithValue(e);
	}
});
