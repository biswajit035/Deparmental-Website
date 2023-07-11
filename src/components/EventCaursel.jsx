import Carousel from "react-bootstrap/Carousel";
function EventCaursel({ eventimage}) {
  return (
    <Carousel>
      {eventimage.map((item, idx) => {
         return <Carousel.Item interval={1000} key={idx}>
          <img
            className="d-block w-100"
            src={item.imageurl}
            alt={`slide number: ${idx}`}
          />
        </Carousel.Item>;
      })}
    </Carousel>
  );
}

export default EventCaursel;
