import react from "react";
import reactDom from "react-dom/client";

const heading = react.createElement("h1", { id: "heading" }, "Hello World from react");
const root = reactDom.createRoot(document.getElementById("root"));
root.render(heading);
const parent = react.createElement("div", { id: "parent" },
    [react.createElement("div", { id: "child" },
        [react.createElement("h1", {}, "I am a H1 tag"), react.createElement("h2", {}, "I am a H2 tag")]
    ), react.createElement("div", { id: "child" },
        [react.createElement("h1", {}, "I am a H1 tag"), react.createElement("h2", {}, "I am a H2 tag")]
    )]);
root.render(parent);