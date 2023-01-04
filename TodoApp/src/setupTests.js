// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import ReactDom from "react-dom";
import App from "./App";

if ("Render without crashing", () => {
	const div = document.createElement("div");
	ReactDom.render(<App />, div);
});