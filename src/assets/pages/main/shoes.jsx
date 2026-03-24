import { shoesItems } from "../../data/items";
import { useState } from "react";
import { addToCart, getCartStorage } from "../../script/product";
export default function Shoes({ setCartItems }) {
  const [selectSize, setSelectSize] = useState({});
  const [isCount, setIsCount] = useState({});

  function handleAddToCart(item) {
    const size = selectSize[item.id];
    const qty = isCount[item.id] || 0;
    if (!size) {
      alert("Select size");
      return;
    }
    if (qty <= 0) {
      alert("Add quantity first");
      return;
    }
    setIsCount((prev) => ({
      ...prev,
      [item.id]: 0,
    }));
    addToCart(item, size, qty);
    setCartItems(getCartStorage());
    alert("Item added to cart");
  }

  return (
    <>
      <div className="clothe-panel owl-carousel-container-shoes">
        <h2 className="item-title-category">Shoes</h2>
        <ul
          className="clothing owl-carousel-shoes"
          id="clothing-container-shoes"
        >
          {shoesItems.map((item) => (
            <li
              className="list-of-items carousel-item-shoes mobile-main-panel-active-2"
              data-product-id="11"
              key={item.id}
            >
              <div className="item-descript">
                <div>
                  <p>
                    Item name:<span className="product-name">{item.name}</span>
                  </p>
                  <p>
                    Item price ($)
                    <span className="item-price">{item.price}</span>
                  </p>
                </div>

                <p className="item-seller">seller: {item.seller}</p>
                <img
                  className="item-img"
                  src={item.img}
                  alt="W-shoes"
                  loading="lazy"
                />
                <p>
                  Item description <br />
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias temporibus quae corporis minima sapiente dolorum
                  autem, exercitationem quod porro enim error ipsam sit ullam
                  saepe distinctio perferendis incidunt deleniti accusamus!
                </p>
              </div>
              <div className="item-size shoe-size-container">
                <label htmlFor={`shoe-size-${item.id}`} className="shoe-label">
                  Select Size (US / CM):
                </label>
                <select
                  id={`shoe-size-${item.id}`}
                  className="shoe-size-dropdown"
                  value={selectSize[item.id] || ""}
                  onChange={(e) =>
                    setSelectSize({
                      ...selectSize,
                      [item.id]: e.target.value,
                    })
                  }
                >
                  <option value="">--Select Size--</option>
                  {item.sizes.map((size, index) => (
                    <option
                      value={size}
                      data-size="US 6 (24 cm)"
                      key={`${item.id}-${index}`}
                    >
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <div className="item-cart-button">
                <button
                  type="button"
                  className="add-cart-button"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  className="counter-minus"
                  onClick={() =>
                    setIsCount((prev) => ({
                      ...prev,
                      [item.id]: Math.max(0, (prev[item.id] || 0) - 1),
                    }))
                  }
                >
                  -
                </button>
                <span className="item-count itemTotal-11">
                  {isCount[item.id] || 0}
                </span>
                <button
                  type="button"
                  className="counter-add"
                  onClick={() =>
                    setIsCount((prev) => ({
                      ...prev,
                      [item.id]: (prev[item.id] || 0) + 1,
                    }))
                  }
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="mobile-main-panel-slider-dots-2"></div>
      </div>
    </>
  );
}
