import React from "react";
import PropTypes from "prop-types";

function Error({ error, errorText }) {
  return error ? <div className="error">{errorText}</div> : null;
}

Error.defaultProps = {
  error: false,
  errorText: "",
};

Error.propTypes = {
  error: PropTypes.bool,
  errorText: PropTypes.string,
};

export default Error;
