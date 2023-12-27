import React, { useContext } from "react";
import { BsList, BsCart3 } from "react-icons/bs";

import siteLogo from "../../assets/site-logo.png";
import { SiderbarContext } from "../../context/SidebarContext";
import { NavbarStyle } from "./Navbar.style";

function Navbar() {
  const {
    isSidebarActive,
    setSideBarActive,
    isShowOrders,
    setShowOrders,
    orders,
  } = useContext(SiderbarContext);

  return (
    <NavbarStyle>
      <article className="navbar-left">
        <span
          className="menu-icon"
          onClick={() => setSideBarActive(!isSidebarActive)}
        >
          <BsList />
        </span>
        <img src={siteLogo} alt="Site Logo" />
      </article>

      <button
        className="orders-button"
        onClick={() => setShowOrders(!isShowOrders)}
      >
        <BsCart3 />

        <span className="order-number">{orders?.length}</span>
      </button>
    </NavbarStyle>
  );
}

export default Navbar;
