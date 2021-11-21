import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { ENTER_KEY_CODE } from './constants';

const Input = ({
  value = '',
  type = 'text',
  placeholder = 'Type here...',
  onChange,
  onSubmit = null,
}) => {
  const handleChange = useCallback(
    (event) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  const handleKeyUp = useCallback(
    (event) => {
      if (event.key === ENTER_KEY_CODE) {
        event.preventDefault();
        onSubmit();
      }
    },
    [onSubmit]
  );

  return (
    <input
      className="landbot-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onKeyUp={onSubmit && handleKeyUp}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number', 'password']),
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
};

export default Input;
