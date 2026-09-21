import React, { useContext } from "react";
import { Navigate } from "react-router";
import { MyStore } from "../Context/StoreContext";

export const SecurityRouting = ({ children }) => {
  const { Loggedin, setLoggedin } = useContext(MyStore);

  if (!Loggedin) {
    return <Navigate to={"/login"} />;
  }

  return children;
};
