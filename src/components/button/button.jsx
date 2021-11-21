import PropTypes from 'prop-types';

const Button = ({
  onClick,
  disabled = false,
  type = 'button',
  icon = null,
  children = null,
  className = '',
}) => {
  return (
    <button
      className={className ? `button ${className}` : 'button'}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon && (
        <span className="icon is-large">
          <i className={`fas ${icon} fa-lg`}></i>
        </span>
      )}
      {children && <span>{children}</span>}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
