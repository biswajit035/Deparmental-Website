import React from "react";
import { useState, useEffect } from "react";
import NoticeCard from "../components/NoticeCard";
import Loader from "../components/Loader";
import Crausel from "../components/Crausel";
import EventC from "../components/EventC";

const MainHome = () => {
  const host = process.env.REACT_APP_host;
  const [event, setEvent] = useState("");
  const [notices, setNotices] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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

    async function fetchEvent() {
      setLoading(true);
      const response = await fetch(`${host}/api/notice/fetch`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setNotices(json.response);
      setLoading(false);
    }
    fetchdata();
    fetchEvent();
  }, []);
  return (
    <>
      <div className="main-home">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="left-main">
              <div
                className="up-main"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Crausel />
              </div>
              <div className="Down-main">
                <div className="event-head">All Event</div>
                <div className="event-cards">
                  <EventC />
                </div>
              </div>
            </div>

            <div className="right-main">
              <div className="notice-part">
                {notices.length
                  ? notices.map((item, idx) => {
                      if (idx < 15)
                        return (
                          <NoticeCard
                            date={item.date}
                            pdfurl={item.pdfurl}
                            batch={item.batch}
                            key={idx}
                          />
                        );
                    })
                  : "no notices"}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MainHome;
