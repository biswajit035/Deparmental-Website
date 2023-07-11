import React, { useEffect, useState } from "react";
import NoticeCard from "../components/NoticeCard";
import Loader from "../components/Loader";

const Notice = () => {
  const [notices, setNotices] = useState("");
  const [loading, setLoading] = useState(false);

  const host = process.env.REACT_APP_host;

  async function fetchdata() {
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

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="notice-main">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="notice-body">
            {notices.length
              ? notices.map((item) => {
                  return (
                    <NoticeCard
                      date={item.date}
                      pdfurl={item.pdfurl}
                      batch={item.batch}
                    />
                  );
                })
              : "no notices"}
          </div>
        </>
      )}
    </div>
  );
};

export default Notice;
