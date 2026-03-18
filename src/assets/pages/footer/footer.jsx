import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="return-top-button">
          <button className="return-to-top" id="back-to-top">
            Back to top
          </button>
        </div>
        <div className="contact-div" id="contact-div-for-mobile">
          <div>
            <img
              src="assets/images/category/hot items/letter-uppercase-square-n-svgrepo-com.svg"
              alt="company logo"
            />
          </div>
          <div className="contact-div-contents">
            <span>Curious about us?</span>
            <a href="#" className="footer-links">
              About us
            </a>
            <a href="#" className="footer-links">
              Company info
            </a>
            <a href="#" className="footer-links">
              Contact us
            </a>
          </div>
          <div className="contact-div-contents">
            <span>Want to sell items on this website?</span>
            <a href="#" className="footer-links">
              Why us?
            </a>
            <a href="#" className="footer-links">
              Click here to know how
            </a>
            <a href="#" className="footer-links">
              Related topics
            </a>
          </div>
          <div className="contact-div-contents">
            <span>FAQs</span>
            <a href="#" className="footer-links">
              Know us more
            </a>
            <a href="#" className="footer-links">
              Policies
            </a>
            <a href="#" className="footer-links">
              Community
            </a>
          </div>
        </div>
        <div className="alright-reserve">
          <p>© March-2026, Ⓝ Netora, Jonathan P. Tindungan</p>
          <a href="https://www.facebook.com/">
            <img
              src="assets/images/category/hot items/facebook-svgrepo-com.svg"
              alt="Facebook"
            />
          </a>
          <a href="https://www.instagram.com/">
            <img
              src="assets/images/category/hot items/instagram-rounded-border-svgrepo-com.svg"
              alt="Instagram"
            />
          </a>
          <a href="https://www.linkedin.com/">
            <img
              src="assets/images/category/hot items/linkedin-boerder-svgrepo-com.svg"
              alt="LinkedIn"
            />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
