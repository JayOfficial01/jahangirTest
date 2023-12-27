import React, { createContext, useState } from "react";

export const SiderbarContext = createContext();

function SidebarProvider({ children }) {
  const [isSidebarActive, setSideBarActive] = useState(false);
  const [isShowOrders, setShowOrders] = useState(false);
  const [orders, setOrders] = useState([]);

  const handleOrders = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  const handleRemoveOrder = (id) => {
    setOrders(orders.filter((order) => order.orderNo !== id));
  };

  return (
    <SiderbarContext.Provider
      value={{
        isSidebarActive,
        isShowOrders,
        orders,
        setSideBarActive,
        setShowOrders,
        handleOrders,
        handleRemoveOrder,
      }}
    >
      {children}
    </SiderbarContext.Provider>
  );
}

export default SidebarProvider;
