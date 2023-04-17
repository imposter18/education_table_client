import React, { useEffect, useState } from "react";
import { Row, message } from "antd";
import { Button, Popconfirm, Table } from "antd";
import { ColumnTypes, DataType } from "@/types/education";
import { EditableRow } from "@/components/educationTableRow/educationTableRow";
import { EditableCell } from "@/components/educationTableCell/educationTableCell";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { addEducationRowThunk } from "@/thunks/addEducationRowThunk";
import { updateEducationRowThunk } from "@/thunks/updateEducationRowThunk";
import { IApiError, IEducationData } from "@/types/response";
import { deleteEducationRowThunk } from "@/thunks/deleteEducationRowThunk";
import { setChoice } from "@/reducers/editWorkerReducer";
import { setNoVisible } from "@/reducers/editEducationReducer";

export const EducationLevelTable = ({ withchoice = false }) => {
	const [messageApi, contextHolder] = message.useMessage();

	const dispatch = useAppDispatch();

	const [choiceLocal, setChoiceLocal] = useState(null);
	const [apiError, setApiError] = useState(false);

	const { rows, error } = useAppSelector((state) => state.educationReducer);

	const cloneRows = (rows: IEducationData[]) => {
		return rows.map((row, index) => {
			return { ...row, index: index + 1 };
		});
	};

	const errorMessage = (err: IApiError) => {
		messageApi.open({
			type: "error",
			content: err.message,
		});
	};

	useEffect(() => {
		if (error && apiError) {
			errorMessage(error);
		}
	}, [error, apiError]);

	const handleDelete = (_id: string) => {
		dispatch(deleteEducationRowThunk({ _id })).then((res) => {
			if (res.meta.requestStatus === "rejected") {
				setApiError(true);
			}
			if (res.meta.requestStatus === "fulfilled") {
				setApiError(false);
			}
		});
	};

	const handleAdd = () => {
		dispatch(addEducationRowThunk());
	};

	const handleSave = (row: IEducationData) => {
		const { _id, value } = row;
		dispatch(updateEducationRowThunk({ _id, value }));
	};
	const defaultColumns: (ColumnTypes[number] & {
		editable?: boolean;
		dataIndex: string;
	})[] = [
		{
			title: "Строка",
			dataIndex: "index",
		},
		{
			title: "Образование",
			dataIndex: "value",
			width: "70%",
			editable: true,
		},
		{
			title: "Действия",
			dataIndex: "operation",
			render: (_, record: { _id: string }) =>
				rows.length >= 1 ? (
					<Popconfirm
						title="Sure to delete?"
						onConfirm={() => handleDelete(record._id)}
					>
						<a>Удалить</a>
					</Popconfirm>
				) : null,
		},
	];

	const components = {
		body: {
			row: EditableRow,
			cell: EditableCell,
		},
	};

	const columns = defaultColumns.map((col, index) => {
		if (!col.editable) {
			return col;
		}
		return {
			...col,
			onCell: (record: IEducationData) => ({
				record,
				editable: col.editable,
				dataIndex: col.dataIndex,
				title: col.title,
				handleSave,
			}),
		};
	});
	const rowSelection = {
		onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
			setChoiceLocal(selectedRowKeys[0]);
		},
	};

	const onChoisehandle = () => {
		dispatch(setChoice(choiceLocal));
		dispatch(setNoVisible());
	};
	return (
		<div>
			<Table
				//@ts-ignore
				rowKey={(record) => String(record._id)}
				components={components}
				rowClassName={() => "editable-row"}
				bordered
				dataSource={cloneRows(rows)}
				columns={columns as ColumnTypes}
				pagination={false}
				rowSelection={
					withchoice
						? {
								type: "radio",
								...rowSelection,
						  }
						: null
				}
			/>
			<Row justify={withchoice ? "space-between" : "end"}>
				{withchoice && (
					<Button
						onClick={onChoisehandle}
						type="primary"
						style={{ marginBottom: 16, marginTop: 30 }}
						disabled={choiceLocal ? false : true}
					>
						Выбрать
					</Button>
				)}
				<Button
					onClick={handleAdd}
					type="primary"
					style={{ marginBottom: 16, marginTop: 30 }}
				>
					Добавить строку
				</Button>
			</Row>
			{contextHolder}
		</div>
	);
};
