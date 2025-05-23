import React, { useContext, useEffect, useState } from "react";
import "./Table.scss";
import TableComponent from "../../comp/table/TableComponent";
import axios from "axios";
import { UserContext } from "../../../Context";
import Header from "../../comp/header/Header";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
function Employees() {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  const navigateToaddemp = (id)=>{
navigate(`/add_employee?employeeId=${id}`)
  }

  const columns = [
    {
      title: "Employee Name",
      dataIndex: "employeeName",
      sorter: true,
      width: "auto",
      fixed: "left",
    },
    {
      title: "Employee Id",
      dataIndex: "employeeId",
      sorter: true,
      width: "auto",
      fixed: "left",
    },
    {
      title: "Attendance Code",
      dataIndex: "attendanceCode",
      sorter: true,
      width: "auto",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      filters: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" },
      ],
      width: "auto",
    },

    {
      title: "Employee Status",
      dataIndex: "employeeStatus",
      sorter: true,
      width: "auto",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      sorter: true,
      width: "auto",
    },
    {
      title: "Department",
      dataIndex: "department",
      sorter: true,
      width: "auto",
    },
    {
      title: "Date of joinning",
      dataIndex: "dateOfJoining",
      sorter: true,
      width: "auto",
    },
    {
      title: "Date of Living",
      dataIndex: "dateOfLiving",
      sorter: true,
      width: "auto",
    },
    {
      title: "Contact ",
      dataIndex: "contactNumber",
      sorter: true,
      width: "auto",
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: true,
      width: "auto",
    },
    {
      title: "Ifsc code ",
      dataIndex: "ifscCode",
      sorter: true,
      width: "auto",
    },
    {
      title: "Date of Birth ",
      dataIndex: "dateOfBirth",
      sorter: true,
      width: "auto",
    },
    {
      title: "Aadhar Number ",
      dataIndex: "aadharNumber",
      sorter: true,
      width: "auto",
    },
    {
      title: "Pan Number ",
      dataIndex: "panNumber",
      sorter: true,
      width: "auto",
    },
    {
      title: "Account Number ",
      dataIndex: "accountNumber",
      sorter: true,
      width: "auto",
    },
    {
      title: "Cost to Company ",
      dataIndex: "costtoCompany",
      sorter: true,
      width: "auto",
    },
    {
      title: "Employee Salary ",
      dataIndex: "employeeSalary",
      sorter: true,
      width: "auto",
    },
    {
      title: "Bank Name ",
      dataIndex: "bankName",
      sorter: true,
      width: "auto",
    },
    {
      title: "Company Name ",
      dataIndex: "companyName",
      sorter: true,
      width: "auto",
    },
    {
      title: "Deduction ",
      dataIndex: "diduction",
      sorter: true,
      width: "auto",
    },
    {
      title: "Image",
      dataIndex: "employeeImage",
      sorter: true,
      width: "auto",
      render: (text, record) => {
        return (
          <img
            src={record.employeeImage}
            alt="employee"
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        );
      },
    },

    {
      title: "Address",
      dataIndex: "address",
      sorter: true,
      width: "auto",
    },
    {
      title: "Uan no",
      dataIndex: "uanNo",
      sorter: true,
      width: "auto",
    },
    {
      title: "Actions",
      
      sorter: true,
      width: "auto",
       render: (text, record) => {
        return (
        <div class="actions" style={{ display: "flex", gap: "10px" }}>
          <Button class="edit-btn" onClick={()=>navigateToaddemp(record.employeeId)}  >
           <MdEdit />
          </Button>
          <Button class="delete-btn">
           <MdDelete />
          </Button>
        </div>
        );
      },
    },
  ];

  const token = localStorage.getItem("token");

  const getEmployeeData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}Admin/GetAllEmployee?Page=0&Size=5`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const filterateData = response.data.map((item, index) => ({
        key: index,
        id: item.data.uid,
        employeeName: item.data.employeeName,
        employeeId: item.data.employeeId,
        attendanceCode: item.data.attendanceCode,
        gender: item.data.gender,
        employeeStatus: item.data.employeeStatus,
        designation: item.data.designation,
        department: item.data.department,
        dateOfJoining: item.data.dateOfJoining,
        dateOfLiving: item.data.dateOfLiving,
        contactNumber: item.data.contactNumber,
        email: item.data.email,
        ifscCode: item.data.ifscCode,
        dateOfBirth: item.data.dateOfBirth,
        aadharNumber: item.data.aadharNumber,
        panNumber: item.data.panNumber,
        accountNumber: item.data.accountNumber,
        costtoCompany: item.data.costtoCompany,
        employeeSalary: item.data.employeeSalary,
        bankName: item.data.bankName,
        companyName: item.data.companyName,
        diduction: item.data.diduction,
        employeeImage: item.data.employeeImage,
        address: item.data.address,
        uanNo: item.data.uanNo,
      }));
      setData(filterateData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      getEmployeeData();
    }
  }, []);

  return (
    <>
    <Header title="Employees List" />
      <div class="employees">
  
        <TableComponent data={data} columns={columns} />
      </div>
    </>
  );
}

export default Employees;
