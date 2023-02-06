import React from "react";
import { render } from "react-dom";
import App from "../components/App";

console.log(process.env.SERVER_API_ENDPOINT, process.env.GOOGLE_API_KEY, process.env.NODE_ENV);
document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.body.appendChild(document.createElement("div")));
});