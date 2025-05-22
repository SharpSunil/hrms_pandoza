import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const getUserData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}user/getUserById/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Content-Type:", response.headers["content-type"]);
      console.log("Raw Data:", response.data);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, getUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
