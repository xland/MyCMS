import React from "jsx-dom";
import "./Index.scss";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import LeftBar from "./LeftBar";
import Category from "./Category";
import List from "./List";
import Article from "./Article";
function App() {
  document.body.ondragstart = () => false;
  document.body.ondragend = () => false;
  document.body.ondrop = () => false;
  
  return (
    <>
      <TopBar></TopBar>
      <div>
        <LeftBar></LeftBar>
        <Category></Category>
        <List></List>
        <Article></Article>
      </div>
      <BottomBar></BottomBar>
    </>
  );
}
document.body.appendChild(<App />);
