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
  return (
    <>
      <MainNav
        loggedUser={loggedUser}
        setLoggedUser={setLoggedUser}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <UpperContent />
      <Items setCartItems={setCartItems} />

      <Footer />
    </>
  );
}

export default App;
