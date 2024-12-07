import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css'

const HomeLayOut = () => {
    return (
        <div>
            {/* navbar */}
            <nav>
                <NavBar></NavBar>
            </nav>
            {/* main section */}
            <main>
                <Outlet></Outlet>
            </main>
            {/* footer */}
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayOut;