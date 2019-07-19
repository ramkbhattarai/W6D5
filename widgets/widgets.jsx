import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from "./frontend/tabs"

const Root = (props) =>{
  const tabsArray = [{title: "one", content: "I am the First"},{title: "two", content: "Second Plane is Here"},{title: "three", content: "Third Plane is Here"}];
  return (
    <>
      <Clock/>
      <Tabs tabsArray={tabsArray}/>
    </>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root/>, root);

});
