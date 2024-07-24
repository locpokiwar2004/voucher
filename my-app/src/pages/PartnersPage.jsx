import React, { useState } from "react";
import PartnerCard from "../components/PartnerCard";
import PartnerForm from "../components/PartnerForm";
import data from "../data/partners.json";

const PartnersPage = () => {
  const [partners, setPartners] = useState(data);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddPartner = (newPartner) => {
    setPartners([...partners, { id: partners.length + 1, ...newPartner }]);
    setShowForm(false);
  };

  const filteredPartners = partners.filter((partner) =>
    partner.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Manage Partners</h1>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Cancel" : "Create Partner"}
      </button>

      <div className="mb-4 w-80 text-black">
        <input
          type="text"
          placeholder="Search partners..."
          className="p-2 w-80 border border-gray-300 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {showForm && <PartnerForm onSubmit={handleAddPartner} />}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPartners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>
    </div>
  );
};

export default PartnersPage;
