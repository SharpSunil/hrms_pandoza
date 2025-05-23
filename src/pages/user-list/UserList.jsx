import React, { useContext, useEffect, useState } from "react";
import "./UserList.scss";
import { UserContext } from "../../../Context";
import TableComponent from "../../comp/table/TableComponent";
import {
  AiTwotoneDelete,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import axios from "axios";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const { user } = useContext(UserContext);

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const navigateUserlist = (id) => {
    navigate(`/user-registration?userId=${id}`);
  };

  const token = localStorage.getItem("token");

  const getUserById = async (id) => {
    try {
      const resposne = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}Admin/getUserById/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getUserData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}Admin/GetAllUser?Page=0&Size=5`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const filterateData = response.data.map((item, index) => ({
        key: index,
        id: item.data.uid,
        useremail: item.data?.email,
        userrole: item.data?.role,
      }));
      setData(filterateData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user || user.role === "ADMIN") {
      getUserData();
    }
  }, []);

  const columns = [
    {
      title: "User Email",
      dataIndex: "useremail",
      sorter: true,
      width: "auto",
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
          <Button
            className="edit-btn"
            onClick={() => navigateUserlist(record.id)}
            style={{
              padding: "5px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CiEdit />
          </Button>
          <Button
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
          </Button>
        </div>
      ),
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
