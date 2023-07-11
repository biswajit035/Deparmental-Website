import React, { useEffect, useState } from "react";
import Pie from "../components/Pie";
import Loader from "../components/Loader";


const Placement = () => {
  const host = process.env.REACT_APP_host;
  const [placement, setPlacement] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([["Task", "Hours per Day"]]);


  useEffect(() => {
    async function fetchdata() {
      setLoading(true);
      const response = await fetch(`${host}/api/placement/year`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      setPlacement(json.response);
      json.response.map((item) => {
        item.records.map((itm) => {
          const temp = [itm.company, itm.count];
          setData((prev) => [...prev, temp]);
        });
      });
      setLoading(false);
    }

    fetchdata();
  }, []);

  return (
    <div className="placement-main">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="overview">
            <div className="heading">
              <b>Overview</b>
            </div>
            <p>
              HIT has been consistently setting records of campus placements
              amongst private institutions in India. Producing graduates and
              postgraduates who are well equipped to handle the working norms of
              the Industry and Commerce in the public and the private sectors
              has been the primary aim of the Institute. It makes significant
              efforts to ensure enhanced employability through rigorous
              professional trainings at reputed industries and corporate houses.
              A series of in-house grooming programs e. g. interactive seminars
              and workshops. personality development classes. in depth
              counselling by experts. mock interviews and tutorials conducted by
              some of our finest faculties to enhance our students' chances in a
              competitive job market.
            </p>
          </div>
          <div className="pie-chart">
            {placement.map((item) => (
              <>
                <Pie data={data} chartTitle={item.year} />
              </>
            ))}
          </div>
          <div className="companies">
            <img
              src="https://1000logos.net/wp-content/uploads/2020/05/Wipro-logo.jpg"
              alt=""
              width={100}
            />
            <img
              src="https://1000logos.net/wp-content/uploads/2021/04/Accenture-logo.png"
              alt=""
              width={100}
            />
            <img
              src="https://www.capgemini.com/wp-content/uploads/2022/05/Capgemini.gif"
              alt=""
              width={100}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.png"
              alt=""
              width={100}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png"
              alt=""
              width={100}
            />
            <img
              src="https://cdn-ukwest.onetrust.com/logos/8d84415b-1b52-4bc4-8d5f-ca9a8eccaf8a/f7db8968-fc22-4620-92ac-dc05c5d2aa15/02460a41-565e-4cac-80a7-449bc8f77a72/logo-infosys.png"
              alt=""
              width={100}
            />
            <img
              src="https://bl-i.thgim.com/public/news/vz9c2g/article65250306.ece/alternates/FREE_1200/cognizant.jpg"
              alt=""
              width={100}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/2560px-PricewaterhouseCoopers_Logo.svg.png"
              alt=""
              width={100}
            />
            <img
              src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-transparent-vector-3.png"
              alt=""
              width={100}
            />
            <img
              src="https://sjbit.edu.in/wp-content/uploads/2021/08/mindtree-logo.jpg"
              alt=""
              width={100}
            />
            <img
              src="https://download.logo.wine/logo/Hexaware_Technologies/Hexaware_Technologies-Logo.wine.png"
              alt=""
              width={100}
            />
            <img
              src="https://www.channelinsider.com/wp-content/uploads/2022/04/CI.TechMahindra.Profile-1024x1024.png"
              alt=""
              width={100}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Placement;
