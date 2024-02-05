import "./AuthCustom.scss";

const AuthCustom = () => {
  return (
    <div className="custom-content">
      <select>
        <option value="">Select your pronoun</option>
        <option value="">She: Wish her a birthday</option>
        <option value="">He: Wish him a birthday</option>
      </select>
      <p>your pronoun is visible to everyone</p>
      <input type="text" placeholder="Gender (optional)" />
    </div>
  );
};

export default AuthCustom;
