import PropTypes from 'prop-types';

const PartnerCard = ({ partner }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-md">
      <img className="w-full h-48 object-cover rounded-md mb-4" src={partner.logo} alt={partner.name} />
      <h2 className="text-xl font-semibold">{partner.name}</h2>
      {/* Add CRUD buttons here */}
    </div>
  );
};

PartnerCard.propTypes = {
  partner: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
  }).isRequired
};

export default PartnerCard;
