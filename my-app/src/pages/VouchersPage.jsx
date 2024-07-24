import React, { useState } from 'react';
import VoucherCard from '../components/VoucherCard';
import VoucherForm from '../components/VoucherForm';
import data from '../data/vouchers.json';
import partnersData from '../data/partners.json';

const VouchersPage = () => {
  const [vouchers, setVouchers] = useState(data);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleAddVoucher = (newVoucher) => {
    setVouchers([...vouchers, { id: vouchers.length + 1, ...newVoucher }]);
    setShowForm(false);
  };

  const filteredVouchers = vouchers
    .filter(voucher => voucher.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Manage Vouchers</h1>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 transition-transform transform hover:scale-105"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Cancel' : 'Create Voucher'}
      </button>

      <div className="mb-4 flex flex-col md:flex-row md:items-center md:space-x-4">
        <input
          type="text"
          placeholder="Search vouchers..."
          className="p-2 border border-gray-300 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border border-gray-300 rounded-md bg-gray-800 text-white mt-4 md:mt-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Sort A-Z</option>
          <option value="desc">Sort Z-A</option>
        </select>
      </div>

      {showForm && <VoucherForm onSubmit={handleAddVoucher} />}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredVouchers.map(voucher => (
          <VoucherCard key={voucher.id} voucher={voucher} partners={partnersData} />
        ))}
      </div>
    </div>
  );
};

export default VouchersPage;
