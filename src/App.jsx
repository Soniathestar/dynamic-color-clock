import { useEffect, useState } from "react";
import { format } from "date-fns";
import "./App.css";

function App() {
  const [time,setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  return(
    <div className = "container">
      <h1>Color Clock</h1>

      <p className="clock">
        {format(time, "EEEE, MMMM do yyyy - hh:mm:ss a")}
      </p>
    </div>
  )
}

export default App

