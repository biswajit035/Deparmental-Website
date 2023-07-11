import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

const Student = (props) => {
  const host = process.env.REACT_APP_host;

  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchdata() {
    setLoading(true);
    const response = await fetch(`${host}/api/${props.head}/fetch`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setStudent(json.response);
    setLoading(false);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  const handleRemove = async (item) => {
    const response = await fetch(
      `${host}/api/${props.head}/delete/${item._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    if(response.status == 200){
        toast.success(json.msg)
      }
      else if(response.status == 400){
        toast.warning(json.msg)
      }
      else{
        toast.error(json.msg)
      }
    fetchdata();
  };

  return (
    <div>
      <div className="main">
        <div className="add-teacher">
          <h3 className="title">{props.title}</h3>
          <Link to={props.link}>
            <button className="add">
              <span className="btn-add">{props.cata}</span>
            </button>
          </Link>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="student-list">
            <div className="titles">
              <div className="tname-b">{props.fieldname}</div>
            </div>
            <hr />
            <ul>
              {student.map((item) => (
                <div className="lists" key={item._id}>
                  <div className="year">
                    <span>{item.batch}</span>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => handleRemove(item)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button className="delete-btn">
                    <a href={item.pdfurl} target="_blank">
                      <FontAwesomeIcon icon={faEye} />
                    </a>
                  </button>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Student;
