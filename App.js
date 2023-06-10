import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", {}, "hello  giri🙋");

console.log("heading", heading); // thiis is rerutn object not heading
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log("root", root);
root.render(heading); // the render method basically convert to object in heading;
