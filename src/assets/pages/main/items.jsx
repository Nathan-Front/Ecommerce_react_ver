import Clothes from "./clothes";
import Shoes from "./shoes";
import BestOffer from "./bestOffer";
import Outdoor from "./outdoor";
function Items({ setCartItems }) {
  return (
    <>
      <div className="main-panel" id="Main-Panel">
        <div className="item-panel" id="product-delegation">
          <Clothes setCartItems={setCartItems} />;
          <Shoes />
          <BestOffer />
          <Outdoor />
        </div>
      </div>
    </>
  );
}

export default Items;
