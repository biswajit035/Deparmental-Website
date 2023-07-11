//Teeacher's Form 

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { toast } from "react-toastify";

const Form = () => {
  const host = process.env.REACT_APP_host;
  let navigate = useNavigate();

  const [errormessage, seterrormessage] = useState("");
  const [formdata] = useState(new FormData());
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    fname: "",
    gen: "",
    mno: "",
    desg: "",
    email: "",
    edu: "",
  });
  const [userfile, setUserfile] = useState({
    file: "",
  });

  const handleInputs = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handlefile = (e) => {
    const file = e.target.files[0];
    const filesize = file.size / 1024 / 1024;

    if (filesize > 5) {
      seterrormessage("Selected file is too large! Select less than 2mb");
    } else {
      setUserfile(file);
      seterrormessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    formdata.append("fname", user.fname);
    formdata.append("gen", user.gen);
    formdata.append("mno", user.mno);
    formdata.append("desg", user.desg);
    formdata.append("email", user.email);
    formdata.append("edu", user.edu);
    formdata.append("file", userfile);

    const response = await fetch(`${host}/api/teacher/add`, {
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
    <div className="form-main">
      <div className="title">Add Teachers</div>

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
                <div className="t-form">
                  <div className="row">
                    <div className="input-field">
                      <label>Name *</label>
                      <input
                        type="text"
                        name="fname"
                        value={user.fname}
                        onChange={handleInputs}
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="input-field">
                      <label>Gender *</label>
                      <select
                        placeholder="Gender"
                        name="gen"
                        value={user.gen}
                        onChange={handleInputs}
                        id="gender"
                        className="gender"
                        required
                      >
                        <option selected>Select Gender..</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field">
                      <label>Mobile Number *</label>
                      <input
                        type="number"
                        name="mno"
                        value={user.mno}
                        onChange={handleInputs}
                        placeholder="Mobile Number"
                        required
                      />
                    </div>
                    <div className="input-field">
                      <label>Designation *</label>
                      <input
                        type="text"
                        name="desg"
                        value={user.desg}
                        onChange={handleInputs}
                        placeholder="Designation"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field">
                      <label>E-Mail *</label>
                      <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleInputs}
                        placeholder="E-Mail"
                        required
                      />
                    </div>
                    <div className="input-field">
                      <label>Education *</label>
                      <input
                        type="text"
                        name="edu"
                        value={user.edu}
                        className="edu"
                        onChange={handleInputs}
                        placeholder="Education"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field">
                      <label>Image upload *</label>
                      <input
                        type="file"
                        name="file"
                        value={userfile.file}
                        accept="image/jpeg"
                        onChange={handlefile}
                        className="upl"
                        required
                      />
                      {/* Error message File Size  */}
                      {errormessage && (
                        <p style={{ color: "red" }}>{errormessage}</p>
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="F-Submit">
                      <button type="submit" className="sub">
                        Submit
                      </button>
                      <button className="canl" onClick={() => navigate(-1)}>
                        Cancel
                      </button>
                    </div>
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

export default Form;
