import React from "react";

export default function Hero ({ dateFrom, dateTo, country, price, rooms }) {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{dateFrom}</h1>
          <h2 className="subtitle">
            {dateTo}
          </h2>
        </div>
      </div>
    </section>
  );
};
