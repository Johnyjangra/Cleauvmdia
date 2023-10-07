import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import BookSlid from "./components/BookSlid";
import Revelent from "./components/Revelent";
import Service from "./components/Service";
import Pricing from "./components/Pricing";
import BookCall from "./components/BookCall";
import Webflow from "./components/Webflow";
import Footer from "./components/Footer";
import CustomerSay from "./components/CustomerSay";
import Copy from "./components/Copy";
import Accordionshow from "./components/Accordionshow";
// import Topscroll from "./components/Topscroll";
import Preload from "./components/Preload";

function App() {
  return (
    <>
      <Preload />
      <div className="overflow-x-hidden">
        {" "}
        <Hero />
        <BookSlid />
        <Revelent />
        <Service />
        <Pricing />
        <BookCall />
        <Webflow />
        <CustomerSay />
        <Accordionshow />
        <Footer />
        <Copy />
      </div>
    </>
  );
}

export default App;
