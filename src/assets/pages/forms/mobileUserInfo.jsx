function MobileUserInfo({ onClose, loggedUser, showUserInfo, handleSignOut }) {
  return (
    <>
      <form
        className={`logged-in-user-info-panel ${showUserInfo ? "showUserInfo" : ""}`}
        id="mogile-logged-in-panel"
      >
        <img
          id="close-login-panel"
          src="assets/images/logo/close-cross-svgrepo-com.svg"
          alt="close form button"
          className="close-form-button"
          onClick={onClose}
        />
        <div className="profile-picture">
          <img
            alt="profile picture"
            className="profile-pic"
            id="profile-picture"
          />
          <input type="file" id="profile-pic-upload" accept="image/*" hidden />
          <img
            src="assets/images/logo/camera-add-photo-svgrepo-com.svg"
            alt="upload profile pic"
            className="upload-profile-pic"
            id="upload-pic-Btn"
          />
        </div>
        <p>Hello!</p>
        <h1 className="logged-in-user-name" id="mobile-user-to-log">
          {loggedUser?.userName || "Guest"}
        </h1>
        <button
          type="button"
          className="sign-out"
          id="mobile-signout-user"
          onClick={() => {
            handleSignOut();
            onClose();
          }}
        >
          Sign out
        </button>
      </form>
    </>
  );
}

export default MobileUserInfo;
