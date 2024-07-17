import Footer from "../Footer";
import OpenAccount from "../OpenAccount";
import Awards from "./Awards";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Pricing from "./Pricing";
import Stats from "./Stats";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <OpenAccount />
      <Footer />
    </div>
  );
};
export default HomePage;
