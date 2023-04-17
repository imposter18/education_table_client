import { IinitialState } from "@/reducers/workerReducer";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { getWorkersDataThunk } from "@/thunks/getWorkersDataThunk";

export function getWorkersDataAction(
	builder: ActionReducerMapBuilder<IinitialState>
) {
	builder.addCase(getWorkersDataThunk.pending, (state) => {
		state.isLoading = true;
		state.error = null;
	});
	builder.addCase(getWorkersDataThunk.fulfilled, (state, action) => {
		state.isLoading = false;
		state.error = null;
		state.rows = action.payload;
	});
	builder.addCase(getWorkersDataThunk.rejected, (state, action) => {
		state.isLoading = false;
		if (action) {
			state.error = action.payload?.response.data;
		} else {
			state.error.message = "Unexpected error";
		}
	});
}
