import React, { useState } from "react";
import { Outlet } from "react-router";
import Sidenav from "../Layouts/Sidenav";
import Header from "../Layouts/Header";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const handletoggle = () => {
    setShow(!show);
  };
  return (
    <div className="admin-pg">
      <Sidenav show={show} />
      <div className="main-part">
        <Header handletoggle={handletoggle} />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
