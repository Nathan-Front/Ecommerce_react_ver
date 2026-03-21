import { useState } from "react";
import { items } from "../../data/items";
function Clothes() {
  const [checked, setChecked] = useState(false);
  const [isSelectItem, setIsSelectItem] = useState({
    id: "",
    item: "",
    seller: "",
    itemImg: "",
    itemPrice: "",
    itemSize: "",
    qty: "",
    totalPrice: "",
  });
  return (
    <>
      <div className="clothe-panel owl-carousel-container">
        <h2 className="item-title-category">Clothes</h2>
        <ul className="clothing owl-carousel" id="clothing-container">
          {items.map((item) => (
            <li
              className="list-of-items carousel-item mobile-main-panel-active"
              data-product-id="1"
              key={item.id}
            >
              <div className="item-descript">
                <div>
                  <p>
                    Item name:<span className="product-name">{item.item}</span>
                  </p>
                  <p>
                    Item price ($)
                    <span className="item-price">{item.price.toFixed(2)}</span>
                  </p>
                </div>

                <p className="item-seller">seller: {item.seller}</p>
                <img
                  className="item-img"
                  src={item.img}
                  alt={item.item}
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
              <div className="item-size">
                <h2>Size:</h2>
                <label htmlFor="size-ss">
                  <input
                    name="select-size-1"
                    value="SS"
                    id="size-ss"
                    type="radio"
                    className="radio-button"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                  />
                  <span className="select-size" htmlFor="size-ss">
                    SS
                  </span>
                </label>
                <label htmlFor="size-s">
                  <input
                    name="select-size-1"
                    value="S"
                    id="size-s"
                    type="radio"
                    className="radio-button"
                    onChange={(e) => setChecked(e.target.checked)}
                  />
                  <span className="select-size" htmlFor="size-s">
                    S
                  </span>
                </label>
                <label htmlFor="size-m">
                  <input
                    name="select-size-1"
                    value="M"
                    id="size-m"
                    type="radio"
                    className="radio-button"
                    onChange={(e) => setChecked(e.target.checked)}
                  />
                  <span className="select-size" htmlFor="size-m">
                    M
                  </span>
                </label>
                <label htmlFor="size-l">
                  <input
                    name="select-size-1"
                    value="L"
                    id="size-l"
                    type="radio"
                    className="radio-button"
                    onChange={(e) => setChecked(e.target.checked)}
                  />
                  <span className="select-size" htmlFor="size-l">
                    L
                  </span>
                </label>
                <label htmlFor="size-ll">
                  <input
                    name="select-size-1"
                    value="2L"
                    id="size-ll"
                    type="radio"
                    className="radio-button"
                    onChange={(e) => setChecked(e.target.checked)}
                  />
                  <span className="select-size" htmlFor="size-ll">
                    2L
                  </span>
                </label>
                <label htmlFor="size-lll">
                  <input
                    name="select-size-1"
                    value="3L"
                    id="size-lll"
                    type="radio"
                    className="radio-button"
                    onChange={(e) => setChecked(e.target.checked)}
                  />
                  <span className="select-size" htmlFor="size-lll">
                    3L
                  </span>
                </label>
              </div>
              <div className="item-cart-button">
                <button type="button" className="add-cart-button">
                  Add to cart
                </button>
                <button type="button" className="counter-minus">
                  -
                </button>
                <span className="item-count itemTotal-1">0</span>
                <button type="button" className="counter-add">
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="mobile-main-panel-slider-dots"></div>
      </div>
    </>
  );
}

export default Clothes;
