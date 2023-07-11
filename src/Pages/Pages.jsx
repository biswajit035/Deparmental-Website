import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Academics from "./Academics";
import Library from "./Library";
import Event from "./Event";
import Placement from "./Placement";
import Notice from "./Notice";
import Faculty from "./Faculty";
import Login from "./Login";
import SignUp from "./SignUp";
import Otp from "./Otp";
import Client from "./Client";
import Dashboard from "./Dashboard";

// ------------------------------------
// dashboard
import Teacher from "../Layouts/Teacher";
import Student from "../Layouts/Student";
import Academic from "../Layouts/Academic";
import DPlacement from "../Layouts/Placement";
import Form from "../components/Form";
import Form2 from "../components/Form2";
import Formyear from "../components/Formyear";
import FormCompany from "../components/Formcompany";
import Alumini from "../Layouts/Alumini";
import Society from "../Layouts/Society";
import Form3 from "../components/Form3";
import DNotice from "../Layouts/Notice";
import Authentication from "../components/Authentication";
import Forgetp from "./Forgetp";

const Pages = () => {
  return (
    <Routes>
      {/* client Side */}
      <Route path="/" element={<Client />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="faculty" element={<Faculty />} />
        <Route path="academics" element={<Academics />} />
        <Route path="library" element={<Library />} />
        <Route path="placements" element={<Placement />} />
        <Route path="event" element={<Event />} />
        <Route path="notice" element={<Notice />} />
        <Route path="login" element={<Login />} />
        <Route path="forgetpassword" element={<Forgetp />} />
        <Route path="signup">
          <Route index element={<SignUp />} />
        </Route>
          <Route path="otp" element={<Otp />} />
      </Route>

      {/* Dashboard side */}
      <Route
        path="dash"
        element={
          <Authentication>
            {" "}
            <Dashboard />{" "}
          </Authentication>
        }
      >
        <Route index element={<Teacher />} />
        <Route path="teacher" element={<Teacher />} />
        <Route path="add-teacher" element={<Form />} />
        <Route path="teacher/add-teacher" element={<Form />} />
        <Route
          path="student"
          element={
            <Student
              title="All Students"
              link="add-student"
              fieldname="Batch"
              cata="Add Students"
              head="student"
            />
          }
        />
        <Route
          path="student/add-student"
          element={
            <Form2 title="Add students" fieldname="Batch" head="student" />
          }
        />
        <Route
          path="academics"
          element={<Academic title="All Academic Details" />}
        />
        <Route
          path="academics/add-syllabus"
          element={
            <Form2 title="Add syllabus" fieldname="Batch" head="syllabus" />
          }
        ></Route>
        <Route
          path="academics/add-routine"
          element={
            <Form2 title="Add routine" fieldname="Batch" head="routine" />
          }
        />
        <Route
          path="placements"
          element={
            <DPlacement
              title="Placements"
              link="add-placements-year"
              cata="Add Year"
              fieldname="Year"
              linkcomp="add-company"
              company="Add Company"
            />
          }
        />
        <Route
          path="placements/add-placements-year"
          element={<Formyear title="Add Year" fieldname="Year" />}
        />
        <Route
          path="placements/add-company/*"
          element={
            <FormCompany
              title="Add company"
              fieldname1="Company"
              fieldname2="No Of Students"
            />
          }
        />
        <Route path="alumni" element={<Alumini />} />
        <Route
          path="alumni/add-alumni"
          element={<Form2 title="Add alumni" fieldname="Batch" head="alumni" />}
        />
        <Route
          path="society"
          element={
            <Society title="All Events" link="add-events" cata="Add Events" />
          }
        />
        <Route
          path="society/add-events"
          element={
            <Form3 title="Add Notice" fieldname1="Title" head="notice" />
          }
        />
        <Route path="notice" element={<DNotice />} />
        <Route
          path="notice/add-notice"
          element={
            <Form2 title="Add Notice" fieldname="Description" head="notice" />
          }
        />
      </Route>
    </Routes>
  );
};

export default Pages;
