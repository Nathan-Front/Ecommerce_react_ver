import { useState } from "react";
function MobileBurger({ isOpen }) {
  const [toggle, setToggle] = useState("");
  function toggleMenu(menu) {
    setToggle((prev) => (prev === menu ? null : menu));
  }
  return (
    <>
      <div
        className={`mobile-news ${isOpen ? "display" : ""}`}
        id="toggle-mobile-news"
      >
        <div className="mobile-menu-section">
          <span
            className="toggle-button-title"
            id="first-toggle-button"
            onClick={() => toggleMenu("news")}
          >
            News
          </span>
          <div
            className={`mobile-menu-wrap ${toggle === "news" ? "openMenu" : ""}`}
          >
            <div className="news-menu-cp">
              <span className="news-menu-cp-title">Title 1</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                dolorem praesentium at alias velit cum. Eius optio maiores
                delectus unde ipsam labore a numquam quod aperiam temporibus,
                corporis qui accusamus!
              </p>
              <img
                src="assets/images/category/communication-social-media-icons.jpg"
                alt="Trend icon"
                loading="lazy"
                className="mobileNewsImg"
              />
            </div>
            <div className="news-menu-cp">
              <span className="news-menu-cp-title">Title 2</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                dolorem praesentium at alias velit cum. Eius optio maiores
                delectus unde ipsam labore a numquam quod aperiam temporibus,
                corporis qui accusamus!
              </p>
              <img
                src="assets/images/category/couple-backpacks-rocks-sunset.jpg"
                alt="New release"
                loading="lazy"
                className="mobileNewsImg"
              />
            </div>
            <div className="news-menu-cp">
              <span className="news-menu-cp-title">Title 3</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                dolorem praesentium at alias velit cum. Eius optio maiores
                delectus unde ipsam labore a numquam quod aperiam temporibus,
                corporis qui accusamus!
              </p>
              <img
                src="assets/images/category/denim-sneakers-street-style.jpg"
                alt="Most ordered"
                loading="lazy"
                className="mobileNewsImg"
              />
            </div>
            <div className="news-menu-cp">
              <span className="news-menu-cp-title">Title 4</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                dolorem praesentium at alias velit cum. Eius optio maiores
                delectus unde ipsam labore a numquam quod aperiam temporibus,
                corporis qui accusamus!
              </p>
              <img
                src="assets/images/upper-panel/vecteezy_antique-table-holds-old-literature-rustic-elegance_24642428.jpg"
                alt="Creative styles"
                loading="lazy"
                className="mobileNewsImg"
              />
            </div>
          </div>
        </div>

        <div className="mobile-menu-section">
          <span
            className="toggle-button-title"
            onClick={() => toggleMenu("about")}
          >
            About us
          </span>
          <div
            className={`mobile-menu-wrap ${toggle === "about" ? "openMenu" : ""}`}
          >
            <div className="about-us-menu-content">
              <img
                src="assets/images/logo/agency.jpg"
                alt="aboutus image"
                loading="lazy"
                className="about-us-image"
              />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestias temporibus quae corporis minima sapiente dolorum
                autem, exercitationem quod porro enim error ipsam sit ullam
                saepe distinctio perferendis incidunt deleniti accusamus! Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Molestias
                temporibus quae corporis minima sapiente dolorum autem,
                exercitationem quod porro enim error ipsam sit ullam saepe
                distinctio perferendis incidunt deleniti accusamus! Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Molestias
                temporibus quae corporis minima sapiente dolorum autem,
                exercitationem quod porro enim error ipsam sit ullam saepe
                distinctio perferendis incidunt deleniti accusamus!
              </p>
            </div>
            <div className="mobile-menu-contact">
              <p className="menu-contact">Contact #: 000-0000-0000</p>
              <p className="menu-contact">Email: oOo@testmail.com</p>
              <p className="menu-contact">
                Address: somewhere down d street Ave.
              </p>
            </div>
            <div id="social-media">
              <img
                src="assets/images/logo/facebook-svgrepo-com.svg"
                alt="facebook"
                loading="lazy"
                className="about-us-social-media"
              />
              <img
                src="assets/images/logo/instagram-rounded-border-svgrepo-com.svg"
                alt="instagram"
                loading="lazy"
                className="about-us-social-media"
              />
              <img
                src="assets/images/logo/linkedin-boerder-svgrepo-com.svg"
                alt="instagram"
                loading="lazy"
                className="about-us-social-media"
              />
            </div>
          </div>
        </div>

        <div className="mobile-menu-section">
          <span
            className="toggle-button-title"
            onClick={() => toggleMenu("question")}
          >
            Most asked questions
          </span>
          <div
            className={`mobile-menu-wrap ${toggle === "question" ? "openMenu" : ""}`}
          >
            <h2>Question 1</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias temporibus quae corporis minima sapiente dolorum autem,
              exercitationem quod porro enim error ipsam sit ullam saepe
              distinctio perferendis incidunt deleniti accusamus!
            </p>
            <h2>Question 2</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias temporibus quae corporis minima sapiente dolorum autem,
              exercitationem quod porro enim error ipsam sit ullam saepe
              distinctio perferendis incidunt deleniti accusamus!
            </p>
            <h2>Question 3</h2>
            <p>Some text here</p>
          </div>
        </div>

        <div className="mobile-menu-section">
          <span
            className="toggle-button-title"
            onClick={() => toggleMenu("policy")}
          >
            Policies
          </span>
          <div
            className={`mobile-menu-wrap ${toggle === "policy" ? "openMenu" : ""}`}
          >
            <h2>Scam</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias temporibus quae corporis minima sapiente dolorum autem,
              exercitationem quod porro enim error ipsam sit ullam saepe
              distinctio perferendis incidunt deleniti accusamus!
            </p>
            <h2>Selling items on our site</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias temporibus quae corporis minima sapiente dolorum autem,
              exercitationem quod porro enim error ipsam sit ullam saepe
              distinctio perferendis incidunt deleniti accusamus!
            </p>
            <h2>Return policy</h2>
            <p>Some text here</p>
          </div>
        </div>

        <div className="mobile-menu-section">
          <span
            className="toggle-button-title"
            onClick={() => toggleMenu("community")}
          >
            Community
          </span>
          <div
            className={`mobile-menu-wrap ${toggle === "community" ? "openMenu" : ""}`}
          >
            <h2>Our sponsors</h2>
            <p>
              <span>Sponsor 1</span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias temporibus quae corporis minima sapiente dolorum autem,
              exercitationem quod porro enim error ipsam sit ullam saepe
              distinctio perferendis incidunt deleniti accusamus!
            </p>
            <p>
              <span>Sponsor 2</span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias temporibus quae corporis minima sapiente dolorum autem,
              exercitationem quod porro enim error ipsam sit ullam saepe
              distinctio perferendis incidunt deleniti accusamus!
            </p>
            <h2>Local community</h2>
            <p>Some text here</p>
            <h2>Foundations we are supporting</h2>
            <p>
              <span>Foundation 1</span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias temporibus quae corporis minima sapiente dolorum autem,
              exercitationem quod porro enim error ipsam sit ullam saepe
              distinctio perferendis incidunt deleniti accusamus!
            </p>
            <p>
              <span>Foundation 2</span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias temporibus quae corporis minima sapiente dolorum autem,
              exercitationem quod porro enim error ipsam sit ullam saepe
              distinctio perferendis incidunt deleniti accusamus!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileBurger;
