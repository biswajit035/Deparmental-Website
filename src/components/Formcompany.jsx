import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { toast } from "react-toastify";
const Formyear = (props) => {
  let navigate = useNavigate();

  const host = process.env.REACT_APP_host;

  const year = window.location.pathname.split("/")[4];

  const [user, setUser] = useState({
    company: "",
    count: "",
  });
  const [formdata] = useState(new FormData());
  const [loading, setLoading] = useState(false);

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    formdata.append("company", user.company);
    formdata.append("count", user.count);

    const response = await fetch(`${host}/api/placement/add/company/${year}`, {
      method: "POST",
      body: formdata,
    });
    const json = await response.json();
    if(response.status === 200){
      toast.success(json.msg);
    }
    else{
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
                      <label>{props.fieldname1} *</label>
                      <input
                        type="text"
                        name="company"
                        value={user.company}
                        onChange={handleInputs}
                        placeholder={props.fieldname}
                        required
                      />
                    </div>
                    <div className="input-field">
                      <label>{props.fieldname2} *</label>
                      <input
                        type="number"
                        name="count"
                        value={user.count}
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
