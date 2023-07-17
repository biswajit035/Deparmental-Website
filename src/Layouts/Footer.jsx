import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer-overlay main-body">
        <div className="container">
          <div
            className="row"
            style={{
              color: "white",
              display: "flex",
              padding: "10px 10px",
              justifyContent: "flex-end",
            }}
          >
            <div className="col-md-6 col-lg-6 col-12 p3 footer-text">
              <h3>
                <span
                  className="avi-text1"
                  style={{ color: "var(--col)", fontSize: "2rem" }}
                >
                  <b> Haldia Institute Of Technology</b>
                </span>
              </h3>
              <p className="avi-fo-Text1">
                <b> since 1996</b>
              </p>
              <p className="address" style={{ fontSize: "15px" }}>
                ICARE Complex, Hatiberia Haldia, Dist-Purba Medinipore, WB,
                Pin-721657 (+913224)252900/255166
              </p>
            </div>
            <div className="col-md-3 col-lg-3 col-12 p3"></div>
            <div
              className="col-md-3 col-lg-3 col-12"
              style={{ alignItems: "center", paddingTop: "10px" }}
            >
              <h5>
                <span
                  className="avi-fo-follow"
                  style={{ color: "var(--col)", fontSize: "1.5rem" }}
                >
                  <b> Follow Us</b>
                </span>
              </h5>
              <div
                className="icons"
                style={{
                  display: "flex",
                  fontSize: "2rem",
                  gap: "1rem",
                  cursor: "pointer",
                }}
              >
                <div className="item">
                  <Link
                    target="_blank"
                    to="https://www.facebook.com/profile.php?id=100076318810987"
                    className="item-body"
                  >
                    <BsFacebook />
                  </Link>
                </div>
                <div className="item">
                  <Link
                    target="_blank"
                    to="https://www.instagram.com/hitofficial1/"
                    className="item-body"
                  >
                    <AiFillInstagram />
                  </Link>
                </div>
                <div className="item">
                  <Link
                    target="_blank"
                    to="https://www.youtube.com/channel/UChV167CyTOc0ovvu5AO2X3g"
                    className="item-body"
                  >
                    <AiFillYoutube />
                  </Link>
                </div>
              </div>
              <a href="/">
                <i className="fa-brands fa-instagram fa-2x"></i>&emsp;&emsp;
              </a>
              <a href="/">
                <i className="fa-brands fa-twitter fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright">
          <center>
            <p>
              Designed by <strong>Biswajit Debnath</strong>
              <Link
                to="https://www.linkedin.com/in/biswajit035/"
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <b>
                  {" "}
                  <BsLinkedin />
                </b>
              </Link>
              <Link
                to="https://github.com/biswajit035"
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <b>
                  {" "}
                  <BsGithub />
                </b>
              </Link>
            </p>
          </center>
        </div>
      </div>
    </>
  );
};

export default Footer;
