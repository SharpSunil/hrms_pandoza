import React, { useState } from "react";
import "./UserList.scss";
import TableComponent from "../../comp/table/TableComponent";
import {
  AiTwotoneDelete,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

const UserList = () => {
  const [visiblePasswords, setVisiblePasswords] = useState({});

  const togglePasswordVisibility = (key) => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const columns = [
    {
      title: "User Name",
      dataIndex: "userName",
      sorter: true,
      width: "auto",
    },
    {
      title: "User Email",
      dataIndex: "useremail",
      sorter: true,
      width: "auto",
    },
    {
      title: "User Password",
      dataIndex: "userpassword",
      sorter: true,
      width: "auto",
      render: (text, record) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <span>{visiblePasswords[record.key] ? text : "********"}</span>
          <button
            onClick={() => togglePasswordVisibility(record.key)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            {visiblePasswords[record.key] ? (
              <AiOutlineEyeInvisible />
            ) : (
              <AiOutlineEye />
            )}
          </button>
        </div>
      ),
    },
    {
      title: "User Role",
      dataIndex: "userrole",
      sorter: true,
      width: "auto",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            className="edit-btn"
            style={{
              padding: "5px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CiEdit />
          </button>
          <button
            className="delete-btn"
            style={{
              padding: "5px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AiTwotoneDelete />
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      userName: "John Doe",
      useremail: "johndoe@gmail.com",
      userpassword: "password123",
      userrole: "Admin",
    },
    {
      key: "2",
      userName: "John Doe",
      useremail: "johndoe@gmail.com",
      userpassword: "password123",
      userrole: "Admin",
    },
    {
      key: "3",
      userName: "John Doe",
      useremail: "johndoe@gmail.com",
      userpassword: "password123",
      userrole: "Admin",
    },
    {
      key: "4",
      userName: "John Doe",
      useremail: "johndoe@gmail.com",
      userpassword: "password123",
      userrole: "Admin",
    },
    {
      key: "5",
      userName: "John Doe",
      useremail: "johndoe@gmail.com",
      userpassword: "password123",
      userrole: "Admin",
    },
    {
      key: "6",
      userName: "John Doe",
      useremail: "johndoe@gmail.com",
      userpassword: "password123",
      userrole: "Admin",
    },
  ];

  return (
    <>
      <div class="user-list">
        <h2>User List</h2>
        <TableComponent data={data} columns={columns} />
      </div>
    </>
  );
};

export default UserList;
