import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/alert";
import "./index.css"

function App() {
  const [mode, setMode] = useState("light");
  const [toggleText, setToggleText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  function handleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743";
      setToggleText("Enable Normal-Mode");
      forSetAlert("success", "Dark-Mode is Enable");
      // document.title = "TextUtils-DarkMode";
      
      // setInterval(()=>{
      //   document.title="Install TextUtils"
      // },2000);
      // setInterval(()=>{
      //   document.title="Dark_Mode"
      // },1500);
    } else {
      setMode("light");
      document.body.style.background = "white";
      setToggleText("Enable Dark-Mode");
      forSetAlert("success", "Normal-Mode is Enable");
    }
  }

  function forSetAlert(type, message) {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(function () {
      setAlert(null);
    }, 3000);
  }

  return (
    <>
      <Router>
        <Navbar
          navTitle="TextUtils"
          about="About"
          toggleSwitch={handleMode}
          toggleLabel={toggleText}
          mode={mode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
            <Route path="/" element={<TextForm
                textHeading="Enter the text to analyze below!.."
                mode={mode}
                forSetAlert={forSetAlert}
                alert={alert}
              />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
