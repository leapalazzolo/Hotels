import React from "react";

const Error = ({ message }) => {
  return (
    <div className="columns is-mobile">
      <div className="column is-half is-offset-one-quarter">
        <div className="fa-4x" style={{ textAlign: "center" }}>
          <i className="fas fa-sync fa-spin has-text-primary"></i>
        </div>
      </div>
    </div>
  );
};

export default Error;
