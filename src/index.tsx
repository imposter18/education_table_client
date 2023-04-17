import React from "react";
import { App } from "./app";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { setupStore } from "@/store/index";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<HashRouter>
			<Provider store={setupStore}>
				<App />
			</Provider>
		</HashRouter>
	</React.StrictMode>
);
