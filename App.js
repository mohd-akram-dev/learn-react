import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "sibOne" }, "I am first Sibling"),
//     React.createElement("h2", { id: "sibTwo" }, "I am Second Sibling"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h3", { id: "sibOne1" }, "I am first Sibling"),
//     React.createElement("h4", { id: "sibTwo2" }, "I am Second Sibling"),
//   ]),
// ]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "H1 tag coming from React Element",
// );

// JSX => React.createElement => ReactElement-JS Object =>HTMLElement(render)
// React Element
const jsxHeading = (
  <h4 className="head" tabIndex={5}>
    H1 from JSX{" "}
  </h4>
);

// React Component - Two Types of
// Functional Component - New way to write code
const Title = () => <h3 className="title">Namaste Title</h3>;

// Component Composition
const HeadingComponent = () => {
  return (
    <div id="container">
      {jsxHeading}
      <Title />
      <h2 className="reactHeading">H1 from React function Component</h2>
    </div>
  );
};
// Class Based Component - OLD way to write code

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent />);
