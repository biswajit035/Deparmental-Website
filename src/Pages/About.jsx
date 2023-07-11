import React from "react";
import Image from "../Assests/_MG_3065.JPG";
import Image2 from "../Assests/pic1.jpg";

const About = () => {
  return (
    <div>
      <div
        className="about-college"
        style={{
          display: "flex",
          maxWidth: "100vw",
          textAlign: "justify",
        }}
      >
        <div
          className="college-img"
          style={{ padding: "20px", marginBottom: "20px" }}
        >
          <img
            src={Image2}
            alt=""
            style={{ width: "30vw", borderRadius: "20px" }}
          />
        </div>
        <div
          className="college-content"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            className="collge-title"
            style={{
              fontSize: "25px",
              fontWeight: "700",
              textTransform: "uppercase",
              marginBottom: "10px",
              color: "rgb(62, 60, 60)",
            }}
          >
            Haldia Institute Of Technology
          </div>
          <p style={{ padding: "0px 15px" }}>
            It is the first private and accredited academic institution catering
            technical education in West Bengal. The Institute is situated at
            Haldia – an industrial hub in Eastern India. Since inception, Haldia
            Institute of Technology is dedicated to the objectives of creating
            highly trained professional manpower in various disciplines of
            Engineering, Technology and Social Science. The Institute is also
            dedicated to the contribution of higher scientific research in
            Technology as well as in Applied Science and Social Science.
          </p>
          <p>
            <b style={{ fontSize: "18px", color: "rgb(91, 88, 88)" }}>
              Mission
            </b>
          </p>
          <p style={{ padding: "0px 15px" }}>
            To achieve Centre of Excellence in the field of Science, Technology
            and Management Education for creating dynamic human resources of
            global standards with capabilities of accepting new challenges.
          </p>
        </div>
      </div>
      <div
        className="about-dept"
        style={{
          width: "100%",
          paddingBottom: "20px",
          display: "flex",
          gap: "1rem",
          textAlign: "justify",
        }}
      >
        <div
          className="dept-content"
          style={{
            paddingLeft: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "70vw",
          }}
        >
          <div
            className="collge-title"
            style={{
              fontSize: "25px",
              fontWeight: "700",
              textTransform: "uppercase",
              marginBottom: "10px",
              color: "rgb(62, 60, 60)",
            }}
          >
            Department Of Information Technology
          </div>
          <p style={{ padding: "0px 15px" }}>
            The department of Information Technology has been offering
            undergraduate course in IT since 2000. At present the current intake
            of the department is 180 with the addition of 5% TFW and 20% Lateral
            entrant. Within a very short span of time, the department has
            created an excellent learning environment with dedicated young
            faculty members, technical staff, excellent laboratories and
            innovative academic processes. In order to perform the complex
            functions the modern Information Technology would use high
            configured computers along with the various software such as Linux,
            Database management systems, Adobe, Visual Studio, Sound forge,
            Anaconda etc. The department provides computational facilities for
            system level programmers, application development and research. For
            application level developers, complete enterprise level suites such
            as Machine Learning, Data Science, Multimedia, Web Technology etc.
            The department provides good training and placement opportunities to
            all its students. The Department of IT got the NBA accreditation on
            the year of 2020 for three years of span. The Department of
            Information Technology is imparting technical Education of high
            quality to the aspiring youth of the country. The department with
            the passage of its evolution and growth has succeeded in creating
            its place of excellence within the Institute as well as among its
            counterparts in the country. It has been attracting bright students
            from all parts of the country for quality education in Information
            Technology at Under Graduate level. During the course of time it has
            offered opportunities to its inmates in the area of quality
            education. The mission behind the Department of Information
            Technology is to impart high quality education and spawn eminent
            graduates to carry out leading-edge research in the discipline of
            Information Technology. The department has qualified and experienced
            faculty in the areas of Computer Architecture, Database Systems,
            Image Processing, Artificial Intelligence, Data Mining, machine
            Learning, Wireless Networks, Computer Networks, and Software
            Engineering, etc.
          </p>
        </div>
        <div
          className="dept-img"
          style={{
            width: "20vw",
            marginLeft: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={Image}
            alt=""
            style={{ borderRadius: "20px", width: "18vw" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
