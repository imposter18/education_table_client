import React, { useState } from "react";
import { Button, Row, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { addWorkerRowThunk } from "@/thunks/addWorkerRowThunk";
import { IWorkersData } from "@/types/response";
import { deleteWorkerRowThunk } from "@/thunks/deleteWorkerRowThunk";
import { setEdit } from "@/reducers/editWorkerReducer";
import { ModalEditWorker } from "../modalEditWorker/modalEditWorker";

export const WorkersTable = () => {
	const dispatch = useAppDispatch();
	const { rows } = useAppSelector((state) => state.workerReducer);
	const { isModalVisible } = useAppSelector((state) => state.editWorkerReducer);
	const handleDelete = (data: IWorkersData) => {
		const { _id } = data;
		dispatch(deleteWorkerRowThunk({ _id }));
	};
	const openEditModal = (data: IWorkersData) => {
		dispatch(setEdit(data));
	};
	const columns: ColumnsType<IWorkersData> = [
		{
			title: "ФИО",
			dataIndex: "name",

			width: "30%",
		},
		{
			title: "Образование",
			dataIndex: "value",
			width: "50%",
		},

		{
			title: "Действия",
			key: "action",
			render: (_, record) => (
				<Space size="middle">
					<a onClick={() => openEditModal(record)}>Редактировать</a>
					<a onClick={() => handleDelete(record)}>Удалить</a>
				</Space>
			),
		},
	];
	const handleAddRow = () => {
		dispatch(addWorkerRowThunk());
	};
	return (
		<>
			<Table
				rowKey={(record) => String(record._id)}
				pagination={false}
				columns={columns}
				dataSource={rows}
			/>
			<Row justify={"end"}>
				<Button
					onClick={handleAddRow}
					type="primary"
					style={{ marginBottom: 16, marginTop: 30 }}
				>
					Добавить строку
				</Button>
			</Row>
			{isModalVisible && <ModalEditWorker></ModalEditWorker>}
		</>
	);
};
