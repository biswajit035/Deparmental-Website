import React from "react";
import Map from "../Layouts/Map";
import MainHome from "../Layouts/MainHome";

const Home = () => {
  return (
    <div>
      <div className="home-main">
        <MainHome />
        <Map />
      </div>
    </div>
  );
};

export default Home;
