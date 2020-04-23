import React from "react";

import Item from "../Item";
import Price from "../Price";

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
  const generateLocationData = () => city + ", " + country;
  const generateRoomsData = () => rooms + " Habitaciones";

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
          <Item icon={"map-marker"} data={generateLocationData()} />
          <Item icon={"bed"} data={generateRoomsData()} />
          <Price stars={price}/>
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
