import { IinitialState } from "@/reducers/workerReducer";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { addWorkerRowThunk } from "@/thunks/addWorkerRowThunk";

export function addworkerRowAction(
	builder: ActionReducerMapBuilder<IinitialState>
) {
	builder.addCase(addWorkerRowThunk.pending, (state) => {
		state.isLoading = true;
		state.error = null;
	});
	builder.addCase(addWorkerRowThunk.fulfilled, (state, action) => {
		state.isLoading = false;
		state.error = null;
		state.rows = action.payload;
	});
	builder.addCase(addWorkerRowThunk.rejected, (state, action) => {
		state.isLoading = false;
		if (action) {
			state.error = action.payload?.response.data;
		} else {
			state.error.message = "Unexpected error";
		}
	});
}
