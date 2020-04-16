import React from "react";

export default function DateFilter({ date, icon, name, onDateChange }) {
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
          value={date}
          name={name}
        />
        <span className="icon is-small is-left">
          <i className="fas"></i>
        </span>
      </div>
    </div>
  );
}
