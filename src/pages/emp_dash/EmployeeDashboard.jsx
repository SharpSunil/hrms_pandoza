import React from "react";
import "./EmployeeDashboard.scss";
import img1 from "../../assets/employee-dash.png";
import { Link } from "react-router-dom";
import { FaPrint } from "react-icons/fa";
function EmployeeDashboard() {
  const carddata = [
    {
      id: 1,
      icons: <FaPrint />,
      text: "Select Salary Slip",
      link:"dashboard",
    },
    {
      id: 2,
      icons: <FaPrint />,
      text: "Select Salary Slip",
      link:"dashboard",
    },
    {
      id: 1,
      icons: <FaPrint />,
      text: "Select Salary Slip",
      link:"dashboard",
    },
    {
      id: 1,
      icons: <FaPrint />,
      text: "Select Salary Slip",
      link:"dashboard",
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
                <Link to={item.link} className="main-box" key={index}>
                  <div className="icon">
                    {item.icons}
                  </div>
                  <div className="content-box">
                    <div className="text">{item.text}</div>
                    {/* <Link to="#" className="btn">Get Salary Slip</Link> */}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="right-dash">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              assumenda, molestiae reprehenderit aspernatur ut sequi id beatae
              illum illo omnis?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeDashboard;
