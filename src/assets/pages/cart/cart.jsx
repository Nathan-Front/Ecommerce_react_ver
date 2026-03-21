function Cart({ isCartOpen, toggleCart }) {
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
        </div>
      </aside>
    </>
  );
}

export default Cart;
