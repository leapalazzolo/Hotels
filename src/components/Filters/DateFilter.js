import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

const DateFilter = ({ date, icon, name, onDateChange, dateLimits }) => {
  const handleDateChange = (event) => {
    onDateChange(event);
  };
  return (
    <div className="field">
      <div className="control has-icons-left">
        <input
          className="input"
          type="date"
          onChange={handleDateChange}
          value={Moment(date).format("YYYY-MM-DD")}
          min={Moment(dateLimits.min).format("YYYY-MM-DD")}
          max={Moment(dateLimits.max).format("YYYY-MM-DD")}
          name={name}
        />
        <span className="icon is-small is-left">
          <i className={`fas fa-${icon}`}></i>
        </span>
      </div>
    </div>
  );
};

DateFilter.propTypes = {
  date: PropTypes.instanceOf(Moment).isRequired,
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  onDateChange: PropTypes.func.isRequired,
  dateLimits: PropTypes.object.isRequired,
};

export default DateFilter;