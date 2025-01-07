import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { auth, AuthContext } from "../provider/AuthProvider";
import { signInWithPopup } from "firebase/auth";
import { Bounce } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import signUpLogo from '../assets/Sign up.gif'

const Register = () => {
  const [show, setShow] = useState(false);
  const { createNewUser, setUser, updateUserProfile, googleProvider } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    const passregex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passregex.test(password)) {
      toast.error(
        "Please add at lest one capital letter, one small letter and password must be 6 character",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
      return;
    }
    console.log({ name, email, photo, password });
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then((r) => {
            console.log(r);
            navigate("/");
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
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.warn(`Something Went Wrong. ${errorCode}`, {
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
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="pt-36 pb-12">
      <Helmet>
        <title>Sport | Register</title>
      </Helmet>
      <Bounce>
        <div className="md:flex md:flex-row-reverse items-center min-h-screen">
          <div className="md:ml-4">
            <img className="min-h-screen rounded-md" src={signUpLogo} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-xl p-6 border">
            <h1 className="font-semibold text-2xl md:text-4xl text-center p-4 bg-blue-200 rounded-lg shadow-lg hover:shadow-indigo-500/50">
              Register your account
            </h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
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
                  <span className="label-text font-bold">Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  name="password"
                  type={show ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className="btn btn-sm absolute right-2 top-11"
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="bg-gradient-to-r from-blue-400 to-teal-400  text-white font-medium py-3 px-8 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-blue-500/50">
                  Register
                </button>
              </div>
            </form>
            <p className="font-semibold text-center">
              Already Have An Account ?
              <Link className="text-red-500" to="/auth/login">
                Login
              </Link>
            </p>
            <p className="py-2 text-center text-xl font-semibold">or</p>
            <div className="*:w-full py-4">
              <button onClick={handleGoogleLogin} className="btn">
                <FcGoogle /> Register with Google
              </button>
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
      </Bounce>
    </div>
  );
};

export default Register;
