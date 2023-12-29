import { Dial } from "./components/dial/Dial"
import { DisplayScreen } from "./components/display-screen/DisplayScreen"

function App() {

  return (
    <>
    <div className="flex flex-col h-screen w-full max-w-md mx-auto p-5">
        <DisplayScreen />
        <Dial />
      </div>
    </>
  )
}

export default App
