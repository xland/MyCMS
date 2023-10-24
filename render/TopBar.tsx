import React from "jsx-dom";
import "./TopBar.scss";
import TitleBarBtns from "./TitleBarBtns";
export default function () {    
  return <div id="TopBar">
    <div class="titleBox">MyCMS</div>
    <TitleBarBtns></TitleBarBtns>
  </div>;
}