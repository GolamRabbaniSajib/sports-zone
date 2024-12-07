import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Profile = () => {
    const {user} = useContext(AuthContext);
  return (
    <div className="w-11/12 mx-auto flex justify-center items-center min-h-screen">
      <Helmet>
        <title>Sport | Profile</title>
      </Helmet>
      <div className="card card-compact bg-base-100 w-96 h-96 shadow-xl">
        <figure>
          <img
            src={user?.photoURL}
            alt={user?.displayName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex">
            <p className="mr-5">Name:</p>
            <p>{user?.displayName}</p></h2>
          <p className="text-center">{user?.email}</p>
          <div className="card-actions justify-center">
            <Link to={'/updateProfile'}><button className="bg-blue-500 text-white font-medium py-3 px-8 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-blue-500/50">Edit Your Profile</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
