import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const Modal = ({ children, closeModal }) => {
	return (
		<div className="fixed inset-0 h-screen bg-gray-900 bg-opacity-50 flex justify-center items-center p-5">
			<motion.div className="relative bg-white dark:bg-slate-700 dark:text-slate-50 p-4 rounded-md">
				{closeModal && (
					<button
						className="absolute top-0 right-0 p-2"
						onClick={closeModal}>
						<FontAwesomeIcon icon={faTimes} />
					</button>
				)}

				<div>{children}</div>
			</motion.div>
		</div>
	);
};

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	closeModal: PropTypes.func,
};
