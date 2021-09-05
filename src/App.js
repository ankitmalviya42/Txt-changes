import "./App.css";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import React, { useState } from "react";
import Alert from "./Component/Alert";
import About from "./Component/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  function ToggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 36, 64)";
      showAlert(" Dark mode has been Enabled", "success");
      document.title = "TextUtils - Dark-Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
      document.title = "TextUtils - Light-Mode";
    }
  }

  return (
    <div>
      <Router>
        <Navbar title="TextUtils" mode={mode} ToggleMode={ToggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
            <TextForm mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
