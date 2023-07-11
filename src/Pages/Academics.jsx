import React, { useState, useEffect } from "react";
import AcademicCard from "../components/AcademicCard";
import Loader from "../components/Loader";


const Academics = () => {
  const host = process.env.REACT_APP_host;

  const [student, setStudent] = useState([]);
  const [syllabus, setSyllabus] = useState([]);
  const [routine, setRoutine] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchdata() {
    // Students API
    setLoading(true);
    const response = await fetch(`${host}/api/student/fetch`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setLoading(false);
    setStudent(json.response);

    // syllabus API
    setLoading(true);
    const syllabus = await fetch(`${host}/api/syllabus/fetch`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const syllabusJson = await syllabus.json();
    setLoading(false);
    setSyllabus(syllabusJson.response);

    // Routine API
    setLoading(true);
    const routine = await fetch(`${host}/api/routine/fetch`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const routineJson = await routine.json();
    setLoading(false);
    setRoutine(routineJson.response);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="academics-main">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="academic-body">
            <div className="students">
              <div className="heading">
                <b>Students</b>
              </div>
              <div className="students-body">
                {student.map((item) => (
                  <AcademicCard batch={item.batch} pdfurl={item.pdfurl} />
                ))}
              </div>
            </div>
            <div className="students">
              <div className="heading">
                <b>Syllabus</b>
              </div>
              <div className="students-body">
                {syllabus.map((item) => (
                  <AcademicCard batch={item.batch} pdfurl={item.pdfurl} />
                ))}
              </div>
            </div>
            <div className="students">
              <div className="heading">
                <b>Routines</b>
              </div>
              <div className="students-body">
                {routine.map((item) => (
                  <AcademicCard batch={item.batch} pdfurl={item.pdfurl} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Academics;
