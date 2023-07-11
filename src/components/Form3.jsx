import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { toast } from "react-toastify";

const Form3 = (props) => {
  let navigate = useNavigate();

  const host = process.env.REACT_APP_host;

  const [formdata] = useState(new FormData());
  const [errormessage, seterrormessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    title: "",
    desc: "",
  });

  const [userfile, setUserfile] = useState([]);

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handlefile = (e) => {

    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      const filesize = files[i].size / 1024 / 1024;
      if (filesize > 20) {
        seterrormessage(`file is too large! Select less than 20mb`);
      } else {
        setUserfile(prev => [...prev, files[i]]);
        seterrormessage("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    formdata.append("title", user.title);
    formdata.append("desc", user.desc);
    for (let i = 0; i < userfile.length; i++) {
      formdata.append("file", userfile[i]);
    }

    const response = await fetch(`${host}/api/event/add`, {
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
    <div className="soci-main-part">
      <div className="title">Add events</div>
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
                        name="title"
                        value={user.title}
                        onChange={handleInputs}
                        placeholder={props.fieldname}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field">
                      <label>Description *</label>
                      <textarea
                        name="desc"
                        id="desc"
                        cols="30"
                        rows="10"
                        value={user.desc}
                        onChange={handleInputs}
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field">
                      <label>File upload *</label>
                      <input
                        type="file"
                        multiple
                        accept="image/jpeg"
                        value={userfile.file}
                        name="upfile"
                        onChange={handlefile}
                        className="upl"
                        required
                      />
                      {/* Error message file size */}
                      {errormessage && (
                        <p style={{ color: "red" }}>{errormessage}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="F-Submit">
                    <button className="sub">Submit</button>
                    <button className="canl">Cancel</button>
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

export default Form3;
