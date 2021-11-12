import Button from '../Button';

const Footer = ({ onPositiveHandle, setIsOpen }) => {
  return (
    <div className="flex items-center justify-end p-2">
      <Button type="secondary" className="mr-1" onClick={() => setIsOpen(false)}>
        Close
      </Button>
      <Button
        type="primary"
        className="mr-1"
        onClick={() => {
          onPositiveHandle();
          setIsOpen(false);
        }}
      >
        Save Changes
      </Button>
    </div>
  );
};

export default Footer;
