import Button from '../Button';

const Header = ({ title, setIsOpen }) => {
  return (
    <div className="flex items-start justify-between p-2">
      <h3 className="text-3xl font-semibold">{title || "InputDialogBox"}</h3>
      <Button onClick={() => setIsOpen(false)}>
        <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
          ×
        </span>
      </Button>
    </div>
  );
};

export default Header;
