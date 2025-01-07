import { Link } from "react-router-dom";
import logoImg from "../assets/Red and yellow Sports Store Logo.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-teal-400  text-black mt-28">
      <footer className="footer footer-center w-11/12 mx-auto text-base-content rounded p-10">
        <div>
          <div className="flex flex-col justify-center items-center space-y-4">
            <img className="w-28 rounded-full" src={logoImg} alt="" />
          </div>
          <h1 className="text-3xl text-center pt-4 py-2 font-bold text-black">
            Sports Zone
          </h1>
        </div>
        <nav className="grid grid-flow-col gap-4">
          <Link to={"/aboutUs"} className="link link-hover text-black">
            About us
          </Link>
          <Link to={"/contract"} className="link link-hover text-black">
            Contact
          </Link>
          <Link to={"/careers"} className="link link-hover text-black">
            Jobs
          </Link>
          <Link to={"/support"} className="link link-hover text-black">
            Support
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4 text-3xl text-black">
            <a
              href="https://www.facebook.com/MdGolamRabbaniSajib"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a href="https://github.com/sbsajibsx" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/golam-robbani-sajib-4a2417325/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </nav>
        <aside>
          <p className="text-black">
            Copyright © {new Date().getFullYear()} - All right reserved by
            Sports Zone
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
