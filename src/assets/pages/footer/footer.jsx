import React from "react";

function Footer() {
  function backToTop() {
    window.scroll(0, 0);
  }
  return (
    <>
      <footer>
        <div className="return-top-button">
          <button
            className="return-to-top"
            id="back-to-top"
            onClick={backToTop}
          >
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
            <a
              href="#"
              className="footer-links"
              onClick={() => alert("Link to About us page")}
            >
              About us
            </a>
            <a
              href="#"
              className="footer-links"
              onClick={() => alert("Link to Company info page")}
            >
              Company info
            </a>
            <a
              href="#"
              className="footer-links"
              onClick={() => alert("Link to Contact us page")}
            >
              Contact us
            </a>
          </div>
          <div className="contact-div-contents">
            <span>Want to sell items on this website?</span>
            <a
              href="#"
              className="footer-links"
              onClick={() => alert("Link to Why us page")}
            >
              Why us?
            </a>
            <a
              href="#"
              className="footer-links"
              onClick={() => alert("Link to Know how page")}
            >
              Click here to know how
            </a>
            <a
              href="#"
              className="footer-links"
              onClick={() => alert("Link to Related topics page")}
            >
              Related topics
            </a>
          </div>
          <div className="contact-div-contents">
            <span>FAQs</span>
            <a
              href="#"
              className="footer-links"
              onClick={() => alert("Link to Polices page")}
            >
              Policies
            </a>
            <a
              href="#"
              className="footer-links"
              onClick={() => alert("Link to Community page")}
            >
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
