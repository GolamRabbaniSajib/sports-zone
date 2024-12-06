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
    <div className="w-11/12 mx-auto py-10">
      <div className="py-9">
        <h1 className="text-3xl font-bold text-center"><span className="text-blue-400">Top</span> Instructor</h1>
      </div>
      <Slider {...settings}>
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://i.ibb.co.com/DrP0C5n/premium-photo-1689977968861-9c91dbb16049.jpg"
              className="rounded-lg shadow-2xl lg:mr-32 md:max-w-md w-auto"
            />
            <div>
              <h1 className="text-5xl font-bold">Robin jon</h1>
              <p className="py-6">
                International award wining Professor & best selling Auth.
              </p>
            </div>
          </div>
        </div>
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://i.ibb.co.com/MprtRTJ/photo-1522529599102-193c0d76b5b6.jpg"
              className="lg:mr-32 md:max-w-md w-auto rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Imtiaz Ahmed</h1>
              <p className="py-6">
              Award-winning Udemy instructor who is highly experienced in big data technologies and enterprise software architectures.
              </p>
            </div>
          </div>
        </div>
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://i.ibb.co.com/nQC6JFQ/premium-photo-1689977807477-a579eda91fa2.jpg"
              className="lg:mr-32 md:max-w-md w-auto rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Todd Birzer</h1>
              <p className="py-6">
              Principal consultant at Kevolve Product Management, author of Becoming a More Strategic Product Manager, and has an MBA from Wharton at the University of Pennsylvania.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ActiveSlider;
