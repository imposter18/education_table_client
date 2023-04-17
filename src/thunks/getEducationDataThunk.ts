import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/api/api";
import { IApiError, IEducationData } from "@/types/response";

export const getEducationDataThunk = createAsyncThunk<
	IEducationData[],
	null,
	{ rejectValue: AxiosError<IApiError> }
>("education/getEducationData", async function ({}, { rejectWithValue }) {
	try {
		const res = await api.get("/getEducation");
		return res.data as IEducationData[];
	} catch (e) {
		return rejectWithValue(e);
	}
});
