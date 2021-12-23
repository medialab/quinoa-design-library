import React from 'react';
import PropTypes from 'prop-types';

const AbsoluteContainer = ({
  className = '',
  style = {},
  children,
}) => {
  return (
    <div
      className={`absolute-container ${className}`}
      style={style}>
      {children}
    </div>
  );
};

AbsoluteContainer.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default AbsoluteContainer;
