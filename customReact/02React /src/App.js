// (esm) for react and react-dom

import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const Chai = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Iron Man"),
    React.createElement("p", {}, "Spider Man"),
  ]);
};

// const App = () => {
//   return React.createElement(
//     "div",
//     { class: "test" },
//     React.createElement("h1", {}, "Chai, dudeeeeee heee")
//   );
// };

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Marval cinematic universe"),
    React.createElement(Chai),
  ]);
};

const conatainer = document.getElementById("root");
const root = ReactDOM.createRoot(conatainer);
root.render(React.createElement(App));
