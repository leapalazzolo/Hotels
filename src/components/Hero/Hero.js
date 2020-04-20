import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import "moment/locale/es";

const Hero = ({ title, dateTo, dateFrom, country, price, rooms }) => {
  const formatDate = (date) => {
    return Moment(date).format("dddd[, ] DD [de ] MMMM [de ] YYYY");
  };
  const generateSubtitle = () => {
    Moment.locale("es");
    return (
      <>
        <span>
          {"desde el "}
          <b>{formatDate(dateFrom)}</b>
          {" hasta el "}
          <b>{formatDate(dateTo)}</b>
        </span>
        {country ? (
          <span>
            {" en "}
            <b>{country}</b>
          </span>
        ) : (
          ""
        )}
        {price ? (
          <span>
            {" por "}
            <b>{"$".repeat(price)}</b>
          </span>
        ) : (
          ""
        )}
        {rooms ? (
          <span>
            {" de hasta "}
            <b>{rooms}</b>
            {" habitaciones"}
          </span>
        ) : (
          ""
        )}
      </>
    );
  };
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{generateSubtitle()}</h2>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  dateTo: PropTypes.instanceOf(Moment).isRequired,
  dateFrom: PropTypes.instanceOf(Moment).isRequired,
  country: PropTypes.string,
  price: PropTypes.number,
  rooms: PropTypes.number,
};

export default Hero;
