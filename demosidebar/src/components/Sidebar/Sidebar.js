import React, { useState } from "react";
import "./Sidebar.css";
import { RiMenuLine, RiTaskFill, RiLayoutGridFill } from "react-icons/ri";
import { IoAnalyticsSharp } from "react-icons/io5";
function Sidebar() {
  //add links to the two pages/ look for the collapsing feature of sidebar
  const sideBarCollapse = localStorage.getItem('sidebar-collapsed');
  const [collapse, setCollapse] = useState(sideBarCollapse?true:false);

  const onClickToggle = () => {
      if(collapse){
          setCollapse(false);
          localStorage.removeItem('sidebar-collapsed');
          return;
      }
      setCollapse(true);
      localStorage.setItem('sidebar-collapsed',true);
    };

  return (
    <div className={collapse ? 'sidebar-collapsed' : "sidebar"}>
      <div className="sidebar-header">
        <RiMenuLine onClick = {onClickToggle} className="sidebar-menu" />
        <h1 className="sidebar-logo">LOGO</h1>
      </div>
      <div className="sidebar-items">
        <div className="item">
          <RiLayoutGridFill className="sidebar-icon" />
          <span className="sidebar-text">Dashboard</span>
        </div>

        <div className="item">
          <IoAnalyticsSharp className="sidebar-icon" />
          <span className="sidebar-text">Analytics</span>
        </div>

        <div className="item">
          <RiTaskFill className="sidebar-icon" />
          <span className="sidebar-text">Tasks</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
