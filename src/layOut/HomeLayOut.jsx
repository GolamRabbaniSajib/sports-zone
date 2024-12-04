import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


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