import { useState } from "react";
import { displayCreateForm, closeForm } from "../../script/displayForm";
function LoginForm() {
  const [checked, setChecked] = useState(false);
  useState(() => {
    displayCreateForm();
    closeForm();
  }, []);
  return (
    <>
      <form className="mobile-form" id="mobile-form-submit">
        <img
          id="close-login-panel"
          src="assets/images/logo/close-cross-svgrepo-com.svg"
          alt="close form button"
          className="close-form-button"
          onClick={closeForm}
        />
        <h1 className="form-title">Login Account:</h1>
        <div className="login-page-hidden" id="login-page">
          <label htmlFor="input-user-name">
            <b>Username</b>
          </label>
          <input
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
            onClick={displayCreateForm}
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
              Cancel
            </button>
            <p className="forgot-pass">
              Forgot <a id="forgot-password">password?</a>
            </p>
          </div>
        </div>
      </form>

      <div id="overlay"></div>
    </>
  );
}

export default LoginForm;
