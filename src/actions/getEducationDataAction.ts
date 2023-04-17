import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IinitialState } from "@/reducers/educationReducer";
import { getEducationDataThunk } from "@/thunks/getEducationDataThunk";
export function getEducationDataAction(
	builder: ActionReducerMapBuilder<IinitialState>
) {
	builder.addCase(getEducationDataThunk.pending, (state) => {
		state.isLoading = true;
		state.error = null;
	});
	builder.addCase(getEducationDataThunk.fulfilled, (state, action) => {
		state.isLoading = false;
		state.error = null;
		state.rows = action.payload;
	});
	builder.addCase(getEducationDataThunk.rejected, (state, action) => {
		state.isLoading = false;
		if (action) {
			state.error = action.payload?.response.data;
		} else {
			state.error.message = "Unexpected error";
		}
	});
}
