import React from "react";
import PropTypes from "prop-types";

const Error = ({ message, type }) => {
  return (
    <div className="columns is-mobile">
      <div className="column is-half is-offset-one-quarter">
        <article className={"message is-" + type}>
          <div className="message-body">{message} </div>
        </article>
      </div>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["warning", "danger"]),
};

export default Error;
