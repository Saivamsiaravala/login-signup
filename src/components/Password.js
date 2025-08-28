import { FaEye, FaEyeSlash } from "react-icons/fa";
import PropTypes from "prop-types";

const Password = ({
  showPassword,
  password,
  handleInput,
  handlePasswordVisibility,
  id,
}) => {
  return (
    <div className="pwd">
      <input
        type={showPassword ? "text" : "password"}
        className="pwd-input"
        onChange={handleInput}
        value={password}
        required
        id={id}
        title="Please fill the password"
      />
      <button
        title={showPassword ? "Hide Password" : "Show Password"}
        onClick={handlePasswordVisibility}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};

Password.propTypes = {
  showPassword: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handlePasswordVisibility: PropTypes.func.isRequired,
  id: PropTypes.string,
};

export default Password;
