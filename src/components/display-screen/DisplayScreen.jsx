import { useContext, useEffect, useRef } from "react"
import { AppConfigContext } from "../../services/app-config-services/AppConfigContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons"

export const DisplayScreen = () => {
  const { display, deleteLastDigit } = useContext(AppConfigContext)
  const displayRef = useRef(null);

  useEffect(() => {
    const displayLength = display.length

    if(displayLength > 9) {
      displayRef.current.style.fontSize = "1.25rem"
    } else {
      displayRef.current.style.fontSize = "2rem"
    }
  }, [display])

  return (
    <div className="bg-slate-100 h-36 dark:bg-slate-800 p-2 mb-3 rounded-md ">
      <div className="h-full w-full rounded-md flex justify-end items-center p-2 ">
        <p
          ref={displayRef} 
        className="text-4xl text-slate-900  dark:text-slate-50 font-bold  text-wrap">
          {display}
        </p>
        <button
          onClick={() => deleteLastDigit()}
         className="ml-4 text-slate-900 dark:text-slate-50 font-bold text-2xl">
          <FontAwesomeIcon icon={faDeleteLeft} />
        </button>
      </div>
    </div>
  )
}
