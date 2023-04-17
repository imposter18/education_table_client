import React, { useEffect, useState } from "react";
import { ModalWithChildren } from "../modal/modal";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { clearEdit } from "@/reducers/editWorkerReducer";
import { Button, Col, Form, Input, Row, Select } from "antd";
import { updateWorkerThunk } from "@/thunks/updateWorkerThunk";
import { EditOutlined, SearchOutlined } from "@ant-design/icons";
import { setVisible } from "@/reducers/editEducationReducer";
import { ModalEducation } from "../modalEducation/modalEducation";

const { Option } = Select;

export const ModalEditWorker = () => {
	const dispatch = useAppDispatch();
	const [activeSaveBtn, setActiveSaveBtn] = useState(false);
	const { data, isModalVisible, choice } = useAppSelector(
		(state) => state.editWorkerReducer
	);

	const { rows: educationData } = useAppSelector(
		(state) => state.educationReducer
	);
	const [form] = Form.useForm();

	const educationValue = Form.useWatch("education", form);

	useEffect(() => {
		if (educationValue !== "isNotPicked") {
			setActiveSaveBtn(true);
		}
	}, [educationValue]);
	useEffect(() => {
		console.log(educationValue, "educationValue1");
		if (!educationValue) {
			console.log(educationValue, "educationValue");
			setActiveSaveBtn(false);
		}
	}, []);
	useEffect(() => {
		if (isModalVisible) {
			form.setFieldsValue({ name: `${data.name}` });
		}
	}, []);

	const closeModal = () => {
		dispatch(clearEdit());
	};
	const onEducationChange = (value: any) => {
		console.log(value, "value");
		if (value === "isNotPicked") {
			setActiveSaveBtn(false);
		}
		if (value !== "isNotPicked") {
			setActiveSaveBtn(true);
		}
	};

	const saveHandle = () => {};

	const onFinish = (values: { name: string; education: string }) => {
		let { name, education } = values;
		if (!education) {
			education = data.education;
		}
		dispatch(updateWorkerThunk({ name, education, _id: data._id }));
		closeModal();
	};

	const onReset = () => {
		setActiveSaveBtn(false);
		form.setFieldsValue({ education: `isNotPicked` });
	};

	const openEditEducationModal = () => {
		dispatch(setVisible());
	};
	useEffect(() => {
		if (choice) {
			form.setFieldsValue({ education: choice });
		}
	}, [choice]);

	return (
		<ModalWithChildren isVisible={isModalVisible} setIsvisible={closeModal}>
			<Form
				{...layout}
				form={form}
				onFinish={onFinish}
				labelCol={{ offset: 1, span: 4 }}
				wrapperCol={{ offset: 1 }}
				// onChange={(e) => console.log(e)}
				initialValues={{
					["education"]: data.education ? data.education : "isNotPicked",
				}}
			>
				<Row>
					<Col span={20}>
						<Form.Item name="name" label="ФИО" rules={[{ required: true }]}>
							<Input />
						</Form.Item>
					</Col>
				</Row>

				<Row>
					<Col span={20}>
						<Form.Item name="education" label="Образование">
							<Select
								placeholder="Выберете уровень образования"
								allowClear={false}
								onChange={onEducationChange}
								// defaultValue={data.education ? data.education : "isNotPicked"}
								autoClearSearchValue={false}
							>
								<Option value="isNotPicked">Не выбранно</Option>
								{educationData.map((edutationItem) => {
									if (edutationItem.value) {
										return (
											<Option
												key={edutationItem._id}
												label={edutationItem._id}
												value={edutationItem._id}
											>
												{edutationItem.value}
											</Option>
										);
									}
								})}
							</Select>
						</Form.Item>
					</Col>
					<Col offset={1} span={2}>
						<Button
							onClick={() => openEditEducationModal()}
							type="dashed"
							shape="circle"
							icon={<EditOutlined />}
						/>
					</Col>
				</Row>
				<Form.Item>
					<Row>
						<Col span={5}>
							<Button
								disabled={!activeSaveBtn}
								// onClick={saveHandle}
								type="primary"
								htmlType="submit"
							>
								Сохранить
							</Button>
						</Col>
						<Col span={5}>
							<Button
								disabled={!activeSaveBtn}
								htmlType="button"
								onClick={onReset}
							>
								Сбросить
							</Button>
						</Col>
					</Row>
				</Form.Item>
			</Form>
			<ModalEducation></ModalEducation>
		</ModalWithChildren>
	);
};
const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};
