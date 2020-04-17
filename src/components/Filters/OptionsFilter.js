import React from "react";

export default function OptionFilter({
  options,
  selected,
  icon,
  name,
  onOptionsChange,
}) {
  const handleOptionsChange = (event) => {
    onOptionsChange(event);
  };
  return (
    <div className="field">
      <div className="control has-icons-left">
        <div className="select" style={{ width: "100%" }}>
          <select style={{ width: "100%" }} onChange={handleOptionsChange}>
            {options &&
              options.map((option) => {
                return <option value={option.value}>{option.name}</option>;
              })}
          </select>
        </div>
        <div className="icon is-small is-left">
          <i className="fas"></i>
        </div>
      </div>
    </div>
  );
}
