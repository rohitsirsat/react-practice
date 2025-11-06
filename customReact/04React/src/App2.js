// (esm) for react and react-dom

import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const Chai = (props) => {
  console.log(props);
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.cost),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Marval cinematic universe"),
    React.createElement(Chai, {
      name: "RDJ",
      cost: "20000000000000",
    }),
  ]);
};

const conatainer = document.getElementById("root");
const root = ReactDOM.createRoot(conatainer);
root.render(React.createElement(App));
