import { useState, useEffect } from "react";
function UpperContent() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="main-panel-upper">
        <div className="upper-carousel-wrap">
          <div
            className={`panel-upper upper-carousel ${index === 0 ? "upper-display" : "upper-hide"}`}
          >
            <img
              src="assets/images/upper-panel/summer.jpg"
              alt="summer image"
            />
            <h2 className="main-panel-upper-h2">
              See what's trending this summer
            </h2>
            <p className="upper-text">What's hot this summer?</p>
            <button type="button" className="upper-carousel-button">
              Take a look
            </button>
          </div>
          <div
            className={`panel-upper upper-carousel ${index === 1 ? "upper-display" : "upper-hide"}`}
          >
            <img
              src="assets/images/upper-panel/top-view-composition-with-neatly-arranged-organized-sport-items.jpg"
              alt="sport item image"
            />
            <h2 className="main-panel-upper-h2">Collectibles</h2>
            <p className="upper-text">Take home some of our collectibles.</p>
            <button type="button" className="upper-carousel-button">
              Check 'em out
            </button>
          </div>
          <div
            className={`panel-upper upper-carousel ${index === 2 ? "upper-display" : "upper-hide"} third-panel-wrap`}
          >
            <img
              src="assets/images/upper-panel/tourism-items-arrangement-top-view.jpg"
              alt="tourism image"
            />
            <h2 className="main-panel-upper-h2">Branded</h2>
            <p className="upper-text">Let's take you to the next chapter</p>
            <button type="button" className="upper-carousel-button">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpperContent;
