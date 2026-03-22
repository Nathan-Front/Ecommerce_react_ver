import { useEffect, useState } from "react";
import LoginForm from "../forms/loginForm";
import CreateForm from "../forms/createForm";
import MobileUserInfo from "../forms/mobileUserInfo";
import Cart from "../cart/cart";
import MobileFooter from "../footer/MobileFooter";

//import { updateCartCounter } from "../../script/product";
function MainNav({ loggedUser, setLoggedUser, cartItems, setCartItems }) {
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
    setTimeout(() => {
      window.location.reload();
    }, 450);
  }
  const [showUserInfo, setShowUserInfo] = useState(false);
  function showUserIndicator() {
    if (loggedUser) {
      setShowUserInfo(true);
    } else {
      openLogin();
    }
  }
  const [isCartPanel, setIsCartPanel] = useState(false);
  useEffect(() => {
    if (isCartPanel) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isCartPanel]);
  function displayCart() {
    setIsCartPanel((prev) => !prev);
  }
  const [isActiveTab, setIsActiveTab] = useState("Trending");
  const tabs = [
    {
      id: "Trending",
      label: "Trending item",
      content: (
        <>
          <div className="news-descript">
            <span>Some text</span>
            <span>Some text</span>
            <span>Some text</span>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
            dolorem praesentium at alias velit cum. Eius optio maiores delectus
            unde ipsam labore a numquam quod aperiam temporibus, corporis qui
            accusamus!
          </p>
          <img
            src="assets/images/category/communication-social-media-icons.jpg"
            alt="Trend icon"
          />
        </>
      ),
    },
    {
      id: "New",
      label: "New releases",
      content: (
        <>
          <p>
            Some text here: Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Harum dolorem praesentium at alias velit cum. Eius optio
            maiores delectus unde ipsam labore a numquam quod aperiam
            temporibus, corporis qui accusamus!
          </p>
          <img
            src="assets/images/category/couple-backpacks-rocks-sunset.jpg"
            alt="New release"
          />
        </>
      ),
    },
    {
      id: "Most",
      label: "Most ordered",
      content: (
        <>
          <p>
            Some text here: Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Harum dolorem praesentium at alias velit cum. Eius optio
            maiores delectus unde ipsam labore a numquam quod aperiam
            temporibus, corporis qui accusamus!
          </p>
          <img
            src="assets/images/category/denim-sneakers-street-style.jpg"
            alt="Most ordered"
          />
        </>
      ),
    },
    {
      id: "Creative",
      label: "Creative styles",
      content: (
        <>
          <p>
            Some text here: Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Harum dolorem praesentium at alias velit cum. Eius optio
            maiores delectus unde ipsam labore a numquam quod aperiam
            temporibus, corporis qui accusamus!
          </p>
          <img
            src="assets/images/upper-panel/vecteezy_antique-table-holds-old-literature-rustic-elegance_24642428.jpg"
            alt="Creative styles"
          />
        </>
      ),
    },
  ];

  const categoryTabs = [
    {
      id: "Clothes",
      label: "Clothes",
      img: "assets/images/category/still-life-rendering-jackets-display.jpg",
    },
    {
      id: "Shoes",
      label: "Shoes",
      img: "assets/images/category/denim-sneakers-street-style.jpg",
    },
    {
      id: "Best offers",
      label: "Best offers",
      img: "assets/images/category/couple-backpacks-rocks-sunset.jpg",
    },
    {
      id: "Outdoors",
      label: "Outdoors",
      img: "assets/images/category/decorative-cosmetics-accessories-sunglasses-hat-white-table.jpg",
    },
  ];
  const dailyDeals = [
    {
      id: "Clothes",
      label: "Clothes",
      img: "assets/images/category/still-life-rendering-jackets-display.jpg",
    },
    {
      id: "Shoes",
      label: "Shoes",
      img: "assets/images/category/denim-sneakers-street-style.jpg",
    },
  ];

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
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
            <img
              src="assets/images/logo/pngwing.com.png"
              alt=""
              onClick={displayCart}
            />
            <span className="cart-checkout-qty">{cartCount}</span>
          </div>
        </div>
        <div className="category-panel">
          <div className="news-button">
            <span className="drop-menu-items">News</span>
            <div className="category-button-news">
              <div>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    className={`new-item-display-button ${
                      isActiveTab === tab.id
                        ? "active-panel active-panel-indicate"
                        : ""
                    }`}
                    onClick={() => setIsActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              {tabs.map((tab) =>
                isActiveTab === tab.id ? (
                  <div key={tab.id} className="new-item-panel active-panel">
                    {tab.content}
                  </div>
                ) : null,
              )}
            </div>
          </div>
          <div className="category-button">
            <span className="drop-menu-items">Categories</span>
            <div className="category-button-panel">
              {categoryTabs.map((cTab) => (
                <div key={cTab.id}>
                  <button
                    type="button"
                    className="category-images"
                    onClick={() => {
                      alert("Link to " + cTab.id);
                    }}
                  >
                    <span className="dropdown-buttons">{cTab.label}</span>
                    <img src={cTab.img} alt={`category ${cTab.label}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="daily-button">
            <span className="drop-menu-items">Daily deals</span>
            <div className="daily-button-panel">
              {dailyDeals.map((dTab) => (
                <div key={dTab.id}>
                  <button
                    type="button"
                    className="daily-images"
                    onClick={() => {
                      alert("Link to " + dTab.id);
                    }}
                  >
                    <span className="dropdown-buttons">{dTab.label}</span>
                    <img src={dTab.img} alt={`category ${dTab.label}`} />
                  </button>
                </div>
              ))}
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
        setCartItems={setCartItems}
      />
      <CreateForm
        isOpen={isRegisterOpen}
        onClose={closeForm}
        openLogin={openLogin}
      />
      <Cart isCartOpen={isCartPanel} toggleCart={displayCart} />
      <MobileFooter isCartOpen={isCartPanel} showCart={displayCart} />
      <div
        id="overlay"
        className={isLoginOpen || isRegisterOpen || isCartPanel ? "cover" : ""}
      />
    </>
  );
}
export default MainNav;
