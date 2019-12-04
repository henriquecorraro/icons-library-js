import React from "react";
import ReactDOM from "react-dom";
import Icon from "./icons";

import "./styles.css";
import iconsSVG from "./icons/iconsSVG";

const linha = {
  float:"left",
  width:"100%",
  textAlign: "left",
  borderBottom: "1px solid #DDD",
  paddingBottom: "10px",
  marginBottom: "20px"
}

const xs = {
  width: "5%",
  minWidth: "28px",
  height: "24px",
  float:"left"
}

const sm = {
  width: "10%",
  minWidth: "52px",
  height: "48px",
  float:"left"
}

const md = {
  width: "15%",
  minWidth: "68px",
  height: "64px",
  float:"left"
}

const lg = {
  width: "20%",
  minWidth: "132px",
  height: "128px",
  float:"left"
}

const xl = {
  width: "30%",
  minWidth: "260px",
  height: "256px",
  float:"left"
}

function App() {
  return (
    <div className="App">
      { 
        Object.keys(iconsSVG).map(key => {
          return (<div style={linha}>
            <p>Name: {iconsSVG[key].name} </p>
            <p>Value: {key} </p>
            <div style={xs}>
              <Icon name={key} color="primaryDark" position="center"/>
            </div>
            <div style={sm}>
              <Icon name={key} color="primaryDark" position="center"/>
            </div>
            <div style={md}>
              <Icon name={key} color="primaryDark" position="center"/>
            </div>
            <div style={lg}>
              <Icon name={key} color="primaryDark" position="center"/>
            </div>
            <div style={xl}>
              <Icon name={key} color="primaryDark" position="center"/>
            </div>
          </div>)
       })
      }
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
