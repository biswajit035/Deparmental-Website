import React from "react";

const FacultyCard = ({name,designation,email,imageurl}) => {
  console.log(imageurl);
  return (
    <div className="fal-card">
      <div
        className="card-img"
        style={{
          backgroundImage: `url(${imageurl})`,
        }}
      >
      </div>

      <div className="container">
        <b className="fal-name">{name}</b>
        <p className="fal-email">{designation}</p>
        <p className="fal-desg">{email}</p>
      </div>
    </div>
  );
};

export default FacultyCard;
