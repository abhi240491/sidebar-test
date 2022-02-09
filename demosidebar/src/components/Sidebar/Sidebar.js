import React, { useState } from "react";
import "./Sidebar.css";
import { RiMenuLine, RiTaskFill, RiLayoutGridFill } from "react-icons/ri";
import { IoAnalyticsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
function Sidebar() {
  //add links to the two pages/ look for the collapsing feature of sidebar
  const sideBarCollapse = localStorage.getItem("sidebar-collapsed");
  const [collapse, setCollapse] = useState(sideBarCollapse ? true : false);

  const onClickToggle = () => {
    if (collapse) {
      setCollapse(false);
      localStorage.removeItem("sidebar-collapsed");
      return;
    }
    setCollapse(true);
    localStorage.setItem("sidebar-collapsed", true);
  };

  return (
    <div className={collapse ? "sidebar-collapsed" : "sidebar"}>
      <div className="sidebar-header">
        <RiMenuLine onClick={onClickToggle} className="sidebar-menu" />
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <h1 className="sidebar-logo">LOGO</h1>
        </Link>
      </div>
      <div className="sidebar-items">
        <div >
          <Link to="/dashboard" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <RiLayoutGridFill className="sidebar-icon" />
            <span className="sidebar-text">Dashboard</span>
          </Link>
        </div>

        <div className="item">
          <Link to="/analytics" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <IoAnalyticsSharp className="sidebar-icon" />
            <span className="sidebar-text">Analytics</span>
          </Link>
        </div>

        <div className="item">
          <Link to="tasks" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <RiTaskFill className="sidebar-icon" />
            <span className="sidebar-text">Tasks</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
