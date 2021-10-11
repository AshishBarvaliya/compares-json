import React from "react";
import ReactDiffViewer from "react-diff-viewer";

export const Main = () => {
  const past = `
  {"widget": {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}}  `;

  const current = `
  {"widget": {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "mainwindow",
        "width": 500,
        "height": 500
    },
    "image": { 
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 110,
        "alignment": "center",
    }
}} `;

  return (
    <div style={{ margin: 100}}>
      <ReactDiffViewer oldValue={past} newValue={current} splitView={true} />
    </div>
  );
};
