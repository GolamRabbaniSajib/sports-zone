import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

import {
  FiEdit,
  FiTrash2,
  FiEye,
  FiPlusCircle,
  FiLoader,
  FiInbox,
} from "react-icons/fi";

const MyEquipments = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      setLoading(false);
      return;
    }

    const fetchItems = async () => {
      try {
        const response = await fetch(
          `https://sport-equipment-server-six.vercel.app/items/${user.email}`
        );
        if (!response.ok) throw new Error("Failed to fetch data.");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Could not fetch your equipment. Please try again later.",
          background: "#ffffff",
          color: "#1f2937", // dark text
        });
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626", // Red-600
      cancelButtonColor: "#6b7280", // Gray-500
      confirmButtonText: "Yes, delete it!",
      background: "#ffffff",
      color: "#1f2937",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sport-equipment-server-six.vercel.app/items/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) throw new Error("Deletion failed.");
            return res.json();
          })
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your equipment has been removed.",
                icon: "success",
                background: "#ffffff",
                color: "#1f2937",
              });
              setItems((prev) => prev.filter((it) => it._id !== id));
            }
          })
          .catch(() => {
            Swal.fire(
              "Error!",
              "Could not delete the item. Please try again.",
              "error"
            );
          });
      }
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const renderContent = () => {
    if (loading)
      return (
        <div className="flex flex-col items-center justify-center py-20 text-center text-gray-500">
          <FiLoader className="animate-spin text-5xl text-teal-600" />
          <p className="mt-5 text-lg text-gray-700">Fetching your gear...</p>
        </div>
      );

    if (items.length === 0)
      return (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20 flex flex-col items-center space-y-4 text-gray-600"
        >
          <FiInbox className="text-7xl" />
          <h2 className="text-3xl font-semibold text-gray-900">
            No Equipment Found
          </h2>
          <p className="max-w-md">
            Your inventory is empty. Let’s add your first item!
          </p>
          <Link to="/addEquipment" tabIndex={-1}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-teal-600 px-8 py-3 text-white font-semibold shadow-lg transition-colors hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-400"
              aria-label="Add Equipment"
            >
              <FiPlusCircle size={20} />
              Add Equipment
            </motion.button>
          </Link>
        </motion.div>
      );

    return (
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {items.map((product) => (
            <motion.div
              key={product._id}
              variants={itemVariants}
              exit={{ opacity: 0, scale: 0.8 }}
              layout
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col border border-gray-200"
            >
              <img
                src={product.photo}
                alt={product.name}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3
                  className="text-xl font-semibold text-gray-900 truncate"
                  title={product.name}
                >
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-teal-600 mt-2">
                  ${product.price}
                </p>
              </div>
              <div className="bg-gray-50 p-3 flex justify-around items-center border-t border-gray-200">
                <Link
                  to={`/viewDetail/${product._id}`}
                  className="text-gray-600 hover:text-teal-600 transition-colors"
                  title="View Details"
                  aria-label={`View details of ${product.name}`}
                >
                  <FiEye size={20} />
                </Link>
                <Link
                  to={`/updateItem/${product._id}`}
                  className="text-gray-600 hover:text-yellow-500 transition-colors"
                  title="Edit Item"
                  aria-label={`Edit ${product.name}`}
                >
                  <FiEdit size={20} />
                </Link>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="text-gray-600 hover:text-red-600 transition-colors"
                  title="Delete Item"
                  aria-label={`Delete ${product.name}`}
                  type="button"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Helmet>
        <title>Sport | My Equipments</title>
      </Helmet>
      <div className="w-11/12 max-w-7xl mx-auto py-12 md:py-20">
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            My Inventory
          </h1>
          <p className="text-lg text-gray-700 mt-2">
            Manage all the equipment you&apos;ve added.
          </p>
        </motion.header>

        {renderContent()}
      </div>
    </div>
  );
};

export default MyEquipments;
