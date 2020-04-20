import React from "react";

import DateFilter from "./DateFilter";
import OptionsFilter from "./OptionsFilter";

const Filters = ({filters, dateLimits, onFilterChange, countries, prices, rooms}) => {
  const { dateFrom, dateTo } = filters;
  console.log(countries, rooms, prices);
  const handleOptionsChange = (event) => {
    const payload = filters;
    payload[event.target.name] = event.target.value;
    onFilterChange(payload);
  };
  const handleDateChange = (event) => {
    const payload = filters;
    payload[event.target.name] = event.target.value;
    onFilterChange(payload);
  };
  return (
    <nav className="navbar is-info" style={{ justifyContent: "center" }}>
      <div className="navbar-item">
        <DateFilter
          name={"dateFrom"}
          date={dateFrom}
          icon="fa-sign-in-alt"
          onDateChange={handleDateChange}
          dateLimits={dateLimits.dateFrom}
        />
      </div>
      <div className="navbar-item">
        <DateFilter
          name={"dateTo"}
          date={dateTo}
          icon="fa-sign-out-alt"
          onDateChange={handleDateChange}
          dateLimits={dateLimits.dateTo}
        />
      </div>
      <div className="navbar-item">
        <OptionsFilter
          onOptionsChange={handleOptionsChange}
          name={"country"}
          options={[
            { value: null, name: "Todos los países" },
            { value: "Argentina", name: "Argentina" },
            { value: "Brasil", name: "Brasil" },
            { value: "Chile", name: "Chile" },
            { value: "Uruguay", name: "Uruguay" },
          ]}
          icon="globe"
        />
      </div>
      <div className="navbar-item">
        <OptionsFilter
          onOptionsChange={handleOptionsChange}
          name={"price"}
          options={[
            { value: null, name: "Cualquier precio" },
            { value: 1, name: "$" },
            { value: 2, name: "$$" },
            { value: 3, name: "$$$" },
            { value: 4, name: "$$$$" },
          ]}
          icon="dollar-sign"
        />
      </div>
      <div className="navbar-item">
        <OptionsFilter
          onOptionsChange={handleOptionsChange}
          name={"rooms"}
          options={[
            { value: null, name: "Cualquier tamaño" },
            { value: 10, name: "Hotel pequeño" },
            { value: 20, name: "Hotel mediano" },
            { value: 30, name: "Hotel grande" },
          ]}
          icon="bed"
        />
      </div>
    </nav>
  );
};

export default Filters;
