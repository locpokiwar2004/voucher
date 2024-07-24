import React, { useState } from 'react';
import VoucherCard from '../components/VoucherCard';
import VoucherForm from '../components/VoucherForm';
import data from '../data/vouchers.json';
import partnersData from '../data/partners.json';

const VouchersPage = () => {
  const [vouchers, setVouchers] = useState(data);

  const handleAddVoucher = (newVoucher) => {
    setVouchers([...vouchers, { id: vouchers.length + 1, ...newVoucher }]);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Manage Vouchers</h1>
      <VoucherForm onSubmit={handleAddVoucher} />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vouchers.map(voucher => (
          <VoucherCard key={voucher.id} voucher={voucher} partners={partnersData} />
        ))}
      </div>
    </div>
  );
};

export default VouchersPage;
