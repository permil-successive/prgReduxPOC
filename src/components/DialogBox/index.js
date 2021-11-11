import Footer from "./Footer";
import Header from "./Header";

import "./index.css";

const InputDialogBox = ({
  isOpen,
  setIsOpen,
  onPositiveHandle,
  title,
  children,
}) => {
  return (
    <>
      {isOpen ? (
        <div className={`modalContainer model-show`}>
          <div className="modal">
            <header className="modal_header">
              <Header title={title} setIsOpen={setIsOpen} />
            </header>
            <main className="modal_content py-4 px-2">{children}</main>
            <footer className="modal_footer">
              <Footer
                onPositiveHandle={onPositiveHandle}
                setIsOpen={setIsOpen}
              />
            </footer>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default InputDialogBox;
