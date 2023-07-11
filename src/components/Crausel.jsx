import Carousel from "react-bootstrap/Carousel";
import Image1 from "../Assests/_MG_3077.JPG";
import Image2 from "../Assests/_MG_3073.JPG";
import Image3 from "../Assests/event.jpg";

function Crausel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Image2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Image3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Crausel;
