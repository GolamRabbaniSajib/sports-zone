import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Roll, Zoom } from "react-awesome-reveal";
const ActiveSlider = () => {
  const persons = [
    {
      name: "Robin jon",
      photo:
        "https://i.ibb.co.com/DrP0C5n/premium-photo-1689977968861-9c91dbb16049.jpg",
      details: "International award wining Professor & best selling Auth.",
    },
    {
      name: "Imtiaz Ahmed",
      photo:
        "https://i.ibb.co.com/MprtRTJ/photo-1522529599102-193c0d76b5b6.jpg",
      details:
        "Award-winning Udemy instructor who is highly experienced in big data technologies and enterprise software architectures.",
    },
    {
      name: "Todd Birzer",
      photo:
        "https://i.ibb.co.com/nQC6JFQ/premium-photo-1689977807477-a579eda91fa2.jpg",
      details:
        "Principal consultant at Kevolve Product Management, author of Becoming a More Strategic Product Manager, and has an MBA from Wharton at the University of Pennsylvania.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="py-10">
      <div className="py-9">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-blue-400">Top</span> Seller
        </h1>
      </div>
      <Slider {...settings}>
        {persons.map((person, idx) => (
          <div key={idx} className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <Roll>
                <img
                  src={person.photo}
                  className="rounded-lg shadow-2xl lg:mr-32 md:max-w-md w-auto"
                />
              </Roll>
              <Zoom>
                <div>
                  <h1 className="text-5xl font-bold">{person.name}</h1>
                  <p className="py-6">{person.details}</p>
                </div>
              </Zoom>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ActiveSlider;
