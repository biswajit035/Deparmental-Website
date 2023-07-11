import React, { useEffect, useState } from "react";
import "../Style/css/main.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";

const Teacher = () => {
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

  const handleRemove = async (item) => {
    setLoading(true);
    const response = await fetch(`${host}/api/teacher/delete/${item._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json;
    setLoading(false);
    if (response.status == 200) {
      toast.success("Teacher has been deleted successfully!!");
    } else if (response.status == 400) {
      toast.warning("Teacher doesn't exists!!");
    } else {
      toast.error("Some error occured!!");
    }
    fetchdata();
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="main">
      {loading ? (
        <Loader />
      ) : (
        // teacher card
        <>
          {/* Top bar */}
          <div className="add-teacher">
            <h3 className="title">All Teachers</h3>

            {/* Add Taecher Button */}
            <Link to="add-teacher">
              <button className="add">
                <span className="btn-add">Add Teachers</span>
              </button>
            </Link>
          </div>
          <div className="teacher-list">
            <Table striped bordered hover>
              <thead>
                <tr className="titles">
                  <th className="tname-i">Image</th>
                  <th className="tname-n ">Name</th>
                  <th className="tname-g">Gender</th>
                  <th className="tname-d">Designation</th>
                  <th className="tname-e">Email</th>
                  <th className="tname-p">Ph-No</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {teacher.map((item) => (
                  <tr className="lists">
                    <td>
                      <div className="profile-img">
                        <img src={item.imageurl} alt="" width={90}/>
                      </div>
                    </td>
                    <td className="name ">{item.name}</td>
                    <td className="gen">{item.gender}</td>
                    <td className="deg">{item.designation}</td>
                    <td className="email">{item.email}</td>
                    <td className="ph">{item.mobile}</td>
                    <td>
                      <div
                        className="delete-btn"
                        onClick={() => handleRemove(item)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </>
      )}
    </div>
  );
};

export default Teacher;
