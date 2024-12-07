import { Link, useLoaderData } from "react-router-dom";

const AllEquipments = () => {
  const items = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center py-10">
        All Sports <span className="text-blue-500">Equipments</span>
      </h1>
      <div className="w-11/12 mx-auto flex justify-start pt-10">
        <div className="md:flex items-center">
          <button className="bg-green-500 text-white font-medium btn rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-green-500/50 hover:bg-green-500 w-full md:mr-8">
            Add More
          </button>
          <button className="bg-blue-300 text-white font-medium btn rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-blue-500/50 hover:bg-blue-300 w-full">
            Sort By Price
          </button>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            {/* Table Header */}
            <thead>
              <tr className="bg-indigo-500 text-white ">
                <th className="py-3 px-4 text-left font-semibold">Photo</th>
                <th className="py-3 px-4 text-left font-semibold">Name</th>
                <th className="py-3 px-4 text-left font-semibold">Category</th>
                <th className="py-3 px-4 text-left font-semibold">Stock</th>
                <th className="py-3 px-4 text-left font-semibold">Price</th>
                <th className="py-3 px-4 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {items.map((item, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-100 border-t border-gray-200"
                >
                  <td className="py-3 px-4 text-gray-800">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-800">{item.name}</td>
                  <td className="py-3 px-4 text-gray-600">
                    {item.categoryName}
                  </td>
                  <td className="py-3 px-4 text-gray-800">
                    {item.stockStatus}
                  </td>
                  <td className="py-3 px-4 text-gray-800">${item.price}</td>
                  <td className="py-3 px-4">
                    <Link to={`/viewDetail/${item._id}`}>
                      <button className="bg-blue-500 text-white font-medium btn rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-blue-500/50 hover:bg-blue-500 w-full">
                        View Details
                      </button>
                    </Link>
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

export default AllEquipments;
