import React from "react";

import Item from "../Item";

const Hotel = ({
  slug,
  name,
  photo,
  description,
  rooms,
  city,
  country,
  price,
}) => {
  generateLocationData = () => {
    return city + ", " + country;
  };
  generateRoomsData = () => {
    return rooms + " Habitaciones";
  };
  generatePriceData = () => {
    const priceComponents = [...Array(4)].map((v, i) => {
      if (price >= i + 1) {
        return (
          <i
            key={`${slug}${i}`}
            className="fas fa-dollar-sign"
            style={{ margin: "0 .125em" }}
          ></i>
        );
      } else {
        return (
          <i
            key={`${slug}${i}`}
            className="fas fa-dollar-sign"
            style={{ margin: "0 .125em", opacity: ".25" }}
          ></i>
        );
      }
    });
    return priceComponents;
  };
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={photo} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4">{name}</p>
        <p>{description}</p>
        <div
          className="field is-grouped is-grouped-multiline"
          style={{ marginTop: "1em" }}
        >
          <Item icon={"map-marker"} data={generateLocation()} />
          <Item icon={"bed"} data={generateRoomsData()} />
          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-medium is-info">
                <i className="fas fa-bed"></i>
              </span>
              <span className="tag is-medium">{rooms + " Habitaciones"}</span>
            </div>
          </div>
          <div className="control">
            <div className="tags">
              <span className="tag is-medium is-info">
                {[...Array(4)].map((v, i) => {
                  if (price >= i + 1) {
                    return (
                      <i
                        key={`${slug}${i}`}
                        className="fas fa-dollar-sign"
                        style={{ margin: "0 .125em" }}
                      ></i>
                    );
                  } else {
                    return (
                      <i
                        key={`${slug}${i}`}
                        className="fas fa-dollar-sign"
                        style={{ margin: "0 .125em", opacity: ".25" }}
                      ></i>
                    );
                  }
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <a className="card-footer-item has-background-primary has-text-white has-text-weight-bold">
          Reservar
        </a>
      </div>
    </div>
  );
};

export default Hotel;
