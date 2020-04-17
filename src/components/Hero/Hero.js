import React from "react";
import PropTypes from "prop-types";

const Hero = ({ title, subtitle}) => {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{subtitle}</h2>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  //dateFrom: PropTypes.instanceOf(Date).isRequired,
  //dateTo: PropTypes.datinstanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  //rooms: PropTypes.number,
};

export default Hero;
