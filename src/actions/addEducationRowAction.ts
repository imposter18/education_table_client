import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IinitialState } from "@/reducers/educationReducer";
import { getEducationDataThunk } from "@/thunks/getEducationDataThunk";
import { addEducationRowThunk } from "@/thunks/addEducationRowThunk";
export function addEducationRowAction(
	builder: ActionReducerMapBuilder<IinitialState>
) {
	builder.addCase(addEducationRowThunk.pending, (state) => {
		state.isLoading = true;
		state.error = null;
	});
	builder.addCase(addEducationRowThunk.fulfilled, (state, action) => {
		state.isLoading = false;
		state.error = null;
		state.rows = action.payload;
	});
	builder.addCase(addEducationRowThunk.rejected, (state, action) => {
		state.isLoading = false;
		if (action) {
			state.error = action.payload?.response.data;
		} else {
			state.error.message = "Unexpected error";
		}
	});
}
