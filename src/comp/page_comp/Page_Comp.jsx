import React, { useState } from "react";
import "./Page_Comp.scss";
import { Link } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { RiDashboardHorizontalLine } from "react-icons/ri";
const Page_Comp = ({ children }) => {
  const [active,setActive] = useState(false)
  const sideBarSection = [
    {
      icon: <RiDashboardFill />,
      line_icon: <RiDashboardHorizontalLine />,
      path_name: "Dashboard",
      path: "/",
    },
    {
      icon: <RiDashboardFill />,
      line_icon: <RiDashboardHorizontalLine />,
      path_name: "Dashboard",
      path: "/",
    },
    {
      icon: <RiDashboardFill />,
      line_icon: <RiDashboardHorizontalLine />,
      path_name: "Dashboard",
      path: "/",
    },
    {
      icon: <RiDashboardFill />,
      line_icon: <RiDashboardHorizontalLine />,
      path_name: "Dashboard",
      path: "/",
    },
  ];

  return (
    <>
      <div class="page_parent parent">
        <div class="sidebar">
          <div class="logo"></div>
          <div class="nav_section">
            {/* {sideBarSection.map((item, index) => (
              <Link className="nav " to={item.path} key={index}>
                <span className="fill_icon">{item.icon}</span>
                <span className="line_icon">{item.line_icon}</span>
                {item.path_name}
              </Link>
            ))} */}

            <Link className="nav" >
             <RiDashboardHorizontalLine />
            </Link>
          </div>
          <div class="logout"></div>
        </div>
        <div class="section">{children}</div>
      </div>
    </>
  );
};

export default Page_Comp;
