import React from "react";
import PropTypes from "prop-types";

import Hotel from "../Hotel";

const Hotels = ({ data }) => {
  return (
        <div className="columns is-multiline">
          {data.map((hotel) => {
            return (
              <div key={hotel.slug} className="column is-one-third">
                <Hotel {...hotel} />
              </div>
            );
          })}
        </div>
  );
};
Hotels.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hotels;
