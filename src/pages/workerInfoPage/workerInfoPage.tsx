import React, { useEffect } from "react";
import { WorkersTable } from "@/components/workersTable/workersTable";
import { useAppDispatch } from "@/hooks";
import { getWorkersDataThunk } from "@/thunks/getWorkersDataThunk";

export const WorkerInfoPage = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getWorkersDataThunk());
	}, []);
	return <WorkersTable></WorkersTable>;
};
