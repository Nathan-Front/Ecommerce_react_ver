function MobileFooter() {
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
            <button type="button" className="mobile-footer-buttons">
              <img
                src="assets/images/logo/pngwing.com.png"
                alt="cart button"
                id="cart-button"
              />
              <span className="cart-counter">0</span>
            </button>
          </li>
          <li>
            <button type="button" className="mobile-footer-buttons">
              <img
                id="burger-open-button"
                src="assets/images/logo/icon-hamburger.svg"
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
