import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  FiImage,
  FiTag,
  FiBox,
  FiDollarSign,
  FiAlignLeft,
  FiStar,
  FiSettings,
  FiClock,
  FiDatabase,
  FiMail,
  FiUser,
  FiPlusCircle,
} from "react-icons/fi";

const inputClasses =
  "w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const newItem = Object.fromEntries(form.entries());

    fetch("https://sport-equipment-server-six.vercel.app/items", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Item added successfully",
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#22c55e", // Tailwind green-500
          });
          e.target.reset();
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Failed to add item. Please try again.",
          icon: "error",
          confirmButtonText: "Close",
          confirmButtonColor: "#ef4444", // Tailwind red-500
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>Sport | Add Equipment</title>
      </Helmet>

      <Fade>
        <div className="min-h-screen pt-28 px-4 flex items-center justify-center">
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl p-8 max-w-4xl w-full space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-extrabold text-center text-gray-800">
              Add New Equipment
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Photo URL */}
              <label className="flex flex-col">
                <span className="flex items-center text-gray-700 mb-1 font-semibold gap-2">
                  <FiImage /> Photo URL
                </span>
                <input
                  type="url"
                  name="photo"
                  placeholder="https://example.com/image.jpg"
                  className={inputClasses}
                  required
                />
              </label>

              {/* Item Name */}
              <label className="flex flex-col">
                <span className="flex items-center text-gray-700 mb-1 font-semibold gap-2">
                  <FiBox /> Item Name
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Professional Cricket Bat"
                  className={inputClasses}
                  required
                />
              </label>

              {/* Category Name */}
              <label className="flex flex-col">
                <span className="flex items-center text-gray-700 mb-1 font-semibold gap-2">
                  <FiTag /> Category Name
                </span>
                <input
                  type="text"
                  name="categoryName"
                  placeholder="Cricket"
                  className={inputClasses}
                  required
                />
              </label>

              {/* Price */}
              <label className="flex flex-col">
                <span className="flex items-center text-gray-700 mb-1 font-semibold gap-2">
                  <FiDollarSign /> Price
                </span>
                <input
                  type="number"
                  name="price"
                  placeholder="99.99"
                  step="0.01"
                  min="0"
                  className={inputClasses}
                  required
                />
              </label>

              {/* Description - span full width */}
              <label className="flex flex-col md:col-span-2">
                <span className="flex items-center text-gray-700 mb-1 font-semibold gap-2">
                  <FiAlignLeft /> Description
                </span>
                <textarea
                  name="description"
                  rows="4"
                  placeholder="Provide a detailed description of the item..."
                  className={inputClasses}
                  required
                />
              </label>

              {/* Rating */}
              <label className="flex flex-col">
                <span className="flex items-center text-gray-700 mb-1 font-semibold gap-2">
                  <FiStar /> Rating (1-5)
                </span>
                <input
                  type="number"
                  name="rating"
                  placeholder="4.8"
                  step="0.1"
                  min="1"
                  max="5"
                  className={inputClasses}
                  required
                />
              </label>

              {/* Customization */}
              <label className="flex flex-col">
                <span className="flex items-center text-gray-700 mb-1 font-semibold gap-2">
                  <FiSettings /> Customization
                </span>
                <input
                  type="text"
                  name="customization"
                  placeholder="Extra grip, colors..."
                  className={inputClasses}
                  defaultValue="No"
                  required
                />
              </label>

              {/* Processing Time */}
              <label className="flex flex-col">
                <span className="flex items-center text-gray-700 mb-1 font-semibold gap-2">
                  <FiClock /> Processing Time
                </span>
                <input
                  type="text"
                  name="processingTime"
                  placeholder="3-5 business days"
                  className={inputClasses}
                  required
                />
              </label>

              {/* Stock Status */}
              <label className="flex flex-col">
                <span className="flex items-center text-gray-700 mb-1 font-semibold gap-2">
                  <FiDatabase /> Stock Status
                </span>
                <input
                  type="text"
                  name="stockStatus"
                  placeholder="In Stock, Made to Order"
                  className={inputClasses}
                  required
                />
              </label>

              {/* User Email (readonly) */}
              <label className="flex flex-col">
                <span className="flex items-center text-gray-700 mb-1 font-semibold gap-2">
                  <FiMail /> Your Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={user?.email || ""}
                  readOnly
                  className={`${inputClasses} bg-gray-100 cursor-not-allowed`}
                />
              </label>

              {/* User Name (readonly) */}
              <label className="flex flex-col">
                <span className="flex items-center text-gray-700 mb-1 font-semibold gap-2">
                  <FiUser /> Your Name
                </span>
                <input
                  type="text"
                  name="userName"
                  value={user?.displayName || ""}
                  readOnly
                  className={`${inputClasses} bg-gray-100 cursor-not-allowed`}
                />
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
              whileTap={{ scale: 0.95 }}
            >
              <FiPlusCircle size={20} />
              Add Equipment
            </motion.button>
          </motion.form>
        </div>
      </Fade>
    </>
  );
};

export default AddEquipment;
