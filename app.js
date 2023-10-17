import react from "react";
import reactDom from "react-dom/client";

const heading = react.createElement(
  "h1",
  { id: "heading" },
  "Hello World from react"
);
const root = reactDom.createRoot(document.getElementById("root"));
//root.render(heading);

const value = 1000;
//JSX Element
const headingElement = <h1>Hello World From JSX</h1>;

const Headings = () => <h1>Hello World From JSX</h1>;


//JSX Component
const HeadingComponent = () => (
  <div id="somethine">
    <h1 id="head">Hello World From JSX Component</h1>
    <h2>{value}</h2>
    {heading}
    {headingElement}
    <Headings/>
  </div>
);
root.render(<HeadingComponent />);
