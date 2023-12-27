import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

import { CardStyle } from "./Card.style";

function Card(props) {
  const {
    title,
    description,
    image,
    status,
    orders,
    onClick = () => {},
    orderNo,
  } = props;
  const [distance, setDistance] = useState(0);

  const order = {
    title,
    status,
    orderNo,
  };

  const isDisabled =
    Array.isArray(orders) && orders.some((order) => order.orderNo === orderNo);

  return (
    <CardStyle image={image}>
      <article className="card-container">
        <h2 className="heading">{title}</h2>

        <p>{description}</p>

        <article className="action-items">
          <button className="search-setting-button">
            Search Settings{" "}
            <span className="icon">
              <BsChevronDown />
            </span>
          </button>

          <article className="range-wrapper">
            <input
              type="range"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
            <span className="range-value">{distance} KM</span>
          </article>
        </article>

        <article className="card-footer">
          <article className="footer-left">
            <h3 className="section-heading">Filter</h3>
            <article className="filer-options">
              <button>Nearby</button>
              <button>Alphabetical</button>
              <button>Cash back</button>
            </article>
          </article>

          <button
            className="shop-now-button"
            disabled={isDisabled}
            onClick={() => onClick(order)}
          >
            {isDisabled ? "Order Placed" : "Shop Now"}
          </button>
        </article>
      </article>
    </CardStyle>
  );
}

export default Card;
