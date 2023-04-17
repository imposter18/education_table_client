import React from "react";
import "./index.scss";
import { EducationLevelPage } from "./pages/educationLevelPage/educationLevelPage";
import { Button } from "antd";
import { Route, Routes } from "react-router-dom";
import { LayoutApp } from "./components/layout/layout";
import { WorkerInfoPage } from "./pages/workerInfoPage/workerInfoPage";

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<LayoutApp />}>
				<Route path="education" index element={<EducationLevelPage />}></Route>
				<Route path="workers" element={<WorkerInfoPage />}></Route>
			</Route>
		</Routes>
	);
};
