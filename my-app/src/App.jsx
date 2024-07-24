import Dashboard from "./components/Dashboard";
import VouchersPage from "./pages/VouchersPage";
import PartnersPage from "./pages/PartnersPage";
import {
  createBrowserRouter,
  RouterProvider,
  Router,
  Link,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Navbar />
      <Outlet />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "vouchers",
        element: <VouchersPage />,
      },
      {
        path: "partners",
        element: <PartnersPage />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
