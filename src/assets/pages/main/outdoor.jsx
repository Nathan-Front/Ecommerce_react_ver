import React from "react";

function Outdoor() {
  return (
    <>
      <div className="main-panel-lower outdoor-panel-wrapper">
        <div className="lower-panel-title">
          <h2 className="item-title-category-lower">Outdoors</h2>
        </div>
        <div className="lower-panel-content outdoor-panel-mobile-container">
          <div className="item-panel-lower adventure outdoor-panel-item">
            <div className="item-panel-lower-title">
              <h4 className="other-titles">Adventure</h4>
            </div>
            <div className="adventure-item">
              <div>
                <button
                  type="button"
                  className="adventure-1 other-offer-button"
                >
                  <img
                    src="assets/images/outdoors/folder 1/working-out.jpg"
                    alt="item 1"
                    className="other-img"
                    loading="lazy"
                  />
                  <span>Item 1</span>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="adventure-2 other-offer-button"
                >
                  <img
                    src="assets/images/outdoors/folder 1/hiker-enjoying-view-from-cliff.jpg"
                    alt="item 2"
                    className="other-img"
                    loading="lazy"
                  />
                  <span>Item 2</span>
                </button>
                <button
                  type="button"
                  className="adventure-3 other-offer-button"
                >
                  <img
                    src="assets/images/outdoors/folder 1/vecteezy_ai-generated-a-river-flowing-through-a-green-forest_42196286.jpg"
                    alt="item 3"
                    className="other-img"
                    loading="lazy"
                  />
                  <span>Item 3</span>
                </button>
              </div>
            </div>
            <div className="item-panel-lower-link">
              <a className="lower-panel-item-card-links">Go on hiking</a>
            </div>
          </div>
          <div className="item-panel-lower gear-up outdoor-panel-item">
            <div className="item-panel-lower-title">
              <h4 className="other-titles">Gear up this season</h4>
            </div>
            <div className="gear-up-item">
              <button type="button" className="other-offer-button">
                <img
                  src="assets/images/outdoors/folder 2/young-mountaineer.jpg"
                  alt="item 1"
                  className="other-img"
                  loading="lazy"
                />
                <span>Item 1</span>
              </button>
              <button type="button" className="other-offer-button">
                <img
                  src="assets/images/outdoors/folder 2/view-composition-with-neatly-arranged-organized-sport-items.jpg"
                  alt="item 2"
                  className="other-img"
                  loading="lazy"
                />
                <span>Item 2</span>
              </button>
            </div>
            <div className="item-panel-lower-link">
              <a className="lower-panel-item-card-links">Additions</a>
            </div>
          </div>
          <div className="item-panel-lower gadget outdoor-panel-item">
            <div className="item-panel-lower-title">
              <h4 className="other-titles">Gadgets</h4>
            </div>
            <div className="gadget-item">
              <button type="button" className="other-offer-button">
                <img
                  src="assets/images/outdoors/folder 3/modern-stationary-collection-arrangement.jpg"
                  alt="item 3"
                  className="other-img"
                  loading="lazy"
                />
                <span>Item 1</span>
              </button>
              <button type="button" className="other-offer-button">
                <img
                  src="assets/images/outdoors/folder 3/vecteezy_outdoor-survival-gear-including-ropes-compass-knife_73785059.jpg"
                  alt="item 4"
                  className="other-img"
                  loading="lazy"
                />
                <span>Item 2</span>
              </button>
            </div>
            <div className="item-panel-lower-link">
              <a className="lower-panel-item-card-links">Gear up</a>
            </div>
          </div>
          <div className="item-panel-lower stylish outdoor-panel-item">
            <div className="item-panel-lower-title">
              <h4 className="other-titles">Stylish</h4>
            </div>
            <div className="stylish-item">
              <button type="button" className="other-offer-button">
                <img
                  src="assets/images/outdoors/folder 4/vecteezy_beautiful-woman-photographer-standing-hand-holding-retro-camera_3146611.jpg"
                  alt="item 1"
                  className="other-img"
                  loading="lazy"
                />
                <span>Item 1</span>
              </button>
              <button type="button" className="other-offer-button">
                <img
                  src="assets/images/outdoors/folder 4/high-angle-man-exploring-nature.jpg"
                  alt="item 2"
                  className="other-img"
                  loading="lazy"
                />
                <span>Item 2</span>
              </button>
              <button type="button" className="other-offer-button">
                <img
                  src="assets/images/outdoors/folder 4/young-beautiful-woman-tropical-vacation-asia-summer-style-white-boho-dress-sneakers-digital-photo-camera-traveler-straw-hat-relaxed.jpg"
                  alt="item 3"
                  className="other-img"
                  loading="lazy"
                />
                <span>Item 3</span>
              </button>
            </div>
            <div className="item-panel-lower-link">
              <a className="lower-panel-item-card-links">Fashion</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Outdoor;
