import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function EventC() {
  const host = process.env.REACT_APP_host;

  const [mainevent, setMainevent] = useState([]);
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
    setMainevent(json.response);
    setLoading(false);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <Carousel>
        {mainevent.map((item) => {
          return (
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={item.image[0].imageurl}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{item.date}</h3>
                <p>{item.title}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default EventC;
