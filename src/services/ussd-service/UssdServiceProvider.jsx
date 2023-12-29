import { useState } from "react";
import { UssdServiceContext } from "./UssdServiceContext"
import PropTypes from "prop-types";

export const UssdServiceProvider = ({ children }) => {
    const [session, setSession] = useState({
        sessionID: "",
        msisdn: "0551234987",
        network: "mtn",
        newSession: true,
        userID: "05512",
    });



    

    return (
        <UssdServiceContext.Provider value={{session,setSession}}>
            {children}
        </UssdServiceContext.Provider>
    )
}

UssdServiceProvider.propTypes = {
    children: PropTypes.node.isRequired
}
