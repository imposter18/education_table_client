import React, { useContext, useEffect, useRef, useState } from "react";
import type { InputRef } from "antd";
import { Button, Form, Input, Popconfirm, Table } from "antd";
import type { FormInstance } from "antd/es/form";
import { EditableCellProps } from "@/types/education";
import { EditableContext } from "../educationTableRow/educationTableRow";

export const EditableCell: React.FC<EditableCellProps> = ({
	title,
	editable,
	children,
	dataIndex,
	record,
	handleSave,
	...restProps
}) => {
	const [editing, setEditing] = useState(false);
	const inputRef = useRef<InputRef>(null);
	const form = useContext(EditableContext)!;

	useEffect(() => {
		if (editing) {
			inputRef.current!.focus();
		}
	}, [editing]);

	const toggleEdit = () => {
		setEditing(!editing);
		form.setFieldsValue({ [dataIndex]: record[dataIndex] });
	};

	const save = async () => {
		try {
			const values = await form.validateFields();

			toggleEdit();
			handleSave({ ...record, ...values });
		} catch (errInfo) {
			console.log("Save failed:", errInfo);
		}
	};

	let childNode = children;

	if (editable) {
		childNode = editing ? (
			<Form.Item style={{ margin: 0 }} name={dataIndex}>
				<Input ref={inputRef} onPressEnter={save} onBlur={save} />
			</Form.Item>
		) : (
			<div
				className="editable-cell-value-wrap"
				style={{
					paddingRight: 24,
					minWidth: 1 + "rem",
					minHeight: 2 + "rem",
					display: "flex",
					alignItems: "center",
				}}
				onClick={toggleEdit}
			>
				{children}
			</div>
		);
	}

	return <td {...restProps}>{childNode}</td>;
};
