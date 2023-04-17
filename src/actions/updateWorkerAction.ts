import { IinitialState } from "@/reducers/workerReducer";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { updateWorkerThunk } from "@/thunks/updateWorkerThunk";

export function updateWorkerAction(
	builder: ActionReducerMapBuilder<IinitialState>
) {
	builder.addCase(updateWorkerThunk.pending, (state) => {
		state.isLoading = true;
		state.error = null;
	});
	builder.addCase(updateWorkerThunk.fulfilled, (state, action) => {
		state.isLoading = false;
		state.error = null;
		state.rows = action.payload;
	});
	builder.addCase(updateWorkerThunk.rejected, (state, action) => {
		state.isLoading = false;
		if (action) {
			state.error = action.payload?.response.data;
		} else {
			state.error.message = "Unexpected error";
		}
	});
}
