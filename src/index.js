import React from "react";
import ReactDOM from "react-dom";
import Icon from "./icons";

import "./styles.css";

const style = {
  lineHeight: "18px",
  fontSize: "14px",
  textAlign: "center",
  height: "50px"
}

function App() {
  return (
    <div className="App">
      <div style={style}>
        <Icon name="checkbox" color="primaryDark" position="center"/>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
