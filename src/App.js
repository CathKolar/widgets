import React, { useState } from "react";
// import Accordion from "./components/Accordion";
import Footer from "./components/Footer";
// eslint-disable-next-line no-unused-vars
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

// eslint-disable-next-line no-unused-vars
const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use react by creating components",
  },
];
const options = [
  { label: "The Color Red", value: "red" },
  { label: "The Color Green", value: "green" },
  { label: "A Shade of Blue", value: "blue" },
];
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/*<Search /> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};

export default App;
