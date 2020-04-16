import React from "react";

import DateFilter from "./OptionsFilter";
import OptionsFilter from "./OptionsFilter";

export default function Filters({
  dateFrom,
  dateTo,
  country,
  price,
  rooms,
  onFilterChange,
}) {
  const handleOptionsChange = (event) => {
    let payload = this.props.filters;
    payload[event.target.name] = event.target.value;

    this.props.onFilterChange(payload);
  };
  const handleDateChange = (event) => {
    let payload = this.props.filters;
    payload[event.target.name] = event.target.value;

    this.props.onFilterChange(payload);
  };
  return (
    <nav className="navbar is-info" style={{ justifyContent: "center" }}>
      <div className="navbar-item">
        <DateFilter
          date={dateFrom}
          icon="sign-in-alt"
          onDateChange={handleDateChange}
        />
      </div>
      <div className="navbar-item">
        <DateFilter
          date={dateTo}
          icon="sign-out-alt"
          onDateChange={handleDateChange}
        />
      </div>
      <div className="navbar-item">
        <OptionsFilter
          onOptionsChange={handleOptionsChange}
          options={[
            { value: undefined, name: "Todos los países" },
            { value: "Argentina", name: "Argentina" },
            { value: "Brasil", name: "Brasil" },
            { value: "Chile", name: "Chile" },
            { value: "Uruguay", name: "Uruguay" },
          ]}
          selected={country}
          icon="globe"
        />
      </div>
      <div className="navbar-item">
        <OptionsFilter
          onOptionsChange={handleOptionsChange}
          options={[
            { value: undefined, name: "Cualquier precio" },
            { value: 1, name: "$" },
            { value: 2, name: "$$" },
            { value: 3, name: "$$$" },
            { value: 4, name: "$$$$" },
          ]}
          selected={price}
          icon="dollar-sign"
        />
      </div>
      <div className="navbar-item">
        <OptionsFilter
          onOptionsChange={handleOptionsChange}
          options={[
            { value: undefined, name: "Cualquier tamaño" },
            { value: 10, name: "Hotel pequeño" },
            { value: 20, name: "Hotel mediano" },
            { value: 30, name: "Hotel grande" },
          ]}
          selected={rooms}
          icon="bed"
        />
      </div>
    </nav>
  );
}
