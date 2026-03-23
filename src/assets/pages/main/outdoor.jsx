import { images } from "../../data/items";
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
            <div className="adventure-item" key={images.folder5.id}>
              <div>
                <button
                  type="button"
                  className="adventure-1 other-offer-button"
                >
                  <img
                    src={images.folder5[0].src}
                    alt={`item ${images.folder5[0].id}`}
                    className="other-img"
                    loading="lazy"
                  />
                  <span>Item {images.folder5[0].id}</span>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="adventure-2 other-offer-button"
                >
                  <img
                    src={images.folder5[1].src}
                    alt={`item ${images.folder5[1].id}`}
                    className="other-img"
                    loading="lazy"
                  />
                  <span>Item {images.folder5[1].id}</span>
                </button>
                <button
                  type="button"
                  className="adventure-3 other-offer-button"
                >
                  <img
                    src={images.folder5[2].src}
                    alt={`item ${images.folder5[2].id}`}
                    className="other-img"
                    loading="lazy"
                  />
                  <span>Item {images.folder5[2].id}</span>
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
                  src={images.folder6[0].src}
                  alt={`item ${images.folder6[0].id}`}
                  className="other-img"
                  loading="lazy"
                />
                <span>Item {images.folder6[0].id}</span>
              </button>
              <button type="button" className="other-offer-button">
                <img
                  src={images.folder6[1].src}
                  alt={`item ${images.folder6[1].id}`}
                  className="other-img"
                  loading="lazy"
                />
                <span>Item {images.folder6[1].id}</span>
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
                  src={images.folder7[0].src}
                  alt={`item ${images.folder7[0].id}`}
                  className="other-img"
                  loading="lazy"
                />
                <span>Item {images.folder7[0].id}</span>
              </button>
              <button type="button" className="other-offer-button">
                <img
                  src={images.folder7[1].src}
                  alt={`item ${images.folder7[1].id}`}
                  className="other-img"
                  loading="lazy"
                />
                <span>Item {images.folder7[1].id}</span>
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
                  src={images.folder8[0].src}
                  alt={`item ${images.folder8[0].id}`}
                  className="other-img"
                  loading="lazy"
                />
                <span>Item {images.folder8[0].id}</span>
              </button>
              <button type="button" className="other-offer-button">
                <img
                  src={images.folder8[1].src}
                  alt={`item ${images.folder8[1].id}`}
                  className="other-img"
                  loading="lazy"
                />
                <span>Item {images.folder8[1].id}</span>
              </button>
              <button type="button" className="other-offer-button">
                <img
                  src={images.folder8[2].src}
                  alt={`item ${images.folder8[2].id}`}
                  className="other-img"
                  loading="lazy"
                />
                <span>Item {images.folder8[2].id}</span>
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
