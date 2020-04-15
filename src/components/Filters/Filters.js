import React from "react";

import DateFilter from "./DateFilter";
import OptionsFilter from "./OptionsFilter";

export default Filters = ({ title, description }) => {
  return (
    <nav className="navbar is-info" style={{ justifyContent: "center" }}>
      <div className="navbar-item">
        <DateFilter date={props.filters.dateFrom} icon="sign-in-alt" />
      </div>
      <div className="navbar-item">
        <DateFilter date={props.filters.dateTo} icon="sign-out-alt" />
      </div>
      <div className="navbar-item">
        <OptionsFilter
          options={[
            { value: undefined, name: "Todos los países" },
            { value: "Argentina", name: "Argentina" },
            { value: "Brasil", name: "Brasil" },
            { value: "Chile", name: "Chile" },
            { value: "Uruguay", name: "Uruguay" },
          ]}
          selected={props.filters.country}
          icon="globe"
        />
      </div>
      <div className="navbar-item">
        <OptionsFilter
          options={[
            { value: undefined, name: "Cualquier precio" },
            { value: 1, name: "$" },
            { value: 2, name: "$$" },
            { value: 3, name: "$$$" },
            { value: 4, name: "$$$$" },
          ]}
          selected={props.filters.price}
          icon="dollar-sign"
        />
      </div>
      <div className="navbar-item">
        <OptionsFilter
          options={[
            { value: undefined, name: "Cualquier tamaño" },
            { value: 10, name: "Hotel pequeño" },
            { value: 20, name: "Hotel mediano" },
            { value: 30, name: "Hotel grande" },
          ]}
          selected={props.filters.rooms}
          icon="bed"
        />
      </div>
    </nav>
  );
};
