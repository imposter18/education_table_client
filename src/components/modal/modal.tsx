import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { clearEdit } from "@/reducers/editWorkerReducer";

interface Iprops {
	children: JSX.Element | JSX.Element[];
	isVisible: boolean;
	setIsvisible: () => void;
}

export const ModalWithChildren: React.FC<Iprops> = ({
	children,
	isVisible,
	setIsvisible,
}) => {
	// const [isModalOpen, setIsModalOpen] = useState(false);
	const dispatch = useAppDispatch();

	const showModal = () => {};

	const handleOk = () => {
		setIsvisible();
	};

	const handleCancel = () => {
		setIsvisible();
	};

	return (
		<>
			<Modal
				title="Редактироване"
				open={isVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
				width={700}
				// style={{ width: 800 + "px" }}
			>
				{children}
			</Modal>
		</>
	);
};
