
import { useTheme } from "../hooks/useTheme";

export default function ThemeSelector() {

  const {changeMode, mode} = useTheme()
  const toggleMode =()=>{
    changeMode(mode==="dark"?"light":"dark")
  }

  
  return (
    <div className="flex justify-center my-8">
        <div className={`flex border rounded-md ${mode==="dark" ? "border-white" : "border-black"} w-24`}>
      <button
      onClick={toggleMode}
       className="w-8 flex items-center gap-1">
        {mode==="dark" ? (
          <>
            <img src="day-mode.png"></img> <span>Light</span>
          </>
        ) : (
          <>
            <img src="night-mode.png" /> <span>Dark</span>
          </>
        )}
      </button>
    </div>
    </div>
  );
}
