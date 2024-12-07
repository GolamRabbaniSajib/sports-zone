import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyEquipments = () => {
  const [item, setItem] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/items/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user?.email]);
  // delete data

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/items/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
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
              <Link to={`/viewDetail/${i._id}`}>
                <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition">
                  View
                </button>
              </Link>

              <Link to={`/updateItem/${i._id}`}>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition">
                  Update
                </button>
              </Link>
              <button
                onClick={() => handleDelete(i._id)}
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
