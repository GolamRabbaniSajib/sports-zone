import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { IoIosAddCircle } from "react-icons/io";

const MyEquipments = () => {
  const [item, setItem] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://sport-equipment-server-six.vercel.app/items/${user?.email}`)
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
        fetch(`https://sport-equipment-server-six.vercel.app/items/${id}`, {
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
              const remaining = item.filter((it) => it._id !== id);
              setItem(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="pt-36">
      <div className="w-11/12 mx-auto mb-20">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Product Table
        </h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-300 px-4 py-2">Photo</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {item.map((product) => (
                <tr key={product._id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src={product.photo}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${product.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 flex space-x-2 justify-center">
                    <Link to={`/viewDetail/${product._id}`}>
                      <button className="bg-gradient-to-r from-blue-400 to-teal-400 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                        View
                      </button>
                    </Link>
                    <Link to={`/updateItem/${product._id}`}>
                      <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyEquipments;
