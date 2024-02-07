import "./Navbar.css";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  function handleMenu(event) {
    const selectedMenu = event.target.innerText.toLowerCase();
    setMenu(selectedMenu);
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="SwiftCart" />
        <p>SwiftCart</p>
      </div>
      <ul className="nav-menu">
        <li onClick={handleMenu}>
          <Link  style={{textDecoration:'none'}} to="/">Shop</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={handleMenu}>
          <Link style={{textDecoration:'none'}}  to="/mens">Men</Link>
          {menu === "men" ? <hr /> : null}
        </li>
        <li onClick={handleMenu}>
          <Link  style={{textDecoration:'none'}} to="/Women">Women</Link>
          {menu === "women" ? <hr /> : null}
        </li>
        <li onClick={handleMenu}>
          <Link  style={{textDecoration:'none'}} to="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          {" "}
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cartIcon} alt="Cart" />
       
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
