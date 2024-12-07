import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { Fade } from "react-awesome-reveal";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const photo = form.get("photo");
    const name = form.get("name");
    const email = form.get("email");
    const userName = form.get("userName");
    const categoryName = form.get("categoryName");
    const price = form.get("price");
    const description = form.get("description");
    const rating = form.get("rating");
    const customization = form.get("customization");
    const processingTime = form.get("processingTime");
    const stockStatus = form.get("stockStatus");
    const newItem = {
      photo,
      name,
      email,
      userName,
      categoryName,
      price,
      description,
      rating,
      customization,
      processingTime,
      stockStatus,
    };
    fetch("http://localhost:5000/items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Item added successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };
  return (
    <div>
      <Fade>
        <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 py-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-800 text-center">
              Add New Item
            </h2>

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Image Upload */}
              <div>
                <label
                  htmlFor="image"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Image
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter photo URL"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                />
              </div>

              {/* Item Name */}
              <div>
                <label
                  htmlFor="itemName"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Item Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter item name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                />
              </div>

              {/* Category Name */}
              <div>
                <label
                  htmlFor="categoryName"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Category Name
                </label>
                <input
                  type="text"
                  name="categoryName"
                  placeholder="Enter category name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                />
              </div>

              {/* Price */}
              <div>
                <label
                  htmlFor="price"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="Enter item description"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                />
              </div>

              {/* Rating */}
              <div>
                <label
                  htmlFor="rating"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Rating
                </label>
                <input
                  type="number"
                  name="rating"
                  max="5"
                  step="0.1"
                  placeholder="Enter rating (out of 5)"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                />
              </div>

              {/* Customization */}
              <div>
                <label
                  htmlFor="customization"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Customization
                </label>
                <input
                  type="text"
                  name="customization"
                  placeholder="Enter customizations (e.g., extra grip)"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                />
              </div>

              {/* Processing Time */}
              <div>
                <label
                  htmlFor="processingTime"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Processing Time
                </label>
                <input
                  type="date"
                  name="processingTime"
                  placeholder="Enter processing/delivery time"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                />
              </div>

              {/* Stock Status */}
              <div>
                <label
                  htmlFor="stockStatus"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Stock Status
                </label>
                <input
                  type="number"
                  name="stockStatus"
                  placeholder="Enter available quantity"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                />
              </div>

              {/* User Email */}
              <div>
                <label
                  htmlFor="userEmail"
                  className="block text-gray-700 font-medium mb-2"
                >
                  User Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={user?.email}
                  readOnly
                  className="w-full border border-gray-300 bg-gray-100 rounded-lg px-4 py-2"
                />
              </div>

              {/* User Name */}
              <div>
                <label
                  htmlFor="userName"
                  className="block text-gray-700 font-medium mb-2"
                >
                  User Name
                </label>
                <input
                  type="text"
                  name="userName"
                  value={user?.displayName}
                  readOnly
                  className="w-full border border-gray-300 bg-gray-100 rounded-lg px-4 py-2"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button className="bg-blue-500 text-white w-full px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition transform duration-300 hover:scale-105 active:scale-95">
                Add Item
              </button>
            </div>
          </form>
        </div>
      </Fade>
    </div>
  );
};

export default AddEquipment;
