import MainNav from "./assets/pages/navigation/mainNav";
import MobileNav from "./assets/pages/navigation/MobileNav";
import UpperContent from "./assets/pages/main/upperContent";
import Items from "./assets/pages/main/items";
import Clothes from "./assets/pages/main/clothes";
import Shoes from "./assets/pages/main/shoes";
import BestOffer from "./assets/pages/main/bestOffer";
import Outdoor from "./assets/pages/main/outdoor";
import Footer from "./assets/pages/footer/footer";
import MobileFooter from "./assets/pages/footer/MobileFooter";
import LoginAccount from "./assets/pages/forms/loginForm";
import CreateForm from "./assets/pages/forms/createForm";
import { useState, useEffect } from "react";

function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  useEffect(() => {
    //Define async function inside useEffect
    const fetchLoggedUser = async () => {
      try {
        //Simulate a quick delay
        await new Promise((resolve) => setTimeout(resolve, 0));

        const saved = JSON.parse(localStorage.getItem("loggedUser"));
        if (saved?.user) {
          setLoggedUser(saved.user);
        }
      } catch (error) {
        console.error("Error loading user from localStorage:", error);
        setLoggedUser(null);
      }
    };
    fetchLoggedUser();
  }, []);
  return (
    <>
      <MainNav loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <MobileNav />
      <UpperContent />
      <Items />
      <Clothes />
      <Shoes />
      <BestOffer />
      <Outdoor />
      <Footer />
      <MobileFooter />
    </>
  );
}

export default App;
