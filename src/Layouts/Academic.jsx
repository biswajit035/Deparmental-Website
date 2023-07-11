import React from "react";
import Student from "./Student";

const Academic = (props) => {
  return (
    <div className="main">
      <div className="add-teacher">
        <h3 className="title">{props.title}</h3>
      </div>
      <Student
        title="All Syllabus"
        fieldname="year"
        cata="Add Syllabus"
        link="add-syllabus"
        head="syllabus"
      />
      <Student
        title="All Routine"
        fieldname="year"
        cata="Add Routine"
        link="add-routine"
        head="routine"
      />
    </div>
  );
};

export default Academic;
