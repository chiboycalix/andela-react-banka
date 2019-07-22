import React from "react";
import ReactDOM from "react-dom";
import './index.css'

const App = () => {
  return <div className="style">Hello React,Webpack 4 & Babel 7!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));