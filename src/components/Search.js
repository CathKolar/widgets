import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  console.log("I RUN WITH EVERY RENDER");

  useEffect(() => {
    console.log("I RUN AFTER EVERY RENDER AS WELL AS INITIALLY if the data has changed!");
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          ></input>
        </div>
      </div>
    </div>
  );
};
export default Search;
