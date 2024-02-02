import { Link } from "react-router-dom";
import Meta from "../../components/meta/Meta";
import "./Auth.scss";
import Modal from "../../components/modal/Modal";

const Auth = () => {
  return (
    <>
      <Meta title={"Facebook - log in or sign up"} />
      <Modal />
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

              <button className="auth-create">Create new account</button>
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
