import { useState } from "react";

function MobileFooter({ showCart, cartCount, setIsBurger }) {
  const [burgerOpen, setBurgerOpen] = useState(false);
  function toggleBurger() {
    setBurgerOpen((prev) => !prev);
    setIsBurger((prev) => !prev);
  }

  return (
    <>
      <footer className="mobile-footer">
        <ul>
          <li>
            <button type="button" className="mobile-footer-buttons">
              <img
                src="assets/images/logo/home.svg"
                alt="home button"
                id="mobile-home-button"
              />
            </button>
          </li>
          <li>
            <button
              type="button"
              className="mobile-footer-buttons"
              onClick={showCart}
            >
              <img
                src="assets/images/logo/pngwing.com.png"
                alt="cart button"
                id="cart-button"
              />
              <span className="cart-counter">{cartCount}</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="mobile-footer-buttons"
              onClick={toggleBurger}
            >
              <img
                id="burger-open-button"
                src={`${burgerOpen ? "assets/images/logo/icon-close.svg" : "assets/images/logo/icon-hamburger.svg"}`}
                alt="burger button"
              />
            </button>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default MobileFooter;
