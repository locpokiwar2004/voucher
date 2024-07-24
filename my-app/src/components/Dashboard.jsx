import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dataVouchers from '../data/vouchers.json';
import dataPartners from '../data/partners.json';
import VoucherCard from './VoucherCard';
import PartnerCard from './PartnerCard';

const Dashboard = () => {
  const [vouchers, setVouchers] = useState([]);
  const [partners, setPartners] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setVouchers(dataVouchers);
    setPartners(dataPartners);
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filteredVouchers = vouchers.filter(voucher =>
    voucher.name.toLowerCase().includes(search)
  );

  return (
    <div className="p-4 flex flex-col lg:flex-row gap-8">
      <div className="flex-1 lg:w-3/4">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="flex text-black justify-between items-center mb-4">
          <input 
            type="text" 
            placeholder="Search vouchers..." 
            value={search} 
            onChange={handleSearch} 
            className="p-2 border border-gray-700 rounded-md w-1/3"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVouchers.slice(0, 6).map(voucher => (
            <VoucherCard key={voucher.id} voucher={voucher} partners={partners} />
          ))}
        </div>
        <Link to="/vouchers" className="mt-4 text-blue-400 hover:underline">View All Vouchers</Link>
      </div>

      {/* Partner Section */}
      <div className="lg:w-1/4 flex-none">
        <h2 className="text-2xl font-semibold mb-4">Partners</h2>
        <div className="flex flex-col gap-4">
          {partners.slice(0, 3).map(partner => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
        <Link to="/partners" className="mt-4 text-green-400 hover:underline">View All Partners</Link>
      </div>
    </div>
  );
};

export default Dashboard;
