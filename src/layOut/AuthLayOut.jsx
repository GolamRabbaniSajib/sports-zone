import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
const AuthLayOut = () => {
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
        </div>
    );
};

export default AuthLayOut;