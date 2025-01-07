import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { BsSortDown } from "react-icons/bs";
import { IoAddCircle } from "react-icons/io5";
import { MdPreview } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

const AllEquipments = () => {
  const items = useLoaderData();
  const [sorts, setSorts] = useState(items);
  const handleSort = () => {
    const sortedItems = [...sorts].sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
    setSorts(sortedItems);
  };
  return (
    <div>
      <Helmet>
        <title>Sport | All Equipments</title>
      </Helmet>
      <Zoom>
        <div className="w-11/12 mx-auto">
          <h1 className="text-3xl font-semibold text-center pt-24 pb-10 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
            All Sports <span className="">Equipments</span>
          </h1>
          <div className="py-16">
            <div className="flex justify-between ">
              <Link to={"/addEquip"}>
                <button className="bg-teal-500 text-white font-medium btn rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-green-500/50 hover:bg-green-500 w-full">
                  <IoAddCircle /> Add More
                </button>
              </Link>
              <div>
                <button
                  onClick={handleSort}
                  className="bg-blue-400 text-white font-medium btn rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-blue-500/50 hover:bg-blue-300 w-full"
                >
                  <BsSortDown /> Sort By Price
                </button>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sorts.map((item) => (
              <div
                key={item._id}
                className="bg-gradient-to-r from-blue-400 to-teal-400 text-white p-6 rounded-lg shadow-md"
              >
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h2 className="text-2xl font-extrabold mb-2 text-pink-500">
                  {item.name}
                </h2>
                <p className="flex justify-center items-center mb-4">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={item.rating}
                    readOnly
                  />
                </p>
                <p className="text-lg font-bold mb-2">${item.price}</p>

                <Link to={`/viewDetail/${item._id}`}>
                  <button className="w-full bg-white text-indigo-500 font-semibold py-2 px-4 rounded-lg transition duration-300 transform hover:bg-indigo-600 hover:text-white hover:scale-105">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default AllEquipments;
