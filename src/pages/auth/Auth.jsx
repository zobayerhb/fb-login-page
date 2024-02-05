import { Link } from "react-router-dom";
import Meta from "../../components/meta/Meta";
import "./Auth.scss";
import Modal from "../../components/modal/Modal";
import { useState } from "react";
import { FaCircleQuestion } from "react-icons/fa6";
import { day, month } from "../../faker/dmy/dmy";
import AuthCustom from "../../components/authCustom/AuthCustom";

const years = Array.from(
  { length: 120 },
  (_, i) => new Date().getFullYear() - i
);

const Auth = () => {
  const [modal, setModal] = useState(false);
  const [gender, setGender] = useState("");
  const [custom, setCustom] = useState(false);

  return (
    <>
      <Meta title={"Facebook - log in or sign up"} />

      {modal && (
        <Modal hide={setModal}>
          <div className="modal-form-signUp">
            <form className="form-signUp">
              <div className="v-input">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Surname" />
              </div>
              <input type="text" placeholder="Mobile number or email address" />
              <input type="text" placeholder="New password" />

              <div className="form-extra">
                <div className="form-extra-container">
                  <label>
                    <span>
                      Date of birth <FaCircleQuestion />
                    </span>
                    <div className="form-opt">
                      <select>
                        <option value="">Day</option>

                        {day?.map((item, index) => (
                          <option
                            value={item}
                            key={index}
                            selected={
                              new Date().getDate() == item ? true : false
                            }
                          >
                            {item}
                          </option>
                        ))}
                      </select>
                      <select>
                        <option value="">Month</option>

                        {month?.map((item, index) => (
                          <option
                            value={item}
                            key={index}
                            selected={
                              new Date().getMonth() == index ? true : false
                            }
                          >
                            {item}
                          </option>
                        ))}
                      </select>
                      <select>
                        <option value="">Year</option>

                        {years?.map((item, index) => (
                          <option
                            value={item}
                            key={index}
                            selected={
                              new Date().getFullYear() == item ? true : false
                            }
                          >
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </label>
                </div>
                <div className="form-extra-container">
                  <label>
                    <span>
                      Gender <FaCircleQuestion />
                    </span>
                    <div className="form-extra-input">
                      <label>
                        <span>Male</span>
                        <input
                          type="radio"
                          name="gender"
                          value={gender}
                          onClick={() => setGender("male")}
                        />
                      </label>
                      <label>
                        <span>Female</span>
                        <input
                          type="radio"
                          name="gender"
                          value={gender}
                          onClick={() => setGender("female")}
                        />
                      </label>

                      <label>
                        <span>Custom</span>
                        <input
                          type="radio"
                          name="gender"
                          value={gender}
                          onClick={() => setCustom(true)}
                        />
                      </label>
                    </div>
                  </label>
                </div>
                  {custom && <AuthCustom />}
              </div>
              <div className="form-text">
                <p>
                  People who use our service may have uploaded your contact
                  information to Facebook. <Link to="/">Learn more.</Link>{" "}
                </p>
                <p>
                  By clicking Sign Up, you agree to our{" "}
                  <Link to="/">Terms</Link> , <Link to="/">Privacy Policy</Link>{" "}
                  and <Link to="/">Cookies Policy.</Link> You may receive SMS
                  notifications from us and can opt out at any time.
                </p>
              </div>
              <button className="form-sign-up-button">Sign Up</button>
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
