import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { toast } from "react-toastify";

const Form2 = (props) => {
  let navigate = useNavigate();

  const [formdata] = useState(new FormData());
  const [loading, setLoading] = useState(false);

  const host = process.env.REACT_APP_host;

  const [user, setUser] = useState("");
  const [userfile, setUserfile] = useState({
    file: "",
  });
  const [errormessage, seterrormessage] = useState("");

  const handleInputs = (e) => {
    setUser(e.target.value);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    formdata.append("batch", user);
    formdata.append("file", userfile);
    setLoading(true);
    const response = await fetch(`${host}/api/${props.head}/add`, {
      method: "POST",
      body: formdata,
    });
    const json = await response.json();
    navigate(-1);
    if(response.status === 200){
      toast.success(json.msg);
    }
    else{
      toast.error(json.msg);
    }
    setLoading(false);
  };

  return (
    <div className="form-main">
      <div className="title">{props.title}</div>

      <form onSubmit={handleSubmit}>
        {loading ? (
          <div
            className="loading"
            style={{
              color: "green",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FadeLoader
              color="rgba(25, 87, 182, 1)"
              height={14}
              radius={1}
              width={5}
            />
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
                        type="text"
                        name="batch"
                        value={user}
                        onChange={handleInputs}
                        placeholder={props.fieldname}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field">
                      <label>File upload *</label>
                      <input
                        type="file"
                        name="file"
                        value={userfile.file}
                        accept="application/pdf"
                        onChange={handlefile}
                        className="upl"
                        required
                      />
                      {errormessage && (
                        <p style={{ color: "red" }}>{errormessage}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="F-Submit">
                    <button className="sub"> Submit</button>
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

export default Form2;
