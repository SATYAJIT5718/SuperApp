import React from "react";
import ReactDOM from "react-dom";
import TextInputWeb from "./component/TextInput/TextInputWeb";
import "./index.css";

const App = () => (
  <div className="container">
    <TextInputWeb />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
