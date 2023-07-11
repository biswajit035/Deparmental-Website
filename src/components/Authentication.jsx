import React from "react";
import { Navigate } from "react-router";
import secureLocalStorage from "react-secure-storage";

const Authentication = ({ children }) => {
  const local = secureLocalStorage.getItem("token");
  return local ? children : <Navigate to="/login" />;
};

export default Authentication;
