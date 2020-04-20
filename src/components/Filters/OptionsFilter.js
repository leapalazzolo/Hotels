import React from "react";
import PropTypes from "prop-types";

const OptionFilter = ({ options, icon, name, onOptionsChange }) => {
  const handleOptionsChange = (event) => {
    onOptionsChange(event);
  };
  return (
    <div className="field">
      <div className="control has-icons-left">
        <div className="select" style={{ width: "100%" }}>
          <select
            name={name}
            style={{ width: "100%" }}
            onChange={handleOptionsChange}
          >
            {options &&
              options.map((option) => {
                return (
                  <option
                    key={`${option.value}${option.name}`}
                    value={option.value || ""}
                  >
                    {option.name}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="icon is-small is-left">
          <i className={`fas ${icon}`}></i>
        </div>
      </div>
    </div>
  );
};

OptionFilter.propTypes = {
  options: PropTypes.array.isRequired,
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  onOptionsChange: PropTypes.func.isRequired,
};
export default OptionFilter;
