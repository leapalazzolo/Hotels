import React from "./node_modules/react";

export default Hero = ({ title, description }) => {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">Î
            {description}
          </h2>
        </div>
      </div>
    </section>
  );
};
