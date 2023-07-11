import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Forgetp = () => {

  const host = process.env.REACT_APP_host;

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formdata, setFormdata] = useState(new FormData());
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    formdata.append("email", email);
    formdata.append("password", password);

    setLoading(true);
    const response = await fetch(`${host}/api/resetPassword`, {
      method: "PUT",
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
    if (
      response.status === 401 ||
      response.status === 404 ||
      response.status === 400
    ) {
      toast.warning(json.msg);
    }
    if (response.status === 201) {
      const mail = await fetch(`${host}/api/registerMail/ `, {
        method: "POST",
        body: JSON.stringify({
          userEmail:email,
          OTP: json.otp
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const mailjson = await mail.json();
      if(mail.status === 201){
        navigate('/otp');
        toast.success(mailjson.msg)
      }
    }
  };

  return (
    <div className="otp-main">
      <div className="otp-body">
        <p>
          <b> Forget Password </b>
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
            <label htmlFor="password" className="content">
              New Password:
            </label>
            <input
              type="password"
              id="otp"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

export default Forgetp;

