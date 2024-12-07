import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  const { _id, photo, name, categoryName, price, rating } = item;
  return (
    <div>
      <Zoom>
        <div className="group bg-gradient-to-r from-blue-400 to-teal-400 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          {/* Image */}
          <div className="overflow-hidden rounded-md">
            <img
              src={photo}
              alt={name}
              className="w-full h-48 object-cover transition duration-300 transform group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="mt-4 text-white">
            {/* Name */}
            <h2 className="text-lg font-bold grid grid-cols-2">
              <p className="w-1/2">Name:</p>
              <p>{name}</p>
            </h2>
            {/* Category */}
            <h1 className="text-sm text-indigo-100 grid grid-cols-2">
              <p className="w-1/2">Category:</p>
              <p>{categoryName}</p>
            </h1>
            {/* Price */}
            <h1 className="mt-2 text-xl font-semibold grid grid-cols-2">
              <p className="w-1/2">Price:</p>
              <p>${price}</p>
            </h1>
            {/* Rating */}
            <div className="grid grid-cols-2 mt-2">
              <p className="w-1/2">Rating</p>
              <div className=" flex items-center">
                <span className="text-yellow-300 font-bold mr-1">{rating}</span>
                <span className="text-sm text-yellow-100">/ 5</span>
              </div>
            </div>

            {/* View Details Button */}
            <div className="mt-4">
              <Link to={`viewDetail/${_id}`}>
                <button className="w-full bg-white text-indigo-500 font-semibold py-2 px-4 rounded-lg transition duration-300 transform hover:bg-indigo-600 hover:text-white hover:scale-105">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default ItemCard;
