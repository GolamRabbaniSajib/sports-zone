import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import adidasImg from "../assets/adidas.png";
import nikeImg from "../assets/nike.png";
import pumaImg from "../assets/puma.png";
const ActiveSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-11/12 mx-auto">
      <Slider {...settings}>
        <div>
          <img className="h-60 w-full" src={nikeImg} alt="Nike" />
        </div>
        <div>
          <img src={adidasImg} alt="Adidas" />
        </div>
        <div>
          <img src={pumaImg} alt="Puma" />
        </div>
      </Slider>
    </div>
  );
};

export default ActiveSlider;
