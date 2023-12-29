import { useContext, useState } from "react";
import axios from "axios";
import { AppConfigContext } from "../../services/app-config-services/AppConfigContext";
// import { UssdServiceContext } from '../../services/ussd-service/UssdServiceContext';

const useApiCall = (url) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const session = {
		sessionID: "",
		msisdn: "0551234987",
		network: "mtn",
		newSession: true,
		userID: "05512",
		userData: "",
	};
	const { sessionId, setSessionId, clearDisplay } = useContext(AppConfigContext);

	const makeCall = async (userData, newSession = true) => {
        console.log(sessionId);
		if (sessionId !== "") {
			session.sessionID = sessionId;
		} else {
			session.sessionID = Date.now();
			setSessionId(session.sessionID);
		}

        console.log(userData);

		session.userData = userData;
		session.newSession = newSession;
        

		try {
			setIsLoading(true);
			setError(null);
			const response = await axios.post(url, session);
			setResponse(response.data);
			console.log(response.data);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setError(error);
		} finally {
			setIsLoading(false);
            clearDisplay()
		}
	};

	return { response, error, isLoading, makeCall };
};

export default useApiCall;
