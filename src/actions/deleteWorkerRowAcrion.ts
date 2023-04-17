import { IinitialState } from "@/reducers/workerReducer";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { deleteWorkerRowThunk } from "@/thunks/deleteWorkerRowThunk";

export function deleteWorkerRowAcrion(
	builder: ActionReducerMapBuilder<IinitialState>
) {
	builder.addCase(deleteWorkerRowThunk.pending, (state) => {
		state.isLoading = true;
		state.error = null;
	});
	builder.addCase(deleteWorkerRowThunk.fulfilled, (state, action) => {
		state.isLoading = false;
		state.error = null;
		state.rows = action.payload;
	});
	builder.addCase(deleteWorkerRowThunk.rejected, (state, action) => {
		state.isLoading = false;
		if (action) {
			state.error = action.payload?.response.data;
		} else {
			state.error.message = "Unexpected error";
		}
	});
}
