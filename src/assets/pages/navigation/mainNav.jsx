import { useState } from "react";
import LoginForm from "../forms/loginForm";
import CreateForm from "../forms/createForm";
import MobileUserInfo from "../forms/mobileUserInfo";
function MainNav({ loggedUser, setLoggedUser }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  function openLogin() {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
    document.body.classList.add("no-scroll");
  }
  function openRegister() {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
    document.body.classList.add("no-scroll");
  }
  function closeForm() {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    setShowUserInfo(false);
    document.body.classList.remove("no-scroll");
  }
  function handleSignOut() {
    localStorage.removeItem("loggedUser");
    setLoggedUser(null);
    alert("Logged out");
  }
  const [showUserInfo, setShowUserInfo] = useState(false);
  function showUserIndicator() {
    if (loggedUser) {
      setShowUserInfo(true);
    } else {
      openLogin();
    }
  }
  return (
    <>
      <div className="title-cart-panel">
        <div className="nav-area">
          <div className="logo-company">
            <img src="assets/images/logo/page-logo.svg" alt="company logo" />
            <h1>Notare</h1>
          </div>

          <div className="login-container">
            <p className="login-logout">
              <a
                id="sign-in"
                onClick={() =>
                  loggedUser ? alert("Already signed in") : openLogin()
                }
              >
                Sign in
              </a>
              or
              <a id="register" onClick={openRegister}>
                Register
              </a>
            </p>
          </div>

          <div className="item-to-cart-checkout">
            <img src="assets/images/logo/pngwing.com.png" alt="" />
            <span className="cart-checkout-qty">0</span>
          </div>
        </div>
        <div className="category-panel">
          <div className="news-button">
            <span className="drop-menu-items">News</span>
            <div className="category-button-news">
              <div>
                <button
                  type="button"
                  className="new-item-display-button newsItemActive"
                  data-target="news-1"
                >
                  Trending item
                </button>
                <button
                  type="button"
                  className="new-item-display-button"
                  data-target="news-2"
                >
                  New releases
                </button>
                <button
                  type="button"
                  className="new-item-display-button"
                  data-target="news-3"
                >
                  Most ordered
                </button>
                <button
                  type="button"
                  className="new-item-display-button"
                  data-target="news-4"
                >
                  Creative styles
                </button>
              </div>
              <div className="new-item-panel" id="news-1">
                <div className="news-descript">
                  <span>Some text</span>
                  <span>Some text</span>
                  <span>Some text</span>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Harum dolorem praesentium at alias velit cum. Eius optio
                  maiores delectus unde ipsam labore a numquam quod aperiam
                  temporibus, corporis qui accusamus!
                </p>
                <img
                  src="assets/images/category/communication-social-media-icons.jpg"
                  alt="Trend icon"
                />
              </div>
              <div className="new-item-panel" id="news-2">
                <p>
                  Some text here: Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Harum dolorem praesentium at alias velit
                  cum. Eius optio maiores delectus unde ipsam labore a numquam
                  quod aperiam temporibus, corporis qui accusamus!
                </p>
                <img
                  src="assets/images/category/couple-backpacks-rocks-sunset.jpg"
                  alt="New release"
                />
              </div>
              <div className="new-item-panel" id="news-3">
                <p>
                  Some text here: Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Harum dolorem praesentium at alias velit
                  cum. Eius optio maiores delectus unde ipsam labore a numquam
                  quod aperiam temporibus, corporis qui accusamus!
                </p>
                <img
                  src="assets/images/category/denim-sneakers-street-style.jpg"
                  alt="Most ordered"
                />
              </div>
              <div className="new-item-panel" id="news-4">
                <p>
                  Some text here: Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Harum dolorem praesentium at alias velit
                  cum. Eius optio maiores delectus unde ipsam labore a numquam
                  quod aperiam temporibus, corporis qui accusamus!
                </p>
                <img
                  src="assets/images/upper-panel/vecteezy_antique-table-holds-old-literature-rustic-elegance_24642428.jpg"
                  alt="Creative styles"
                />
              </div>
            </div>
          </div>
          <div className="category-button">
            <span className="drop-menu-items">Categories</span>
            <div className="category-button-panel">
              <div>
                <button
                  type="button"
                  className="category-images"
                  id="clothe-category"
                >
                  <span className="dropdown-buttons">Clothes</span>
                  <img
                    src="assets/images/category/still-life-rendering-jackets-display.jpg"
                    alt="category jacket"
                  />
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="category-images"
                  id="shoes-category"
                >
                  <span className="dropdown-buttons">Shoes</span>
                  <img
                    src="assets/images/category/denim-sneakers-street-style.jpg"
                    alt="category shoes"
                  />
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="category-images"
                  id="offer-category"
                >
                  <span className="dropdown-buttons">Best offers</span>
                  <img
                    src="assets/images/category/couple-backpacks-rocks-sunset.jpg"
                    alt="category bags"
                  />
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="category-images"
                  id="outdoor-category"
                >
                  <span className="dropdown-buttons">Outdoors</span>
                  <img
                    src="assets/images/category/decorative-cosmetics-accessories-sunglasses-hat-white-table.jpg"
                    alt="category accessories"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="daily-button">
            <span className="drop-menu-items">Daily deals</span>
            <div className="daily-button-panel">
              <div>
                <button
                  type="button"
                  className="daily-images"
                  id="clothe-daily"
                >
                  <span className="dropdown-buttons">Clothes</span>
                  <img
                    src="assets/images/category/still-life-rendering-jackets-display.jpg"
                    alt="category jacket"
                  />
                </button>
              </div>
              <div>
                <button type="button" className="daily-images" id="shoes-daily">
                  <span className="dropdown-buttons">Shoes</span>
                  <img
                    src="assets/images/category/denim-sneakers-street-style.jpg"
                    alt="category shoes"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="logged-in-user">
            <p>Hi!</p>
            <span className="user-name-logged" id="user-to-log">
              {loggedUser?.userName || " Guest"}
            </span>
            {loggedUser ? (
              <button
                type="button"
                className="sign-out"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            ) : null}
          </div>
        </div>
      </div>
      <div className="mobile-header-cart-tab">
        <img src="assets/images/logo/page-logo.svg" alt="company logo" />
        <img
          id="mobile-login-button"
          src={
            loggedUser
              ? "assets/images/logo/profile-user-svgrepo-com-green.svg"
              : "assets/images/logo/profile-user-svgrepo-com-gray.svg"
          }
          alt="login button"
          onClick={showUserIndicator}
        />
      </div>
      <MobileUserInfo
        onClose={closeForm}
        showUserInfo={showUserInfo}
        handleSignOut={handleSignOut}
        loggedUser={loggedUser}
      />
      <LoginForm
        isOpen={isLoginOpen}
        onClose={closeForm}
        openRegister={openRegister}
        setLoggedUser={setLoggedUser}
      />
      <CreateForm
        isOpen={isRegisterOpen}
        onClose={closeForm}
        openLogin={openLogin}
      />
      <div
        id="overlay"
        className={isLoginOpen || isRegisterOpen ? "cover" : ""}
      />
    </>
  );
}
export default MainNav;
