import PropTypes from 'prop-types';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search vouchers..."
        className="w-full p-2 border rounded-md"
      />
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
