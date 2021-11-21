import PropTypes from 'prop-types';
import Icon from '../icon';

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
      {icon && <Icon name={icon} />}
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
