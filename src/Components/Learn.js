import React from "react";
import { data } from "./data";
import Header from "./Header";
import SideMenu from "./SideMenu";
import "./css/styles.css"

const Learn = () => {

  const learn_list = [
    "How to create and nest components",
    "How to add markup and styles",
    "How to display data",
    "How to render conditions and lists",
    "How to respond to events and update the screen",
    "How to share data between components"
  ];
  return (
    <>
      <Header />
      <div className="learn-container">
        <SideMenu data={data} />
        <div className="learn-right-side">
          <h1>Quick start</h1>
          <p>
            Welcome to the React documentation! This page will give you an
            introduction to the 80% of React concepts that you will use on a
            daily basis.
          </p>
          <div className="learn-list">
            <ul>
              {
                learn_list.map(item => {
                  return <li>{item}</li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learn;
