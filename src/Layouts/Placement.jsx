import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Loader from "../components/Loader";


const Placement = (props) => {
  const host = process.env.REACT_APP_host;

  const [placementyear, setPlacementyear] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchdata() {
    setLoading(true);
    const response = await fetch(`${host}/api/placement/year`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setPlacementyear(json.response);
    setLoading(false);
  }

  const removeCompany = async (props) => {
    const { item, data } = props;
    const response = await fetch(
      `${host}/api/placement/delete/company/${item.year}/${data._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    if (response.status == 200) {
      toast.success(json.msg);
    } else if (response.status == 400) {
      toast.warning("Teacher doesn't exists!!");
    } else {
      toast.error("Some error occured!!");
    }
    fetchdata();
  };
  const removeYear = async (item) => {
    const response = await fetch(`${host}/api/placement/delete/${item.year}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response.status == 200) {
      toast.success(json.msg);
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
    <div>
      <div className="main-b">
        <div className="add-placement">
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
          <>
            {placementyear.map((item) => (
              <div className="placement-list">
                <div className="titles">
                  <div className="tname-b">{item.year}</div>
                  <button
                    className="delete-btn1"
                    onClick={() => removeYear(item)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <Link to={`${props.linkcomp}/${item.year}`}>
                    <button className="add-company">
                      <span className="btn-add2">{props.company}</span>
                    </button>
                  </Link>
                </div>

                <hr />
                <ul>
                  {item.records.map((data) => (
                    <div className="lists">
                      <div className="year">
                        <div className="cname">{data.company}</div>
                        <div className="counts">{data.count}</div>
                      </div>
                      <button
                        className="delete-btn"
                        onClick={() => removeCompany({ item, data })}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Placement;
