import React from "react";
import PropTypes from "prop-types";

const Price = ({ icon = "dollar-sign", totalStars = 4, stars }) => {
  return (
    <div className="control">
      <div className="tags">
        <span className="tag is-medium is-info">
          {[...Array(totalStars)].map((v, i) => {
            if (stars >= i + 1) {
              return (
                <i
                  key={`${icon}${i}`}
                  className={`fas fa-${icon}`}
                  style={{ margin: "0 .125em" }}
                ></i>
              );
            } else {
              return (
                <i
                  key={`${icon}${i}`}
                  className={`fas fa-${icon}`}
                  style={{ margin: "0 .125em", opacity: ".25" }}
                ></i>
              );
            }
          })}
        </span>
      </div>
    </div>
  );
};

Price.propTypes = {
  totalStars: PropTypes.number,
  icon: PropTypes.string,
  stars: PropTypes.number.isRequired,
};
export default Price;
