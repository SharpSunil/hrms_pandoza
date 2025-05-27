import React, { useContext } from "react";
import "./Page_Comp.scss";
import { Link, useLocation } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { BsListUl } from "react-icons/bs";
import { BsListTask } from "react-icons/bs";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { MdOutlineAddCircle } from "react-icons/md";
import { UserContext } from "../../../Context";
const Page_Comp = ({ children }) => {
 const {active,setActive} = useContext(UserContext)

  const location = useLocation();
  const sideBarSection = [
    {
      icon: <RiDashboardFill />,
      line_icon: <RiDashboardHorizontalLine />,
      path_name: "Employees",
      path: "/employees",
    },
    {
      icon: <BsListTask />, 
      line_icon: <BsListUl />,
      path_name: "Listings",
      
      children: [
        {
          path_name: "Employees",
          path: "/",
        },
        {
          path_name: "Users",
          path: "/user-list",
        },
      ],
    },
    {
      icon: <MdOutlineAddCircle />,
      line_icon: <MdOutlineAddCircleOutline />,
      path_name: "Add",
    
      children: [
        {
          path_name: "Add Employee",
          path: "/add_employee",
        },
        {
          path_name: "Add Users",
          path: "/user-registration",
        },
       
      ],
    },
  ];

  return (
    <>
      <div class="page_parent parent">
        <div
          class={active ? "sidebar active" : "sidebar"}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          <div class="logo"></div>
          <div class="nav_section">
            {sideBarSection.map((item, index) => (
              <Link
                className={
                  location.pathname === item.path ? "active nav" : "nav"
                }
                to={item.path}
                key={index}
              >
                <span className="fill_icon">{item.icon}</span>
                <span className="line_icon">{item.line_icon}</span>
                {item.path_name}

                {item.children && (
                  <div class="drop_down">
                    <div class="list">
                      {item.children.map((item, index) => (
                        <Link  className={location.pathname === item.path ? "active dropnav" : "dropnav"} key={index} to={item.path}>
                          {item.path_name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </Link>
            ))}
          </div>
          <div class="version"></div>
        </div>
        <div class={active ? "section active" : "section"}>{children}</div>
      </div>
    </>
  );
};

export default Page_Comp;
