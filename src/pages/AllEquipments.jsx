import { useLoaderData } from "react-router-dom";

const AllEquipments = () => {
    const items = useLoaderData();
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
  } = items;
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            {/* Table Header */}
            <thead>
              <tr className="bg-indigo-500 text-white">
                <th className="py-3 px-4 text-left font-semibold">Name</th>
                <th className="py-3 px-4 text-left font-semibold">Category</th>
                <th className="py-3 px-4 text-left font-semibold">Price</th>
                <th className="py-3 px-4 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {equipmentList.map((equipment, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 border-t border-gray-200"
                >
                  <td className="py-3 px-4 text-gray-800">{name}</td>
                  <td className="py-3 px-4 text-gray-600">
                    {categoryName}
                  </td>
                  <td className="py-3 px-4 text-gray-800">
                    ${price}
                  </td>
                  <td className="py-3 px-4">
                    <button className="bg-indigo-500 text-white py-1 px-3 rounded-lg hover:bg-indigo-600">
                      View Details
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

export default AllEquipments;
