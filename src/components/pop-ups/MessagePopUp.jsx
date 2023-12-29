import { useContext } from "react";
import { AppConfigContext } from "../../services/app-config-services/AppConfigContext";
import { Modal } from "../modal/Modal";
import PropTypes from "prop-types";

export const MessagePopUp = ({ message, send, cancel,continueSession = false }) => {
	const refineMessage = () => {
        // add line breaks to the message with &#10;
        return message.replace(/\n/g, "<br>");

	};
    const { setPromptRequest } = useContext(AppConfigContext);

    const handleInput = (e) => {
        setPromptRequest(e.target.value);
    }

	return (
		<Modal>
			<div>
				<p className="text-slate-900 dark:text-slate-50 text-xl font-bold"
					dangerouslySetInnerHTML={{ __html: refineMessage() }}>
				</p>

				{continueSession && (
					<>
						<input
                            onChange={handleInput}
							type="text"
							className="border-b  focus:border-b-2 focus:border-b-white focus:outline-0 bg-transparent w-full  py-2 mt-3"
						/>
                        <div className="flex justify-end">
                            
                            <button
                                onClick={cancel}
                                className="bg-slate-200 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-800 dark:text-slate-50 transition-all rounded-md px-3 py-2 mt-3">
                                Cancel
                            </button>
                            <button
                                onClick={send}
                                className="bg-slate-200 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-800 dark:text-slate-50 transition-all rounded-md px-3 py-2 mt-3">
                                Send
                            </button>
                        </div>
					</>
				)}
			</div>
		</Modal>
	);
};

MessagePopUp.propTypes = {
	message: PropTypes.string.isRequired,
	continueSession: PropTypes.bool,
    send: PropTypes.func,
    cancel: PropTypes.func
};
