import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';
const App = ({hoursMinsecs}) =>{
  const {hours =0, minutes =0, seconds = 60} = hoursMinsecs;
  const [[hrs, mins, sec], setTime] = React.useState([hours, minutes, seconds]);
const  tick= () => {
  if(hrs === 0 && mins === 0 && secs === 0)
    reset()
  else if (mins === 0 && secs === 0){
   setTime([hrs -1, 59, 59]);
  } else if ( secs === 0){
  setTime([hrs, mins -1, 59])
  } else {
   setTime([hrs, mins, secs-1]);
  }
};
  const reset =() => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
  
  React.useEffect(() =>{
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });
  
  function counter(){
    
  }
  
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={this.counter}> sec.
        </h1>
      </div>
      <div id="current-time">{/* remaining time */}</div>
    </div>
  )
}


export default App;
