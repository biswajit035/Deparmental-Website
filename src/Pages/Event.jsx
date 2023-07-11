import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardEvent from "../components/CardEvent";
import Loader from "../components/Loader";
import Image1 from "../Assests/event.jpg";

const Event = () => {
  const host = process.env.REACT_APP_host;

  const [event, setEvent] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchdata() {
    setLoading(true);
    const response = await fetch(`${host}/api/event/fetch`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    setEvent(json.response);
    setLoading(false);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="event-page">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="event-main">
            <div className="carousel">
              <div className="image">
                <img src={"https://www.acm.org/binaries/content/gallery/global/top-menu/acm_logo_tablet.svg"} alt="" className="image1" />
                <img src={Image1} alt="" className="image2"/>
              </div>
            </div>
          </div>

          <div className="title">
            <b> Overview</b>
          </div>
          <div className="event-content">
            ACM brings together computing educators, researchers, and
            professionals to inspire dialogue, share resources, and address the
            field's challenges. As the world’s largest computing society, ACM
            strengthens the profession's collective voice through strong
            leadership, promotion of the highest standards, and recognition of
            technical excellence. ACM supports the professional growth of its
            members by providing opportunities for life‐long learning, career
            development, and professional networking. Founded at the dawn of the
            computer age, ACM’s reach extends to every part of the globe, with
            more than half of its more than 100,000 members residing outside the
            U.S. Its growing membership has led to Councils in Europe, India,
            and China, fostering networking opportunities that strengthen ties
            within and across countries and technical communities. Their actions
            enhance ACM’s ability to raise awareness of computing’s important
            technical, educational, and social issues around the world.
          </div>

          <div className="event-card">
            <div className="title">
              <b>All Events</b>
            </div>
            <div className="event-body">
              {event.length
                ? event.map((item) => {
                    return (
                      <CardEvent
                        date={item.date}
                        title={item.title}
                        desc={item.desc}
                        image={item.image}
                      />
                    );
                  })
                : "No events"}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Event;
