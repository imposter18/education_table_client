import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IinitialState } from "@/reducers/educationReducer";
import { updateEducationRowThunk } from "@/thunks/updateEducationRowThunk";
export function updateEducationRowAction(
	builder: ActionReducerMapBuilder<IinitialState>
) {
	builder.addCase(updateEducationRowThunk.pending, (state) => {
		state.isLoading = true;
		state.error = null;
	});
	builder.addCase(updateEducationRowThunk.fulfilled, (state, action) => {
		state.isLoading = false;
		state.error = null;
		state.rows = action.payload;
	});
	builder.addCase(updateEducationRowThunk.rejected, (state, action) => {
		state.isLoading = false;
		if (action) {
			state.error = action.payload?.response.data;
		} else {
			state.error.message = "Unexpected error";
		}
	});
}
