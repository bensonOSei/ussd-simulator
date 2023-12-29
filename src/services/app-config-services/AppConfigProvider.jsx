import { useState } from "react";
import { AppConfigContext } from "./AppConfigContext";
import PropTypes from "prop-types";
export const AppConfigProvider = ({ children }) => {
    const [display, setDisplay] = useState("");
    const [promptRequest, setPromptRequest] = useState("");
    const [sessionId, setSessionId] = useState("");

    const addToDisplay = (number) => {
        return setDisplay((prev) => prev + number);
    }

    const clearDisplay = () => {
        return setDisplay("");
    }

    const deleteLastDigit = () => {
        if (display === "") return;
        return setDisplay((prev) => prev.slice(0, -1));
    }

    const value = {
        display,
        setDisplay,
        addToDisplay,
        clearDisplay,
        deleteLastDigit,
        sessionId,
        setSessionId,
        promptRequest,
        setPromptRequest
    }

    return (
        <AppConfigContext.Provider value={value}>
            {children}
        </AppConfigContext.Provider>
    )

}

AppConfigProvider.propTypes = {
    children: PropTypes.node.isRequired
}