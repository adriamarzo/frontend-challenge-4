import PropTypes from 'prop-types';

const Icon = ({ name }) => (
  <span className="icon is-large">
    <i className={`fas ${name} fa-lg`}></i>
  </span>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
