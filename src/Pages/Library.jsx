import React, { useState, useEffect } from "react";

import LibraryCard from "../components/LibraryCard";
import Loader from "../components/Loader";

const Library = () => {
  const host = process.env.REACT_APP_apilib;
  const [library, setLibrary] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchdata() {
    setLoading(true);
    const response = await fetch(host, {
      method: "GET",
    });

    const json = await response.json();
    setLoading(false);
    setLibrary(json.data);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div
        className="library-main"
        style={{ width: "100vw", display: "flex", justifyContent: "center" }}
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="main-table">
              {library.map((item) => (
                <div className="book-list">
                  <LibraryCard
                    title={item.title}
                    author={item.author}
                    category={item.subject}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Library;
