import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import secureLocalStorage from "react-secure-storage";

const Otp = () => {

  const host = process.env.REACT_APP_host;

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [formdata, setFormdata] = useState(new FormData());
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    formdata.append("email", email);
    formdata.append("otp", otp);

    setLoading(true);
    const response = await fetch(`${host}/api/verifyOTP`, {
      method: "POST",
      body: JSON.stringify({
        email,
        otp,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setLoading(false);
    if (
      response.status == 401 ||
      response.status == 404 ||
      response.status == 400
    ) {
      toast.warning(json.msg);
    }
    if (response.status == 200) {
      toast.success(json.msg);
      secureLocalStorage.setItem("token", json.token);
      localStorage.setItem("username", json.username);
      navigate("/dash");
    }
  };

  return (
    <div className="otp-main">
      <div className="otp-body">
        <p>
          <b> OTP Verification </b>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="email">
            <label htmlFor="email" className="content">
              Email:
            </label>
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
          <div className="otp">
            <label htmlFor="otp" className="content">
              OTP:
            </label>
            <input
              type="number"
              id="otp"
              name="otp"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>

          <button className="otp-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
