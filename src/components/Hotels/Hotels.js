import React from "react";

import Hotel from "../Hotel";
import PropTypes from "prop-types";

const Hotels = ({ data, notFoundMessage }) => {
  return (
    <section className="section" style={{ marginTop: "1em" }}>
      <div className="container">
        <div className="columns is-multiline">
          {data.length ? (
            data.map((hotel) => {
              return (
                <div key={hotel.slug} className="column is-one-third">
                  <Hotel {...hotel} />
                </div>
              );
            })
          ) : (
            <article className="message is-warning">
              <div className="message-body">{notFoundMessage} </div>
            </article>
          )}
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
