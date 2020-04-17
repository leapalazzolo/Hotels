import React from "react";

const Hero = (props) => {
  const { dateFrom, dateTo, country, price, rooms } = props.filters;
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        {"HOLA"}
        <div className="container">
          <h1 className="title">{dateFrom}</h1>
          <h2 className="subtitle">{dateTo}</h2>
        </div>
      </div>
    </section>
  );
}
export default Hero;
