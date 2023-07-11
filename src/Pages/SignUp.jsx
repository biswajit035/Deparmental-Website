import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image2 from "../Assests/signup.jpg";
import Image1 from "../Assests/CollegeLogo.png";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formdata, setFormdata] = useState(new FormData());

  const host = process.env.REACT_APP_host;

  const handleSubmit = async (e) => {
    e.preventDefault();
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("name", name);
    formdata.append("confirmpass", confirmPassword);

    if (password !== confirmPassword) {
      toast.error("The password and confirmation password do not match.");
    }

    setLoading(true);
    const response = await fetch(`${host}/api/createPassword `, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        name,
        confirmPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setLoading(false);
    if (response.status === 201) {
      const mail = await fetch(`${host}/api/registerMail/ `, {
        method: "POST",
        body: JSON.stringify({
          userEmail: email,
          OTP: json.otp,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const mailjson = await mail.json();
      if (mail.status === 201) {
        navigate("/otp", { state: { email: "avik@GiMailShirt.com" } });
        toast.success(mailjson.msg);
      }
    } else if (response.status === 404) {
      toast.warning(json.msg);
    } else {
      toast.error("Some error occured!!");
    }
  };

  return (
    <div>
      <div className="login-main">
        <div className="left">
          <div className="login-img">
            <img src={Image2} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="login-body">
            <div className="logo">
              <img src={Image1} alt="" />
            </div>
            <div className="login-details">
              {/* Form Body */}
              <div className="form-body">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="Name">Name:</label>
                    <input
                      type="text"
                      id="Name"
                      placeholder="Name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmpass"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button className="login-btn" type="submit">
                    {loading ? (
                      <PulseLoader color="white" size={17} />
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                </form>
              </div>

              {/* Form Body end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
