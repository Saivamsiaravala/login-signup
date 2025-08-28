import { FaEye, FaEyeSlash } from "react-icons/fa";

const Password = ({
  showPassword,
  password,
  handleInput,
  handlePasswordVisibility,
}) => {
  return (
    <div className="pwd">
      <input
        type={showPassword ? "text" : "password"}
        className="pwd-input"
        onChange={handleInput}
        value={password}
        required
        id="password"
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

export default Password;
