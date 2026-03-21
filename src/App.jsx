import MainNav from "./assets/pages/navigation/mainNav";
import UpperContent from "./assets/pages/main/upperContent";
import Items from "./assets/pages/main/items";
import Footer from "./assets/pages/footer/footer";

import { useState, useEffect } from "react";

function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  useEffect(() => {
    //Define async function inside useEffect to make setLoggedUser asynchrouous
    const fetchLoggedUser = async () => {
      try {
        //Simulate a quick delay
        await new Promise((resolve) => setTimeout(resolve, 0));

        const saved = JSON.parse(localStorage.getItem("loggedUser"));
        if (saved) {
          setLoggedUser(saved);
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
      <UpperContent />
      <Items />

      <Footer />
    </>
  );
}

export default App;
