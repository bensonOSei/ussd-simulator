import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppConfigProvider } from "./services/app-config-services/AppConfigProvider.jsx";
import { UssdServiceProvider } from "./services/ussd-service/UssdServiceProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AppConfigProvider>
			<UssdServiceProvider>
				<App />
			</UssdServiceProvider>
		</AppConfigProvider>
	</React.StrictMode>
);
