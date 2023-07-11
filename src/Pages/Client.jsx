import React, { useState } from "react";
import { Outlet } from "react-router";
import Headtop from "../Layouts/Headtop";
import Headernav from "../Layouts/Headernav";
import Footer from "../Layouts/Footer";

const Client = () => {
  const [show, setShow] = useState(false);
  const handletoggle = () => {
    setShow(!show);
  };
  return (
    <div>
      <Headtop handletoggle={handletoggle} />
      <Headernav show={show} handletoggle={handletoggle}/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Client;
