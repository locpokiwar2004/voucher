import  { useState } from 'react';
import PropTypes from 'prop-types';

const VoucherForm = () => {
  const [voucher, setVoucher] = useState({ name: '', discount: '', image: '', partnerId: '' });

  const handleChange = (e) => {
    setVoucher({ ...voucher, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted voucher:', voucher);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 p-4 bg-gray-800 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Add / Edit Voucher</h2>
      <input 
        type="text" 
        name="name" 
        value={voucher.name} 
        onChange={handleChange} 
        placeholder="Voucher Name" 
        className="mb-4 p-2 border border-gray-700 rounded-md w-full"
      />
      <input 
        type="text" 
        name="discount" 
        value={voucher.discount} 
        onChange={handleChange} 
        placeholder="Discount" 
        className="mb-4 p-2 border border-gray-700 rounded-md w-full"
      />
      <input 
        type="text" 
        name="image" 
        value={voucher.image} 
        onChange={handleChange} 
        placeholder="Image URL" 
        className="mb-4 p-2 border border-gray-700 rounded-md w-full"
      />
      <input 
        type="text" 
        name="partnerId" 
        value={voucher.partnerId} 
        onChange={handleChange} 
        placeholder="Partner ID" 
        className="mb-4 p-2 border border-gray-700 rounded-md w-full"
      />
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Save
      </button>
    </form>
  );
};

VoucherForm.propTypes = {
  voucher: PropTypes.shape({
    name: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    partnerId: PropTypes.number.isRequired
  })
};

export default VoucherForm;
