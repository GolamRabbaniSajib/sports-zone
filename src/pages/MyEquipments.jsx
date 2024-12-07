import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyEquipments = () => {
  const [item, setItem] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5000/items/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItem(data);
      });
  }, [user?.email]);
  return (
    <div className="w-11/12 mx-auto pt-16">
      <div className="grid gap-4 md:grid-cols-3">
        {item.map((i) => (
          <div
            key={i._id}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white border"
          >
            {/* Image */}
            <img
              className="w-full h-48 object-cover"
              src={i.photo}
              alt={i.name}
            />

            {/* Content */}
            <div className="px-6 py-4">
              {/* Name */}
              <h2 className="font-bold text-xl mb-2">{i.name}</h2>
              {/* Category */}
              <p className="text-sm text-gray-600 mb-2">
                Category: {i.categoryName}
              </p>
              {/* Description */}
              <p className="text-gray-700 text-base mb-4">{i.description}</p>
              {/* Price */}
              <p className="font-semibold text-lg text-gray-800">
                Price: ${i.price}
              </p>
            </div>

            {/* Buttons */}
            <div className="px-6 py-4 flex justify-between items-center space-x-2">
              <button
                //   onClick={onViewDetails}
                className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition"
              >
                View
              </button>
              <button
                //   onClick={onUpdate}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
              >
                Update
              </button>
              <button
                //   onClick={onDelete}
                className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEquipments;
