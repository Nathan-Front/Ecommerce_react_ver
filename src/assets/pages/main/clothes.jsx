import { useState, useEffect } from "react";
import { items } from "../../data/items";
function Clothes() {
  /*const [isSelectItem, setIsSelectItem] = useState({
    id: "",
    item: "",
    seller: "",
    itemImg: "",
    itemPrice: "",
    itemSize: "",
    qty: "",
    totalPrice: "",
  });*/
  const [selectedSize, setSelectedSize] = useState(
    Object.fromEntries(items.map((item) => [item.id, item.sizes[0]])),
  );
  const [isCount, setIsCount] = useState({});

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
                    Item name:<span className="product-name">{item.name}</span>
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
                  alt={item.name}
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
                {item.sizes.map((size) => (
                  <label key={size}>
                    <input
                      type="radio"
                      name={`size-${item.id}`}
                      value={size}
                      className="radio-button"
                      checked={selectedSize[item.id] === size}
                      onChange={(e) =>
                        setSelectedSize({
                          ...selectedSize,
                          [item.id]: e.target.value,
                        })
                      }
                    />
                    <span className="select-size" htmlFor="size-ss">
                      {size}
                    </span>
                  </label>
                ))}
              </div>
              <div className="item-cart-button">
                <button type="button" className="add-cart-button">
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
                <span className="item-count itemTotal-1">
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
        <div className="mobile-main-panel-slider-dots"></div>
      </div>
    </>
  );
}

export default Clothes;
