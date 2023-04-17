import React, { useContext, useEffect, useRef, useState } from "react";
import type { InputRef } from "antd";
import { Button, Form, Input, Popconfirm, Table } from "antd";
import type { FormInstance } from "antd/es/form";

export const EditableContext = React.createContext<FormInstance<any> | null>(
	null
);

interface EditableRowProps {
	index: number;
}

export const EditableRow: React.FC<EditableRowProps> = ({
	index,
	...props
}) => {
	const [form] = Form.useForm();
	return (
		<Form form={form} component={false}>
			<EditableContext.Provider value={form}>
				<tr {...props} />
			</EditableContext.Provider>
		</Form>
	);
};
