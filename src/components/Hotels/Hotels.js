import React from "react";
import PropTypes from "prop-types";

import Hotel from "../Hotel";

const Hotels = ({ data, notFoundMessage }) => {
  return (
    <section className="section" style={{ marginTop: "1em" }}>
      <div className="container">
        <div className="columns is-multiline">
          {data.map((hotel) => {
            return (
              <div key={hotel.slug} className="column is-one-third">
                <Hotel {...hotel} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
Hotels.propTypes = {
  data: PropTypes.array.isRequired,
  notFoundMessage: PropTypes.string.isRequired,
};

export default Hotels;
