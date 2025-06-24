import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoAddCircle } from "react-icons/io5";
import { BsSortNumericDown, BsSortNumericUp } from "react-icons/bs";
import EquipmentCard from "../components/EquipmentCard";

const AllEquipments = () => {
  const initialItems = useLoaderData();
  const [items, setItems] = useState(initialItems);
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    const sorted = [...initialItems].sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return sortOrder === "desc" ? priceB - priceA : priceA - priceB;
    });
    setItems(sorted);
  }, [sortOrder, initialItems]);

  const handleSortToggle = () => {
    setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Sport | All Equipments</title>
      </Helmet>
      <div className="w-11/12 mx-auto my-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
            All Sports Equipments
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our complete collection of premium-quality sports gear and accessories.
          </p>
        </motion.div>

        {/* Controls Section */}
        <div className="my-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/addEquip" className="w-full md:w-auto">
            <motion.button
              className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-2.5 bg-teal-500 text-white rounded-lg font-medium shadow hover:bg-teal-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IoAddCircle size={20} /> Add Equipment
            </motion.button>
          </Link>

          <motion.button
            onClick={handleSortToggle}
            className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-2.5 bg-blue-500 text-white rounded-lg font-medium shadow hover:bg-blue-600 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {sortOrder === "desc" ? <BsSortNumericDown size={20} /> : <BsSortNumericUp size={20} />} Sort by Price
          </motion.button>
        </div>

        {/* Grid Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {items.map((item) => (
              <EquipmentCard key={item._id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default AllEquipments;
