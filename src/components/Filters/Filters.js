import React from "react";

import DateFilter from "./DateFilter";
import OptionsFilter from "./OptionsFilter";

const Filters = (props) => {
  const {
    dateFrom,
    dateTo,
    country,
    price,
    rooms,
  } = props.filters;
  const {onFilterChange} = props;
  const handleOptionsChange = (event) => {
    const payload = props.filters;
    payload[event.target.name] = event.target.value;
    onFilterChange(payload);
  };
  const handleDateChange = (event) => {
    const payload = props.filters;
    payload[event.target.name] = event.target.value;
    onFilterChange(payload);
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

export default Filters;