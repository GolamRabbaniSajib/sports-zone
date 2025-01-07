import { Helmet } from "react-helmet-async";
import logoImg from "../assets/Red and yellow Sports Store Logo.png";
const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>Sport || About Us</title>
      </Helmet>
      <div className=" min-h-screen pt-36 pb-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center  mb-6">About Us</h1>
          <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <img
                src={logoImg}
                alt="Sports Zone"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="w-full md:w-2/3 ">
              <p className="text-lg mb-4">
                Welcome to{" "}
                <span className="font-semibold text-blue-600">Sports Zone</span>{" "}
                – your one-stop shop for all things sports! Whether you're
                looking for the latest football gear, tennis rackets, or running
                shoes, we've got you covered. Our mission is to provide athletes
                of all levels with the best equipment at affordable prices.
              </p>
              <p className="text-lg mb-4">
                At Sports Zone, we are passionate about sports and dedicated to
                helping you perform at your best. Our products are carefully
                curated, ensuring that each item meets our high standards of
                quality, durability, and performance. From the latest
                innovations to trusted classics, we offer a wide variety of
                sporting goods to meet the needs of everyone, from casual
                enthusiasts to seasoned professionals.
              </p>
              <p className="text-lg mb-4">
                Customer satisfaction is our priority. We pride ourselves on
                offering a seamless shopping experience, fast shipping, and
                exceptional customer service. Thank you for choosing Sports Zone
                – where your game starts!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
