import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TextInputWeb from "universalApp/TextInputWeb";
import Addition from "universalApp/Addition";
const App = () => {
  const [location, setLocation] = useState("");

  return (
    <div className="container">
      <TextInputWeb
        type="text"
        id="location"
        placeholder=""
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{
          height: "40px",
        }}
      />
      <button onClick={() => Addition(location)}>Click To get Location</button>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
