import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const ContextProvider = ({ children }) => {
const [user, setUser] = useState();
const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);
  const role = localStorage.getItem("role");

  const getUserData = async (id, token) => {
    try {
      let response;
      if (role === "EMPLOYEE") {
        response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}Employee/getUserById/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else if (role === "ADMIN") {
        response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}Admin/getUserById/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }



     setUser(response.data.data);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };



useEffect(() => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const fetchData = async () => {
    if (id && token) {
      await getUserData(id, token);
    }
    setLoading(false); // done loading
  };

  fetchData();
}, []);

  return (
    <UserContext.Provider value={{ user,loading, getUserData,active,setActive }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
