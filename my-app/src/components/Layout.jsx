import PropTypes from 'prop-types'; // Import PropTypes
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="flex-1 p-4 overflow-auto">
        {children}
      </div>
    </div>
  );
};

// Sử dụng PropTypes để khai báo kiểu dữ liệu cho props
Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
