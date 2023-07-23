import React, { useEffect, useState } from "react";
import FacultyCard from "../components/FacultyCard";
import Loader from "../components/Loader";

const Faculty = () => {
  const host = process.env.REACT_APP_host;

  const [teacher, setTeacher] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchdata() {
    setLoading(true);
    const response = await fetch(`${host}/api/teacher/fetch`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    setLoading(false);
    setTeacher(json.tres);
  }

  useEffect(() => {
    fetchdata();
    console.log(host);
  }, []);

  return (
    <div className="faculty-main">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="heading">
            <b> Teachers</b>
          </div>
          <div className="fal-body">
            <div className="fal-items">
              {teacher.map((item) => (
                <FacultyCard
                  name={item.name}
                  designation={item.designation}
                  email={item.email}
                  imageurl={item.imageurl}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Faculty;
