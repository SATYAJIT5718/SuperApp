import React, { useState } from "react";

const TextInputWeb = (props) => {
  // const [location, setLocation] = useState("");
  console.log("props", props);
  return (
    <div>
      <form>
        <label htmlFor="location">
          Enter Location :
          <input {...props} />
        </label>
      </form>
    </div>
  );
};

export default TextInputWeb;
