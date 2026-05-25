/**
 * <div id="parent">
 *  <div id="child">
 *  <h1 id="sibOne">I am first Sibling</h1>
 *  <h2 id="sibTwo">I am Second Sibling</h2>
 *  </div>
 *  <div id="child2">
 *   <h3 id="sibOne1">I am first Sibling</h3>
 *   <h4 id="sibTwo2">I am Second Sibling</h4>
 *  </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "sibOne" }, "I am first Sibling"),
    React.createElement("h2", { id: "sibTwo" }, "I am Second Sibling"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", { id: "sibOne1" }, "I am first Sibling"),
    React.createElement("h4", { id: "sibTwo2" }, "I am Second Sibling"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
