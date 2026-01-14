// import { useState } from "react";
import { format } from "date-fns";
import "./App.css";

function App() {
  const date = new Date();
  const formattedDate = format(date, "dd-MM-yyyy hh:mm a");
  return (
    <div className="clock-container">
      <p className="clock">{formattedDate}</p>
    </div>
  );
}

export default App;
