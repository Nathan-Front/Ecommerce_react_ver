import { useState } from "react";
function MobileFooter({
  cartCount,
  setIsBurger,
  setIsMobileCart,
  openCart,
  openBurger,
  activePanel,
  setActivePanel,
}) {
  const [burgerOpen, setBurgerOpen] = useState(false);
  function toggleBurger() {
    setBurgerOpen((prev) => !prev);
    setIsBurger((prev) => !prev);
  }

  function displayCart() {
    setIsMobileCart(true);
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
              onClick={openCart}
            >
              <img
                src="assets/images/logo/cart-logo.png"
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
              onClick={() =>
                setActivePanel((prev) => (prev === "burger" ? null : "burger"))
              }
            >
              <img
                id="burger-open-button"
                src={`${activePanel === "burger" ? "assets/images/logo/icon-close.svg" : "assets/images/logo/icon-hamburger.svg"}`}
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
