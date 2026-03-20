import { useState } from "react";
import { LoginAccount } from "../../script/loginForm";
import MobileUserInfo from "./mobileUserInfo";

function LoginForm({ isOpen, onClose, openRegister, setLoggedUser }) {
  const [checked, setChecked] = useState(true);
  const [loginForm, setLoginForm] = useState({
    userName: "",
    userPassword: "",
  });
  async function submitHandle(e) {
    e.preventDefault();
    const result = await LoginAccount(loginForm);
    if (result.error) {
      alert(result.error);
      return;
    }
    alert("login successful");
    setLoggedUser(result.user);
    onClose();
  }
  return (
    <>
      <form
        onSubmit={submitHandle}
        className={`mobile-form ${isOpen ? "showLoginDesk" : ""}`}
        id="mobile-form-submit"
      >
        <img
          id="close-login-panel"
          src="assets/images/logo/close-cross-svgrepo-com.svg"
          alt="close form button"
          className="close-form-button"
          onClick={onClose}
        />
        <h1 className="form-title">Login Account:</h1>
        <div className="login-page-hidden" id="login-page">
          <label htmlFor="input-user-name">
            <b>Username</b>
          </label>
          <input
            value={loginForm.userName}
            onChange={(e) =>
              setLoginForm({ ...loginForm, userName: e.target.value })
            }
            type="text"
            placeholder="input Username"
            name="uname"
            id="input-user-name"
            autoComplete="current-user"
          />
          <label htmlFor="input-user-pass">
            <b>Password</b>
          </label>
          <div className="login-pass-input-field">
            <input
              value={loginForm.userPassword}
              onChange={(e) =>
                setLoginForm({ ...loginForm, userPassword: e.target.value })
              }
              type="password"
              placeholder="input password"
              name="pass"
              id="input-user-pass"
              autoComplete="current-password"
              required
            />
            <i
              className="fa-solid fa-eye toggle-password"
              data-target="input-user-pass"
              role="button"
              tabIndex="0"
              id="eye"
            ></i>
          </div>
          <button
            type="submit"
            id="mobile-login-button"
            className="mobile-login-btn"
          >
            Login
          </button>
          <button
            type="button"
            id="redirect-to-create-form"
            className="mobile-no-acc-btn"
            onClick={openRegister}
          >
            Don't have account yet?
          </button>
          <label>
            <input
              type="checkbox"
              name="remember"
              id="mobile-remember-me"
              className="remember-me"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <span>Remember me</span>
          </label>
          <div className="cancel-forgot">
            <button type="button" id="mobile-cancel-input">
              Clear
            </button>
            <p className="forgot-pass">
              Forgot <a id="forgot-password">password?</a>
            </p>
          </div>
        </div>
      </form>
      <MobileUserInfo loggedIn={setLoggedUser} />
    </>
  );
}

export default LoginForm;
