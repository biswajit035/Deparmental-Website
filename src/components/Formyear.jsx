import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { toast } from "react-toastify";

const Formyear = (props) => {
  let navigate = useNavigate();

  const host = process.env.REACT_APP_test;

  const [formdata] = useState(new FormData());
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    year: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    formdata.append("year", user.year);

    const response = await fetch(`${host}/api/placement/add/year`, {
      method: "POST",
      body: formdata,
    });
    const json = await response.json();
    if (response.status === 200) {
      toast.success(json.msg);
    } else {
      toast.error(json.msg);
    }
    navigate(-1);
    setLoading(false);
  };

  return (
    <div className="placement-form">
      <div className="title">{props.title}</div>

      <form onSubmit={handleSubmit}>
        {loading ? (
          <div
            style={{
              color: "green",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FadeLoader color="rgba(25, 87, 182, 1)" />
          </div>
        ) : (
          <div className="form-first">
            <div className="details">
              <div className="fields">
                <div className="s-form">
                  <div className="row">
                    <div className="input-field">
                      <label>{props.fieldname} *</label>
                      <input
                        type="number"
                        name="year"
                        value={user.year}
                        onChange={handleInputs}
                        placeholder={props.fieldname}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="F-Submit">
                    <button className="sub">Submit</button>
                    <button className="canl" onClick={() => navigate(-1)}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Formyear;
