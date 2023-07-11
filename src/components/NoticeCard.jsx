import React, { useState } from "react";
import Image2 from "../Assests/new-blinking.gif";
import { Link } from "react-router-dom";

const NoticeCard = ({ date, pdfurl, batch }) => {
  const [newdate] = useState(date.slice(0, 10));
  return (
    <div>
      <p style={{ marginBottom: "0px" }}>
        <b>
          <img src={Image2} alt="" width={60} style={{ borderRadius: "50%" }} />
        </b>
        <b style={{ paddingLeft: "10px" }}>{newdate}</b>
      </p>
      <div className="content" style={{ fontSize: "14px" }}>
        {batch}
        <Link
          target="_blank"
          to={pdfurl}
          style={{ paddingLeft: "10px", color: "red", textDecoration: "none" }}
        >
          Click Here
        </Link>
      </div>
    </div>
  );
};

export default NoticeCard;
