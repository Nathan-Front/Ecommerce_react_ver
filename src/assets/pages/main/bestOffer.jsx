import { images } from "../../data/items";

function BestOffer({ imageSelect, imageSelected }) {
  return (
    <>
      <div className="main-panel-lower">
        <div className="lower-panel-title">
          <h2 className="item-title-category-lower">Best offer</h2>
        </div>
        <div className="lower-panel-content">
          <div className="item-panel-lower hot-items">
            <div className="item-panel-lower-title">
              <h4 className="other-titles">Hot items</h4>
            </div>
            <div className="item-panel-lower-div-2">
              {images.folder1.map((firstPanel) => (
                <button
                  type="button"
                  className="other-offer-button"
                  key={firstPanel.id}
                  onClick={() => {
                    imageSelected(firstPanel.src);
                    imageSelect();
                  }}
                >
                  <img
                    src={firstPanel.src}
                    alt={`item ${firstPanel.id}`}
                    className="other-img"
                    loading="lazy"
                  />
                  <span>Item {firstPanel.id}</span>
                </button>
              ))}
            </div>
            <div className="item-panel-lower-link">
              <a
                className="lower-panel-item-card-links"
                onClick={() => alert("Link to See more page")}
              >
                See more
              </a>
            </div>
          </div>
          <div className="item-panel-lower gift-for-love">
            <div className="item-panel-lower-title">
              <h4 className="other-titles">Gifts for your love one</h4>
            </div>
            <div className="item-panel-lower-div-2">
              {images.folder2.map((secondPanel) => (
                <button
                  type="button"
                  className="other-offer-button"
                  key={secondPanel.id}
                  onClick={() => {
                    imageSelected(secondPanel.src);
                    imageSelect();
                  }}
                >
                  <img
                    src={secondPanel.src}
                    alt={`item ${secondPanel.id}`}
                    className="other-img"
                    loading="lazy"
                  />
                  <span>item {secondPanel.id}</span>
                </button>
              ))}
            </div>
            <div className="item-panel-lower-link">
              <a
                className="lower-panel-item-card-links"
                onClick={() => alert("Link to Send to your love ones page")}
              >
                Send to your love ones
              </a>
            </div>
          </div>
          <div className="item-panel-lower items-on-sale">
            <div className="item-panel-lower-title">
              <h4 className="other-titles">Items on sale right now</h4>
            </div>
            <div className="item-panel-lower-div-2">
              {images.folder3.map((thirdPanel) => (
                <button
                  type="button"
                  className="other-offer-button"
                  key={thirdPanel.id}
                  onClick={() => {
                    imageSelected(thirdPanel.src);
                    imageSelect();
                  }}
                >
                  <img
                    src={thirdPanel.src}
                    alt={`item ${thirdPanel.id}`}
                    className="other-img"
                    loading="lazy"
                  />
                  <span>Item {thirdPanel.id}</span>
                </button>
              ))}
            </div>
            <div className="item-panel-lower-link">
              <a
                className="lower-panel-item-card-links"
                onClick={() => alert("Link to Discover more page")}
              >
                Discover more
              </a>
            </div>
          </div>
          <div className="item-panel-lower season-trend">
            <div className="item-panel-lower-title">
              <h4 className="other-titles">Season trends</h4>
            </div>
            <div className="item-panel-lower-div-2">
              {images.folder4.map((fourthPanel) => (
                <button
                  type="button"
                  className="other-offer-button"
                  key={fourthPanel.id}
                  onClick={() => {
                    imageSelected(fourthPanel.src);
                    imageSelect();
                  }}
                >
                  <img
                    src={fourthPanel.src}
                    alt={`item ${fourthPanel.id}`}
                    className="other-img"
                    loading="lazy"
                  />
                  <span>Item {fourthPanel.id}</span>
                </button>
              ))}
            </div>
            <div className="item-panel-lower-link">
              <a
                className="lower-panel-item-card-links"
                onClick={() => alert("Link to Trendings page")}
              >
                Trendings
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestOffer;
