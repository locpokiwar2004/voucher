import PropTypes from 'prop-types';

const PartnerList = ({ partners }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Partners</h2>
      {partners.map(partner => (
        <div key={partner.id} className="flex items-center">
          <img src={partner.logo} alt={partner.name} className="w-12 h-12 mr-4" />
          <span>{partner.name}</span>
        </div>
      ))}
    </div>
  );
};

PartnerList.propTypes = {
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PartnerList;
