import { getCartStorage, saveToCartStorage } from "../../script/product";
function Cart({ isCartOpen, toggleCart, cartItems, setCartItems }) {
  function deleteItem(id, size) {
    //Delete function
    const updatedCart = getCartStorage().filter(
      (item) => !(item.id === id && item.size === size),
    );
    alert("Item deleted");
    saveToCartStorage(updatedCart); //Store back the filtered cart
    setCartItems(updatedCart); //Update the cart loggedUser or registeredUser
  }
  return (
    <>
      <aside
        className={`check-out-cart-panel ${isCartOpen ? "showCart" : ""}`}
        id="display-cart"
      >
        <div className="cart-payment">
          <button type="button" id="close-cart" onClick={toggleCart}>
            Close cart
          </button>
          <button type="button" id="to-payment">
            Payment
          </button>
        </div>
        <div id="checkout-items" className="checking-out-item">
          <ul id="checked-out-item" className="checkingout"></ul>
          {cartItems.map((item) => (
            <div className="cart-display-wrap" key={`${item.id}-${item.size}`}>
              <div className="cart-item-list">
                <h3>
                  Article Name:{" "}
                  <span className="article-name">{item.name}</span>
                </h3>
                <h3>
                  Article Original Price: $
                  <span className="article-price">{item.price.toFixed(2)}</span>
                </h3>
                <h3>
                  Selected Qty:{" "}
                  <span className="article-quantity">{item.qty}</span>
                </h3>
                <h3>
                  Selected Size:{" "}
                  <span className="article-size">{item.size}</span>
                </h3>
                <h3>
                  Seller: <span className="article-seller">{item.seller}</span>
                </h3>
                <img
                  src={item.img}
                  alt="cart item image"
                  className="article-image"
                />
                <h3 className="total-price-item">
                  Article Total Price: $
                  <span className="article-total-price"></span>
                </h3>
              </div>
              <div className="cart-item-del-button">
                <button
                  type="button"
                  className="article-delete-button"
                  onClick={() => deleteItem(item.id, item.size)}
                >
                  Delete Item
                </button>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}

export default Cart;
