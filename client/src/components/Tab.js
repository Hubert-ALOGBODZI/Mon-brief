import React from "react";
import "../CSS/Tab.css";
const Tab = () => {
  const tabs = document.querySelectorAll(".tabs h3");
  const tabContain = document.querySelectorAll(".tabContain div");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabContain.forEach((content) => {
        content.classList.remove("active");
      });
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContain[index].classList.add("active");
    tabs[index].classList.add("active");
  });
  return (
    <div className="containerd">
      <div className="tabs">
        <h3 className="active">TAB1</h3>
        <h3>TAB2</h3>
        <h3>TAB3</h3>
        <h3>TAB4</h3>
      </div>
      <div className="tabContain">
        <div className="actived" style={{display: "block",
  color: "red"}}>
          <h4>TAB1
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis!
            </p>
          </h4>
        </div>
        <div>
          <h4>TAB2
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis!
            </p>
          </h4>
        </div>
        <div>
          <h4>TAB3
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis!
            </p>
          </h4>
        </div>
        <div>
          <h4>TAB4
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis!
            </p>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Tab;
