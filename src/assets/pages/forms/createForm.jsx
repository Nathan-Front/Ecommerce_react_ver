function CreateForm() {
  return (
    <>
      <form className="create-accnt-page" id="create-accnt-btn" noValidate>
        <img
          id="close-login-panel"
          src="assets/images/logo/close-cross-svgrepo-com.svg"
          alt="close form button"
          className="close-form-button"
        />
        <h1 className="form-title">Create Account:</h1>
        <label htmlFor="input-uName">
          <b>Username</b>
        </label>
        <input
          id="input-uName"
          type="text"
          placeholder="input Username"
          name="uname"
          autoComplete="current-user"
          required
        />
        <label htmlFor="input-pass">
          <b>Password</b>
        </label>
        <div className="pass-input-field">
          <input
            id="input-pass"
            type="password"
            placeholder="input password"
            name="pass"
            autoComplete="current-password"
            required
          />
          <i
            className="fa-solid fa-eye toggle-password"
            data-target="input-pass"
            role="button"
            tabIndex="0"
            id="eye2"
          ></i>
        </div>
        <label htmlFor="input-email">
          <b>E-mail address</b>
        </label>
        <input
          id="input-email"
          type="text"
          placeholder="input password"
          name="pass"
          required
        />
        <small className="error"></small>
        <label htmlFor="input-number">
          <b>Contact number</b>
        </label>
        <input
          id="input-number"
          type="text"
          placeholder="input contact number"
          name="uphone"
        />
        <div className="login-create">
          <button type="submit">Create account</button>
          <button type="button" id="cancel-create-input">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateForm;
