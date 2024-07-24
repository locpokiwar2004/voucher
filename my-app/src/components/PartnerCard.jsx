import PropTypes from 'prop-types';

const PartnerCard = ({ partner }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-md flex items-center">
      <div className="w-16 h-16 bg-[#252041] rounded-full overflow-hidden">
        <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover" />
      </div>
      <p className="text-lg text-[#adabb8] font-bold ml-4">{partner.name}</p>
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
