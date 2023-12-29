import { DialButton } from "./DialButton";
import { UssdRunningPopUp } from "../pop-ups/UssdRunningPopUp";
import useApiCall from "../custom-hooks/useApiCall";
import { MessagePopUp } from "../pop-ups/MessagePopUp";
import { useContext } from "react";
import { AppConfigContext } from "../../services/app-config-services/AppConfigContext";

export const Dial = () => {
	const { isLoading, makeCall, response } = useApiCall(
		"http://127.0.0.1:8000/ussd"
	);


	const { display, promptRequest } = useContext(AppConfigContext);


	return (
		<div className="grid grid-cols-3 gap-5 p-4 flex-1 md:flex-none">
			<DialButton number="1" />
			<DialButton number="2" />
			<DialButton number="3" />
			<DialButton number="4" />
			<DialButton number="5" />
			<DialButton number="6" />
			<DialButton number="7" />
			<DialButton number="8" />
			<DialButton number="9" />
			<DialButton number="*" />
			<DialButton number="0" />
			<DialButton number="#" />
			<div></div>
			<button
				onClick={() => makeCall(display)}
				className="p-2 bg-green-700 hover:bg-green-800  transition-all rounded-lg text-xl font-bold">
				Call
			</button>

			{isLoading && <UssdRunningPopUp />}

			{(response && !isLoading)  && (
				<MessagePopUp
					send={() => makeCall(promptRequest, false)}
					message={response.message}
					continueSession={response.continueSession} />
			)}
		</div>
	);
};
