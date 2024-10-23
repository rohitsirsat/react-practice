function customRender(reactElenent, container) {
  //   const domElement = document.createElement(reactElenent.type);
  //   domElement.innerHTML = reactElenent.cildren;
  //   domElement.setAttribute("href", reactElenent.props.href);
  //   domElement.setAttribute("target", reactElenent.props.target);
  //   container.appendChild(domElement);
  //   container.appendChild(domElement);

  const domElement = document.createElement(reactElenent.type);
  domElement.innerHTML = reactElenent.cildren;
  for (const prop in reactElenent.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElenent.props[prop]);
  }

  container.appendChild(domElement);
}

// want to enject this object to the 'root' element
const reactElenent = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  cildren: "Click me to visit google",
};

// root element
const mainContainer = document.querySelector("#root");

customRender(reactElenent, mainContainer);
