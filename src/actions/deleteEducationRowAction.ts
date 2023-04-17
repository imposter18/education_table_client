import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IinitialState } from "@/reducers/educationReducer";
import { deleteEducationRowThunk } from "@/thunks/deleteEducationRowThunk";

export function deleteEducationRowAction(
	builder: ActionReducerMapBuilder<IinitialState>
) {
	builder.addCase(deleteEducationRowThunk.pending, (state) => {
		state.isLoading = true;
		state.error = null;
	});
	builder.addCase(deleteEducationRowThunk.fulfilled, (state, action) => {
		state.isLoading = false;
		state.error = null;
		state.rows = action.payload;
	});
	builder.addCase(deleteEducationRowThunk.rejected, (state, action) => {
		state.isLoading = false;
		if (action) {
			state.error = action.payload?.response.data;
		} else {
			state.error.message = "Unexpected error";
		}
	});
}
