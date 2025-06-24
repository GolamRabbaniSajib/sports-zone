import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Rating } from "@smastrom/react-rating";
import { FiEye } from "react-icons/fi";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const EquipmentCard = ({ item }) => {
  const { _id, photo, name, price, rating } = item;

  return (
    <motion.div
      className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl"
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Image Section */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={photo}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <p className="absolute top-2 right-2 rounded-full bg-blue-500 px-3 py-1 text-sm font-semibold text-white">
          ${price}
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <div className="my-3 flex items-center">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            <span className="ml-2 text-sm font-medium text-gray-500">
              {rating} / 5
            </span>
          </div>
        </div>
        <Link to={`/viewDetail/${_id}`}>
          <motion.button
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-teal-500 py-2.5 px-4 font-semibold text-white transition-colors duration-300 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
            whileTap={{ scale: 0.95 }}
          >
            <FiEye />
            View Details
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default EquipmentCard;