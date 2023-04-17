import { configureStore } from "@reduxjs/toolkit";
import { educationReducer } from "@/reducers/educationReducer";
import { workerReducer } from "@/reducers/workerReducer";
import { editWorkerReducer } from "@/reducers/editWorkerReducer";
import { editEducationReducer } from "@/reducers/editEducationReducer";

export const setupStore = configureStore({
	reducer: {
		educationReducer,
		workerReducer,
		editWorkerReducer,
		editEducationReducer,
	},
});

export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;
