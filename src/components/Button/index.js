import "./index.css";

const Button = ({ type, onClick, children, className }) => {
  const typeClass = type === 'primary' ? 'btn-primary' : (type === 'secondary' ? 'btn-secondary' : '');
  return (
    <div
      className={`btn ${typeClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
