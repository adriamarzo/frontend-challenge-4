import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <div className="landbot-header">
      <h1 className="subtitle">{title}</h1>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
