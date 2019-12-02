import React from "react";
import ReactDOM from "react-dom";
import Icon from "./icons";

import "./styles.css";
const style = {
  width: "50px",
  height: "50px"
}
function App() {
  return (
    <div className="App">
      <div style={style}>
        <Icon/>
        </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
