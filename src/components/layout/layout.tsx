import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

interface IMenuClickHandel {
	key: string;
}

const navItem = [
	{
		key: 0,
		lable: "Образование",
		href: "education",
	},
	{
		key: 1,
		lable: "Сотрудники",
		href: "workers",
	},
];

export const LayoutApp: React.FC = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate(`./${navItem[0].href}`);
	}, []);
	const handleNavigate = ({ key }: IMenuClickHandel) => {
		navigate(`./${navItem[+key].href}`);
	};

	return (
		<Layout style={{ minHeight: 100 + "vh" }}>
			<Header style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
				<div
					style={{
						float: "left",
						width: 120,
						height: 31,
						margin: "16px 24px 16px 0",
						background: "rgba(255, 255, 255, 0.2)",
					}}
				/>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={["0"]}
					items={navItem.map((menuItem, index) => ({
						key: String(index),
						label: `${menuItem.lable}`,
					}))}
					onClick={handleNavigate}
				/>
			</Header>
			<Content className="site-layout" style={{ padding: "50px" }}>
				<Outlet></Outlet>
			</Content>
			<Footer style={{ textAlign: "center" }}>
				Ant Design ©2023 Created by Ant UED
			</Footer>
		</Layout>
	);
};
