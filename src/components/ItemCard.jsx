const ItemCard = ({item}) => {
    const {photo, name, email, categoryName, price, description, rating, customization, processingTime, stockStatus} = item;
  return (
    <div>
      <div className="group bg-gradient-to-tr from-purple-500 to-indigo-500 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
        {/* Image */}
        <div className="overflow-hidden rounded-md">
          <img
            src={photo}
            alt={name}
            className="w-full h-48 object-cover transition duration-300 transform group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="mt-4 text-white">
          {/* Name */}
          <h2 className="text-lg font-bold">{name}</h2>
          {/* Category */}
          <p className="text-sm text-indigo-200">{categoryName}</p>
          {/* Price */}
          <p className="mt-2 text-xl font-semibold">${price}</p>
          {/* Rating */}
          <div className="mt-2 flex items-center">
            <span className="text-yellow-300 font-bold mr-1">{rating}</span>
            <span className="text-sm text-yellow-100">/ 5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
