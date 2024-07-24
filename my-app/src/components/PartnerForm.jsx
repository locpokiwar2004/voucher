import  { useState } from 'react';
import PropTypes from 'prop-types';

const PartnerForm = () => {
  const [partner, setPartner] = useState({ name: '', logo: '' });

  const handleChange = (e) => {
    setPartner({ ...partner, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted partner:', partner);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 p-4 bg-gray-800 rounded-lg text-black">
      <h2 className="text-xl font-semibold mb-4 text-white" >Add Partner</h2>
      <input 
        type="text" 
        name="name" 
        value={partner.name} 
        onChange={handleChange} 
        placeholder="Partner Name" 
        className="mb-4 p-2 border border-gray-700 rounded-md w-full"
      />
      <input 
        type="text" 
        name="logo" 
        value={partner.logo} 
        onChange={handleChange} 
        placeholder="Logo URL" 
        className="mb-4 p-2 border border-gray-700 rounded-md w-full"
      />
      <button 
        type="submit" 
        className="bg-green-500 text-white px-4 py-2 rounded-md"
      >
        Save
      </button>
    </form>
  );
};

PartnerForm.propTypes = {
  partner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
  })
};

export default PartnerForm;
