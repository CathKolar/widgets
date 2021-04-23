import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

// API KEY AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
// only works on localhost:3000
const options = [
  { label: "Finnish", value: "fi" },
  { label: "French", value: "fr" },
  { label: "Slovenian", value: "sl" },
  { label: "Spanish", value: "es" },
];

export default function Translate() {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text:</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label={"Select a language"}
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
}
