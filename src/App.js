import React, { useState } from "react";
import Accordion from "./components/Accordion";
// eslint-disable-next-line no-unused-vars
import Footer from "./components/Footer";
// eslint-disable-next-line no-unused-vars
import Search from "./components/Search";
// eslint-disable-next-line no-unused-vars
import Dropdown from "./components/Dropdown";
// eslint-disable-next-line no-unused-vars
import Translate from "./components/Translate";

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
  // eslint-disable-next-line no-unused-vars
  const [selected, setSelected] = useState(options[0]);

  const showAccordion = () => {
    if (window.location.pathname === "/") {
      return <Accordion items={items} />;
    }
  };
  const showList = () => {
    if (window.location.pathname === "/list") {
      return <Search />;
    }
  };

  const showDropdown = () => {
    if (window.location.pathname === "/dropdown") {
      return <Dropdown />;
    }
  };

  const showTranslate = () => {
    if (window.location.pathname === "/translate") {
      return <Translate />;
    }
  };

  return (
    <div>
      {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()}
    </div>
  );
};

export default App;
