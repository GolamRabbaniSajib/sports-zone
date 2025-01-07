import { createBrowserRouter } from "react-router-dom";
import HomeLayOut from "../layOut/HomeLayOut";
import Error from "../pages/Error";
import Home from "../pages/Home";
import AuthLayOut from "../layOut/AuthLayOut";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import UpdateProfile from "../pages/UpdateProfile";
import AddEquipment from "../pages/AddEquipment";
import ViewDetail from "../pages/ViewDetail";
import AllEquipments from "../pages/AllEquipments";
import MyEquipments from "../pages/MyEquipments";
import UpdateItem from "../pages/UpdateItem";
import UserRouter from "./UserRouter";
import AboutUs from "../pages/AboutUs";
import Contract from "../pages/Contract";
import Support from "../pages/Support";
import FAQPage from "../pages/FAQPage";
import CareersPage from "../pages/CareersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://sport-equipment-server-six.vercel.app/litems"),
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/addEquip",
        element: (
          <UserRouter>
            <AddEquipment></AddEquipment>
          </UserRouter>
        ),
      },
      {
        path: "/viewDetail/:id",
        element: <ViewDetail></ViewDetail>,
        loader: ({ params }) =>
          fetch(
            `https://sport-equipment-server-six.vercel.app/item/${params.id}`
          ),
      },
      {
        path: "/updateItem/:id",
        element: (
          <UserRouter>
            <UpdateItem></UpdateItem>
          </UserRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://sport-equipment-server-six.vercel.app/item/${params.id}`
          ),
      },
      {
        path: "/all",
        element: (
          <UserRouter>
            <AllEquipments></AllEquipments>
          </UserRouter>
        ),
        loader: () =>
          fetch("https://sport-equipment-server-six.vercel.app/items"),
      },
      {
        path: "/myEquip",
        element: (
          <UserRouter>
            <MyEquipments></MyEquipments>
          </UserRouter>
        ),
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/contract',
        element: <Contract></Contract>
      },
      {
        path: '/support',
        element: <Support></Support>
      },
      {
        path: 'faq',
        element: <FAQPage></FAQPage>
      },
      {
        path: '/careers',
        element: <CareersPage></CareersPage>
      }
    ],
  },
  {
    path: "/auth",
    element: <AuthLayOut></AuthLayOut>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
