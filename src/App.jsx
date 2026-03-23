import MainNav from "./assets/pages/navigation/mainNav";
import UpperContent from "./assets/pages/main/upperContent";
import Items from "./assets/pages/main/items";
import Footer from "./assets/pages/footer/footer";

import { useState } from "react";
import { getCartStorage } from "./assets/script/product";
function App() {
  const [loggedUser, setLoggedUser] = useState(() => {
    return JSON.parse(localStorage.getItem("loggedUser")) || null;
  });

  const [cartItems, setCartItems] = useState(() => getCartStorage());
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileCart, setIsMobileCart] = useState(false);

  const [activePanel, setActivePanel] = useState(null);
  const openCart = () => setActivePanel("cart");
  const openBurger = () => setActivePanel("burger");

  const closeAll = () => setActivePanel(null);
  return (
    <>
      <MainNav
        loggedUser={loggedUser}
        setLoggedUser={setLoggedUser}
        cartItems={cartItems}
        setCartItems={setCartItems}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        isMobileCart={isMobileCart}
        setIsMobileCart={setIsMobileCart}
        /*For mainNav */
        openCart={openCart}
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        /*For mobileFotter */
        openBurger={openBurger}
        /*For closing other panel */
        closeAll={closeAll}
      />
      <UpperContent />
      <Items setCartItems={setCartItems} />

      <Footer />
    </>
  );
}

export default App;
