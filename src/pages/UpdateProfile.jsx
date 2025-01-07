import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    updateUserProfile({ displayName: name, photoURL: photo })
      .then((r) => {
        console.log(r);
        toast.success(" Sign Up success", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/profile");
        setUser({ ...user, displayName: name, photoURL: photo });
      })
      .catch((err) => {
        toast.warn(`${err.code}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };
  return (
    <div>
      <Helmet>
        <title>Sport || Update Profile</title>
      </Helmet>
      <div className="w-11/12 mx-auto min-h-screen flex justify-center items-center py-6">
        <div className="card bg-base-100 shadow-xl shadow-blue-500/50 px-4">
          <div className="flex justify-center items-center my-4">
            <p className="text-3xl text-center px-2 py-4 bg-red-200 rounded-lg">
              Change Your Information
            </p>
          </div>
          <div className="card-body">
            <form onSubmit={handleUpdateProfile}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="photo-url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="bg-blue-500 text-white font-medium py-3 px-8 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-blue-500/50">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
};

export default UpdateProfile;
