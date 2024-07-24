import PropTypes from 'prop-types';

const VoucherCard = ({ voucher, partners }) => {
  const partner = partners.find(p => p.id === voucher.partnerId);

  return (
    <div className="bg-gray-800 p-4 rounded-md">
      <img className="w-full h-48 object-cover rounded-md mb-4" src={voucher.image} alt={voucher.name} />
      <h2 className="text-xl font-semibold">{voucher.name}</h2>
      <p className="text-gray-400">Discount: {voucher.discount}</p>
      {partner && (
        <div className="mt-2 flex items-center">
          <img className="w-8 h-8 rounded-full" src={partner.logo} alt={partner.name} />
          <span className="ml-2 text-gray-300">{partner.name}</span>
        </div>
      )}
      {/* Add CRUD buttons here */}
    </div>
  );
};

VoucherCard.propTypes = {
  voucher: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    partnerId: PropTypes.number.isRequired
  }).isRequired,
  partners: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
  })).isRequired
};

export default VoucherCard;
