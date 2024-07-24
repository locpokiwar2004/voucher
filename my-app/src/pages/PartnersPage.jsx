import React, { useState } from 'react';
import PartnerCard from '../components/PartnerCard';
import PartnerForm from '../components/PartnerForm';
import data from '../data/partners.json';

const PartnersPage = () => {
  const [partners, setPartners] = useState(data);

  const handleAddPartner = (newPartner) => {
    setPartners([...partners, { id: partners.length + 1, ...newPartner }]);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Manage Partners</h1>
      <PartnerForm onSubmit={handleAddPartner} />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {partners.map(partner => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>
    </div>
  );
};

export default PartnersPage;
