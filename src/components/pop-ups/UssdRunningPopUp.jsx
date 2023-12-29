import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Modal } from "../modal/Modal"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

export const UssdRunningPopUp = () => {
  return (
    <Modal>
        <div className="flex items-center">
            <FontAwesomeIcon icon={faSpinner} className="animate-spin text-2xl text-slate-900 dark:text-slate-50" />
            <p className="text-slate-900 dark:text-slate-50 text-xl font-bold ml-3">USSD Running...</p>
        </div>
    </Modal>
  )
}

