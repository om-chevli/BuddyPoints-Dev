import logo from "../../assets/BPLogo.svg";

import userIcon from "../../assets/icons/User.svg";
import basketIcon from "../../assets/icons/Basket.svg";
import "./css/Header.css";
import ContactUs from "./ContactUs";
import Favorites from "./Favorites";
import Cart from "./Cart";
import Account from "./Account";

const Header = () => {
  return (
    <div className="header text-base">
      <img src={logo} className="sm:w-10 md:w-12 lg:w-15 xl:w-20 w-20 bpLogo" />
      <div className="headerOptions">
        <p>Home</p>
        <p>About</p>
        <p className="selectedTab">Memberships</p>
        <p>Products</p>
        <p>Blogs</p>
        <ContactUs />
        <Favorites />
        <Cart />
        <Account />
      </div>
    </div>
  );
};

export default Header;
