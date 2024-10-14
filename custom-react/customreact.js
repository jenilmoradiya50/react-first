function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);

  // Set attributes
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  // Set innerHTML or text content for children
  if (reactElement.children) {
    domElement.innerHTML = reactElement.children; // Use innerHTML if you want to render HTML
    // Alternatively, use domElement.textContent = reactElement.children; for plain text
  }

  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "click me to visit google", // Corrected to 'children'
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
