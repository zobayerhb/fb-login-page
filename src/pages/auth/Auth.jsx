import { Link } from "react-router-dom";
import Meta from "../../components/meta/Meta";
import "./Auth.scss";
import Modal from "../../components/modal/Modal";
import { useState } from "react";

const Auth = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Meta title={"Facebook - log in or sign up"} />

      {modal && (
        <Modal hide={setModal}>
          <div className="modal-form-signUp">
            <form action="" className="form-signUp">
              <div className="v-input">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Surname" />
              </div>
              <input type="text" placeholder="Mobile number or email address" />
              <input type="text" placeholder="New password" />
            </form>
          </div>
        </Modal>
      )}

      <div className="auth-page">
        <div className="auth-page-container">
          <div className="auth-left">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
              alt=""
            />
            <h2>
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
          <div className="auth-right">
            <div className="auth-right-box">
              <form>
                <input
                  type="text"
                  placeholder="Email address or phone number"
                />
                <input type="password" placeholder="Password" />
                <button className="auth-logIn">Log in</button>
              </form>
              <Link to="">Forgotten password?</Link>
              <div className="divider"></div>

              <button className="auth-create" onClick={() => setModal(true)}>
                Create new account
              </button>
            </div>
            <p>
              {" "}
              <Link to="">Create a Page</Link> for a celebrity, brand or
              business.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
