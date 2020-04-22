import React from "react";

import DateFilter from "./DateFilter";
import OptionsFilter from "./OptionsFilter";
import Moment from "moment";

const Filters = ({
  filters,
  dateLimits,
  onFilterChange,
  countries,
  prices,
  rooms,
}) => {
  const { dateFrom, dateTo } = filters;
  const handleOptionsChange = (event) => {
    const payload = filters;
    payload[event.target.name] = event.target.name === "country" ? event.target.value : +event.target.value;
    console.log(payload);
    onFilterChange(payload);
  };
  const handleDateChange = (event) => {
    const payload = filters;
    payload[event.target.name] = Moment(event.target.value, "YYYY-MM-DD");
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
          options={countries}
          icon={"fa-globe"}
        />
      </div>
      <div className="navbar-item">
        <OptionsFilter
          onOptionsChange={handleOptionsChange}
          name={"price"}
          options={prices}
          icon={"fa-dollar-sign"}
        />
      </div>
      <div className="navbar-item">
        <OptionsFilter
          onOptionsChange={handleOptionsChange}
          name={"rooms"}
          options={rooms}
          icon={"fa-bed"}
        />
      </div>
    </nav>
  );
};

export default Filters;
