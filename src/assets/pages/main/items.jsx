import Clothes from "./clothes";
import Shoes from "./shoes";
import BestOffer from "./bestOffer";
import Outdoor from "./outdoor";
import { useState } from "react";
function Items({ setCartItems, imageSelect, closeAll }) {
  const [imageClicked, setImageClicked] = useState(null);
  function imageSelected(src) {
    setImageClicked(src);
  }
  function closePopup() {
    closeAll();
    setImageClicked(null);
  }
  return (
    <>
      <div className="main-panel" id="Main-Panel">
        <div className="item-panel" id="product-delegation">
          <Clothes setCartItems={setCartItems} />
          <Shoes setCartItems={setCartItems} />
          <BestOffer imageSelect={imageSelect} imageSelected={imageSelected} />
          <Outdoor imageSelect={imageSelect} imageSelected={imageSelected} />
        </div>
        {imageClicked && (
          <div className={`popups ${imageSelect ? "popup-wrap" : ""}`}>
            <img
              src={imageClicked}
              className="popup-image popup-img"
              alt="Selected"
            />
            <button className="Close-popup-container" onClick={closePopup}>
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Items;
