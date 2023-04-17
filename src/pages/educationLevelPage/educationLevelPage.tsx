import { EducationLevelTable } from "@/components/educationLevelTable/educationLevelTable";
import { useAppDispatch } from "@/hooks";
import { getEducationDataThunk } from "@/thunks/getEducationDataThunk";
import React, { useEffect } from "react";

export const EducationLevelPage = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getEducationDataThunk());
	}, []);
	return <EducationLevelTable></EducationLevelTable>;
};
