// const heading = React.createElement("h1", {
//     id: "heading",
//     className: "headings"
// }, "Hello World from React!");

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "Hi I am H1 from child 1 Tag"),
            React.createElement("h2", {}, "Hi I am H2 from child 1 Tag")
        ]
    ),
    React.createElement("div", { id: "child2" },
        [
            React.createElement("h1", {}, "Hi I am H1 from child 2 Tag"),
            React.createElement("h2", {}, "Hi I am H2 from child 2 Tag")
        ]
    )
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);