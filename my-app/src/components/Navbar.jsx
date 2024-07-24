import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; // Đảm bảo rằng bạn có logo ở đúng đường dẫn này

const Navbar = () => {
  return (
    <div className="bg-gray-800 h-full w-64 p-4 flex flex-col">
      {/* Logo */}
      <div className="flex items-center mb-8">
        <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
        <h1 className="text-white text-2xl ml-2 font-bold">Voucher</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4">
        <Link
          to="/"
          className="text-white py-2 px-4 rounded-md hover:bg-gray-700"
        >
          Dashboard
        </Link>
        <Link
          to="/vouchers"
          className="text-white py-2 px-4 rounded-md hover:bg-gray-700"
        >
          Vouchers
        </Link>
        <Link
          to="/partners"
          className="text-white py-2 px-4 rounded-md hover:bg-gray-700"
        >
          Partners
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
