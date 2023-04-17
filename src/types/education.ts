import { Button, Form, Input, Popconfirm, Table } from "antd";

interface Item {
	key: string;
	name: string;
	age: string;
	address: string;
}

export interface EditableCellProps {
	title: React.ReactNode;
	editable: boolean;
	children: React.ReactNode;
	dataIndex: keyof Item;
	record: Item;
	handleSave: (record: Item) => void;
}

export type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;

type EditableTableProps = Parameters<typeof Table>[0];

export interface DataType {
	key: React.Key;
	name: string;
	age: string;
	address: string;
}
