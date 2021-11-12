import "./index.css";

const TextBox = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      className="textbox"
    />
  );
};

export default TextBox;
