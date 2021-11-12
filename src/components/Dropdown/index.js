import './index.css'

const Dropdown = ({value, onChange, placeholder, options}) => {
  return (
    <select
      placeholder={placeholder}
      value={value}
      className="dropdown"
      onChange={onChange}
    >
      {
        options.map((type) => (<option value={type}>{type}</option>))
      }
    </select>
  );
};

export default Dropdown;