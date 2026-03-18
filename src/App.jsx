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

function App() {
  return (
    <>
      <MainNav />
      <MobileNav />
      <UpperContent />
      <Items />
      <Clothes />
      <Shoes />
      <BestOffer />
      <Outdoor />
      <Footer />
      <MobileFooter />
      <LoginAccount />
      <CreateForm />
    </>
  );
}

export default App;
