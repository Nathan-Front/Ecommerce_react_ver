import { useState } from "react";
import { createAccount } from "../../script/createAccountForm";

function CreateForm({ isOpen, onClose, openLogin }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
  });
  const clearForm = () => {
    setForm({
      name: "",
      email: "",
      password: "",
      contact: "",
    });
    toggleEye();
  };
  async function handleSubmit(e) {
    e.preventDefault();
    const result = await createAccount(form);

    if (result.error) {
      alert(result.error);
      return;
    }

    alert("Account created!");

    openLogin();
  }
  const [showPassword, setShowPassword] = useState(false);
  const toggleEye = () => setShowPassword((prev) => !prev);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`create-accnt-page ${isOpen ? "showCreateAccForm" : ""}`}
        id="create-accnt-btn"
        noValidate
      >
        <img
          id="close-login-panel"
          src="assets/images/logo/close-cross-svgrepo-com.svg"
          alt="close form button"
          className="close-form-button"
          onClick={onClose}
        />
        <h1 className="form-title">Create Account:</h1>
        <label htmlFor="input-uName">
          <b>Username</b>
        </label>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
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
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            id="input-pass"
            type={showPassword ? "text" : "password"}
            placeholder="input password"
            name="pass"
            autoComplete="current-password"
            required
          />
          <i
            className={`fa-solid fa-eye ${showPassword ? "fa-eye-slash" : ""} toggle-password`}
            data-target="input-pass"
            role="button"
            tabIndex="0"
            id="eye2"
            onClick={toggleEye}
          ></i>
        </div>
        <label htmlFor="input-email">
          <b>E-mail address</b>
        </label>
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
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
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
          id="input-number"
          type="text"
          placeholder="input contact number"
          name="uphone"
        />
        <div className="login-create">
          <button type="submit">Create account</button>
          <button type="button" id="cancel-create-input" onClick={clearForm}>
            Clear
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateForm;
