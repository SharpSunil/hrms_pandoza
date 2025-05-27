import React from "react";
import "./EmployeeDashboard.scss";
import img1 from "../../assets/employee-dash.png";
import { Link } from "react-router-dom";
import { FaBalanceScale, FaCalendarCheck, FaFileInvoiceDollar, FaLayerGroup} from "react-icons/fa";

import { SiGoogledocs, SiReadthedocs } from "react-icons/si";
import { MdEditSquare } from "react-icons/md";
function EmployeeDashboard() {
 const carddata = [
  {
    id: 1,
    icon: <FaBalanceScale />,
    text: "Balance Leaves",
    link: "/employee/leaves",
    bgColor: "#e0f7fa",
  },
  {
    id: 2,
    icon: <FaCalendarCheck />,
    text: "Apply for Leave",
    link: "/employee/apply-leave",
    bgColor: "#e0f7fa",
  },
  
 
  {
    id: 3,
    icon: <SiGoogledocs />,
    text: "View Offer Letter",
    link: "/employee/apply-leave",
    bgColor: "#e0f7fa",
  },
  {
    id: 4,
    icon: <FaFileInvoiceDollar />,
    text: "Generate Salary Slip",
    link: "/employee/salary-slip",
    bgColor: "#e0f7fa",
  },
  {
    id: 5,
    icon: <FaLayerGroup />,
    text: "View Increment Letter",
    link: "/employee/apply-leave",
    bgColor: "#e0f7fa",
  },
  {
    id: 6,
    icon: <SiReadthedocs />,
    text: "View Another Docs",
    link: "/employee/apply-leave",
    bgColor: "#e0f7fa",
  },
  {
    id: 6,
    icon: <MdEditSquare />,
    text: "Create Approval Letter",
    link: "/employee/approval-letter",
    bgColor: "#e0f7fa",
  },

];

  return (
    <>
      <div className="employee-dash-parent parent">
        <div className="employee-dash-cont cont">
          <div className="left-dash">
            {/* <h1>Employee Dashboard</h1> */}
            <div className="top-card">
              <div className="content">
                <h3>Hello Prajwal Kulkarni!</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Illum, dolorum?
                </p>
              </div>
              <img src={img1} alt="user Dashboard" />
            </div>
            <div className="bottom-card">
              {/* <h4>Another Links </h4> */}
              {carddata.map((item, index) => (
               <Link to={item.link} className="main-box" key={index} style={{ backgroundColor: item.bgColor }}>

                  <div className="icon">
                    {item.icon}
                  </div>
                  <div className="content-box">
                    <div className="text">{item.text}</div>
                    {/* <Link to="#" className="btn">Get Salary Slip</Link> */}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* <div className="right-dash">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              assumenda, molestiae reprehenderit aspernatur ut sequi id beatae
              illum illo omnis?
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default EmployeeDashboard;
