import React, { useState } from "react";
import "./styles.css";

// var userName=prompt("enter your name")
var userName = "vaibhav";
// var counter="Click"+0;

export default function App() {
  var [counter, setCounter] = useState(0);

  function buttonAction() {
    var counterConsole = (counter += 1);
    setCounter(counterConsole);
  }
  
  function buttonDislike() {
    if (counter > 0){
    var counterConsole = (counter -= 1)
    setCounter(counterConsole);}
    
  }
  function ifGreater(){
    if (counter > 3){
    return "red"
    }
  }
  return (
    <div className="App">
      <h1>Welcome</h1>
      <h2>hello {userName}</h2>
      <button onClick={buttonAction}>Like me</button><span style={{color:ifGreater()}}> {counter} </span>
      <button
        style={{ color: "red" }}
        className="dislike"
        onClick={buttonDislike}
      >
        DisLikeME
      </button><span></span>
    </div>
  );
}
