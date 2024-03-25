import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("div"));

// const h3 = React.createElement("h3", null, "Welceom to react app");

const h3 = <h3>Welcome this is H3 </h3>;
root.render(h3);
