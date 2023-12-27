import React, { useContext } from "react";
import { BsChevronDown, BsChevronRight, BsXLg } from "react-icons/bs";
import { Card } from "../../components";
import { SiderbarContext } from "../../context/SidebarContext";
import bgImageOne from "../../assets/bg-images/bg-one.png";
import bgImageTwo from "../../assets/bg-images/bg-two.png";
import bgImageThree from "../../assets/bg-images/bg-three.png";

import {
  DashboardContentStyle,
  DashboardStyle,
  LeftSideBarStyle,
  RightSideBarStyle,
} from "./Dashboard.style";

const RightSideBar = () => {
  const { isShowOrders, orders, handleRemoveOrder } =
    useContext(SiderbarContext);
  return (
    <RightSideBarStyle active={isShowOrders}>
      <h1 className="title">Current Orders</h1>

      {orders.length > 0 ? (
        orders.map((order, index) => (
          <article className="order" key={index}>
            <article className="order-left">
              <span className="icon">
                <BsChevronRight />
              </span>
              <article className="order-details">
                <h3>#[{order.orderNo}]</h3>
                <h3>[{order.title}]</h3>
                <h3>[{order.status}]</h3>
              </article>
            </article>

            <span
              className="cross-icon"
              onClick={() => handleRemoveOrder(order.orderNo)}
            >
              <BsXLg />
            </span>
          </article>
        ))
      ) : (
        <p className="note">No Orders Yet Please Shop Now</p>
      )}
    </RightSideBarStyle>
  );
};

const LeftSideBar = () => {
  const { isSidebarActive } = useContext(SiderbarContext);

  const menus = [
    {
      menuName: "More Options",
      url: "#",
    },
    {
      menuName: "Profile Settings",
      url: "#",
    },
    {
      menuName: "My Orders",
      url: "#",
    },
    {
      menuName: "Earnings",
      url: "#",
    },
    {
      menuName: "FAQ",
      url: "#",
    },
    {
      menuName: "Partner Program",
      url: "#",
    },
    {
      menuName: "Contact Us",
      url: "#",
    },
    {
      menuName: "Log Out",
      url: "#",
    },
  ];

  return (
    <LeftSideBarStyle active={isSidebarActive}>
      <article className="top-section">
        <article className="section-header">
          <h2 className="greeting-text">
            Welcome <br /> Back{" "}
          </h2>
          <h3>Balance</h3>
        </article>

        <article className="user-detial">
          <h2 className="name">Hannah</h2>

          <h2 className="price">$79.87</h2>
        </article>

        <article className="address-wrapper">
          <h3 className="title">Address</h3>
          <button>
            123 ABC ST.{" "}
            <span className="icon">
              <BsChevronDown />
            </span>
          </button>

          <h3 className="add-more-address-button">+ add address</h3>
        </article>
      </article>

      <ul className="bottom-foot-section">
        {menus.map((menu, index) => (
          <li key={index}>
            <a href={menu.url}>{menu.menuName}</a>
          </li>
        ))}
      </ul>
    </LeftSideBarStyle>
  );
};

const DashboardContent = () => {
  const { handleOrders, orders } = useContext(SiderbarContext);

  const places = [
    {
      orderNo: 1,
      title: "MarketPlace",
      description:
        "Dive into our Marketplace, where style meets convenience. Shop for shoes that step up your game, home decor that transforms spaces, and kitchenware that sparks joy. Your perfect find awaits!",
      status: "High Priority",
      image: bgImageOne,
    },
    {
      orderNo: 2,
      title: "Takeout",
      description:
        "Satisfy your cravings with Takeout! From breakfast bites to global cuisines for lunch or dinner, savor restaurant-quality meals delivered to your doorstep. Flavorful moments start here.",
      status: "Priority",
      image: bgImageTwo,
    },
    {
      orderNo: 3,
      title: "Grocery",
      description:
        "Explore local goodness in our Grocery Mode. Fresh produce, pantry essentials – all at your fingertips. Support local farms and businesses while curating your kitchen essentials. Nourish your home effortlessly.",
      status: "Low Priority",
      image: bgImageThree,
    },
  ];

  return (
    <DashboardContentStyle>
      <h1 className="title">Dashboard</h1>

      {places.map((place, index) => (
        <Card {...place} key={index} onClick={handleOrders} orders={orders} />
      ))}
    </DashboardContentStyle>
  );
};

function Dashboard() {
  return (
    <DashboardStyle>
      <LeftSideBar />
      <DashboardContent />
      <RightSideBar />
    </DashboardStyle>
  );
}

export default Dashboard;
