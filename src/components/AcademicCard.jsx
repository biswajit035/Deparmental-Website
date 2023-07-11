import React from "react";
import { HiUserGroup } from "react-icons/hi";

const AcademicCard = ({ batch, pdfurl }) => {
  return (
    <>
      <div className="Aca-card-main">
        <div className="card-icon" style={{ fontSize: "4rem" }}>
          <HiUserGroup />
        </div>
        <div className="title">
          <p>
            <b>{batch}</b>
          </p>
        </div>
        <div className="card-veiw">
          <button className="preview">
            <a href={pdfurl} target="_blank">
              Preview
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default AcademicCard;
