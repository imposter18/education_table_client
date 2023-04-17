import React from "react";
import { ModalWithChildren } from "../modal/modal";
import { EducationLevelTable } from "../educationLevelTable/educationLevelTable";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setNoVisible } from "@/reducers/editEducationReducer";

export const ModalEducation = () => {
	const dispatch = useAppDispatch();
	const { isModalVisible } = useAppSelector(
		(state) => state.editEducationReducer
	);
	const closeModalHandle = () => {
		dispatch(setNoVisible());
	};

	return (
		<ModalWithChildren
			isVisible={isModalVisible}
			setIsvisible={closeModalHandle}
		>
			<EducationLevelTable withchoice={true}></EducationLevelTable>
		</ModalWithChildren>
	);
};
