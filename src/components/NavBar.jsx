import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allEquip"}>All Sports Equipment</NavLink>
      </li>
      <li>
        <NavLink to={"/addEquip"}>Add Equipment</NavLink>
      </li>
      <li>
        <NavLink to={"/myEquip"}>My Equipment List</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-cyan-50">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost font-semibold text-xl">Sports Zone</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-3">
          <div>
            {user && user.email ? (
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button">
                  <div className="w-10 rounded-full">
                    <img
                      className="rounded-full"
                      alt="sajib"
                      src={`${user?.photoURL}`}
                    />
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="dropdown-content menu rounded-box z-[1] w-auto p-4 shadow bg-orange-50 space-y-2"
                >
                  <p>{user.displayName}</p>
                  <Link to={'/profile'}><button className="bg-blue-500 text-white font-medium btn rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-blue-500/50 hover:bg-blue-500 w-full">
                    Your Profile
                  </button></Link>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            {user && user.email ? (
              <button
                onClick={logOut}
                className="bg-red-500 text-white font-medium py-3 px-8 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-red-500/50"
              >
                {" "}
                LogOut
              </button>
            ) : (
              <Link to="/auth/login">
                <button className="bg-blue-500 text-white font-medium py-3 px-8 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-blue-500/50">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
