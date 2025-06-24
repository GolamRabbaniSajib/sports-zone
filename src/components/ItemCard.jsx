import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FiArrowRight } from "react-icons/fi";

const ItemCard = ({ item }) => {
  const { _id, photo, name, categoryName, price, rating, description } = item;

  return (
    <motion.div
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 250 }}
    >
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={photo}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-opacity duration-500" />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-4">
        {/* Category & Rating */}
        <div className="mb-3 flex items-center justify-between text-sm text-gray-500">
          <span className="font-medium text-teal-600">{categoryName}</span>
          <div className="flex items-center gap-1">
            <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
            <span className="text-gray-500">({rating})</span>
          </div>
        </div>

        {/* Title & Description */}
        <h2 className="text-xl font-semibold text-gray-800 mb-1">{name}</h2>
        <p className="text-gray-600 text-sm line-clamp-2">
          {description.length > 70 ? description.substring(0, 70) + "..." : description}
        </p>

        {/* Price & Details Button */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-500">${price}</span>
          <Link to={`viewDetail/${_id}`}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-lg bg-teal-500 py-2 px-4 font-semibold text-white transition-all duration-300 hover:bg-teal-600"
            >
              Details <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ItemCard;
