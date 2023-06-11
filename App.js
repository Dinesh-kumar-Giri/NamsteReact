import React from "react";
import ReactDOM from "react-dom/client";

// react element

// jsx (transpile befor it reaches the js engine) -parce -Bable

// these is cor
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hey i am ract 🙋"
// );

// // return object
// console.log("heading", heading);

// react element
const jsxHeading = (<h1 id="heading">"namse react bhai using jsx🚀"</h1>);

// react component

const Greeting =()=>  <h1>"hello giri🙋"</h1>


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting/>);
