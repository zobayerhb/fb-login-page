import "./Modal.scss";
import { RxCross2 } from "react-icons/rx";

const Modal = ({ children, hide }) => {
  return (
    <>
      <div className="modal-bg">
        <div className="modal-container">
          <div className="modal-header">
            <div className="header-content">
              <h3>Sign Up</h3>
              <p>Its quick to easy</p>
            </div>
            <button className="modal-button" onClick={() => hide(false)}>
              <RxCross2 />
            </button>
          </div>
          <div className="modal-body">{children}</div>~
        </div>
      </div>
    </>
  );
};

export default Modal;
