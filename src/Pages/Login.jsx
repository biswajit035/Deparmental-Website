import React, { useState } from "react";
import Image from "../Assests/login.jpg";
import Image1 from "../Assests/CollegeLogo.png";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import { useNavigate } from "react-router";
import secureLocalStorage from "react-secure-storage";
import { Link } from "react-router-dom";
const Login = () => {
  const host = process.env.REACT_APP_host;

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [formdata, setFormdata] = useState(new FormData());

  const handleSubmit = async (e) => {
    e.preventDefault();
    formdata.append("email", email);
    formdata.append("password", password);
    setLoading(true);

    const response = await fetch(`${host}/api/login `, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setLoading(false);
    if (response.status === 404 || response.status == 400) {
      toast.warning(json.msg);
    }
    if (response.status === 200) {
      toast.success(json.msg);
      secureLocalStorage.setItem("token", json.token);
      localStorage.setItem("username", json.username);
      navigate("/dash");
    }
  };

  return (
    <div className="login-main">
      <div className="left">
        <div className="login-img">
          <img src={Image} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="login-body">
          <div className="logo">
            <img src={Image1} alt="" />
          </div>
          <div className="login-details">
            <div className="form-body">
              <form action="" onSubmit={handleSubmit}>
                <legend>Username</legend>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Username"
                />
                <legend>Password</legend>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <button className="login-btn">
                  {loading ? <PulseLoader color="white" size={17} /> : "Login"}
                </button>
              </form>

              <Link to="/forgetpassword" className="forget-pass">
                Forget Password ?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
