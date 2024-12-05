import { useLoaderData } from "react-router-dom";

const ViewDetail = () => {
  const item = useLoaderData();
  const {
    _id,
    photo,
    name,
    email,
    categoryName,
    price,
    description,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = item;
  console.log(item);
  return (
    <div className="w-11/12 mx-auto py-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 max-w-auto mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
            <img
              src={photo}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Content Section */}
          <div className="p-6 md:w-1/2">
            {/* Name */}
            <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
            {/* Email */}
            <p className="text-sm text-gray-500">{email}</p>
            {/* Category */}
            <p className="mt-2 text-sm text-gray-600">
              <span className="font-semibold">Category:</span> {categoryName}
            </p>
            {/* Price */}
            <p className="mt-2 text-lg font-semibold text-indigo-600">
              ${price}
            </p>
            {/* Description */}
            <p className="mt-2 text-gray-700">
              <span className="font-semibold">Description:</span> {description}
            </p>
            {/* Rating */}
            <p className="mt-2 text-yellow-500">
              <span className="font-semibold">Rating:</span> {rating} / 5
            </p>
            {/* Customization */}
            <p className="mt-2 text-gray-600">
              <span className="font-semibold">Customization:</span>{" "}
              {customization}
            </p>
            {/* Processing Time */}
            <p className="mt-2 text-gray-600">
              <span className="font-semibold">Processing Time:</span>{" "}
              {processingTime}
            </p>
            {/* Stock Status */}
            <p className="mt-2">
              <span className="font-semibold">Stock Status:</span>{" "}
              {stockStatus > 0 ? (
                <span className="text-green-500 font-bold">
                  In Stock ({stockStatus})
                </span>
              ) : (
                <span className="text-red-500 font-bold">Out of Stock</span>
              )}
            </p>
            {/* Action Button */}
            <div className="mt-4">
              <button className="bg-blue-500 text-white font-medium py-3 px-8 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-blue-500/50">
                Go to home page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetail;
