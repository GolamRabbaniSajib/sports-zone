import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { auth, AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { signInWithPopup } from "firebase/auth";
import { Bounce } from "react-awesome-reveal";

const Login = () => {
  const [show, setShow] = useState(false);
  const { logIn, setUser, googleProvider } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        Swal.fire({
          icon: "success",
          title: "User Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((errors) => {
        setError({ ...error, login: errors.code });
        toast.warn(`${errors.code}`, {
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
    <div>
      <Bounce>
        <div className="flex justify-center items-center min-h-screen">
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-xl p-6 border">
            <h1 className="font-semibold text-4xl text-center p-4 bg-blue-200 rounded-lg shadow-lg hover:shadow-indigo-500/50">
              Login your account
            </h1>
            <form onSubmit={handleLogin} className="card-body">
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
              {error?.login && (
                <label className="label py-2 px-3 bg-red-400 text-black text-sm">
                  {error.login}
                </label>
              )}
              <label className="label">
                <Link
                  to="/auth/forgot"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
              <div className="form-control mt-3">
                <button className="bg-blue-500 text-white font-medium py-3 px-8 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-blue-500/50">
                  Login
                </button>
              </div>
            </form>
            <p className="font-semibold text-center">
              Don’t Have An Account ?{" "}
              <Link className="text-red-500" to="/auth/register">
                Register
              </Link>
            </p>
            <p className="py-2 text-center text-xl font-semibold">or</p>
            <div className="*:w-full py-4">
              <button onClick={handleGoogleLogin} className="btn">
                <FcGoogle /> Login With Google
              </button>
            </div>
          </div>
        </div>
      </Bounce>
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
  );
};

export default Login;
