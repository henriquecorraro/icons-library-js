import React from "react";
import ReactDOM from "react-dom";
import Icon from "./icons";

import "./styles.css";
const style = {
  width: "200px",
  height: "200px"
}
function App() {
  return (
    <div className="App">
      <div style={style}>
        <Icon name="user" color="#dd0000"/>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
