import React from "react";
// import Accordion from "./components/Accordion";
import Footer from "./components/Footer";
import Search from "./components/Search";

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
const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
      <Footer />
    </div>
  );
};

export default App;
