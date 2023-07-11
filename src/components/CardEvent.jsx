import React, { useState } from "react";
import { Link } from "react-router-dom";
import Readmore from "./Readmore";
import EventCaursel from "./EventCaursel";

const CardEvent = ({ date, title, desc, image }) => {
  const [newdate] = useState(date.slice(0, 10));
 

  return (
    <>
      <div className="card" style={{ height: "fit-content" }}>
        <EventCaursel eventimage={image}/>
        <div className="container">
          <b className="date">{newdate}</b>
          <p style={{ marginBottom: "0px", textDecoration: "none" }}>
            <Link to="/eventpage" className="title">
              <b>{title}</b>{" "}
            </Link>
          </p>
          {desc && <Readmore desc={desc}/>}
        </div>
      </div>
    </>
  );
};

export default CardEvent;
