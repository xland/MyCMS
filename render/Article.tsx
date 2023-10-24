import React from "jsx-dom";
import "./Article.scss";
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
import List from '@editorjs/list'; 
export default function () {   
  document.addEventListener("DOMContentLoaded", async ()=>{
    const editor = new EditorJS({ 
      holder: 'Article', 
      tools: { 
        header: Header, 
        list: List 
      }, 
    });
  })
  return <div id="Article"></div>;
}