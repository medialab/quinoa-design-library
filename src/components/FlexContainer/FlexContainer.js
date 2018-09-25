import React from 'react';
import PropTypes from 'prop-types';

const FlexContainer = ({
  className = '',
  style = {},
  children,
  flexDirection,
  flexWrap,
  alignItems,
  justifyContent,
}) => {

  const finalStyle = {
    flexDirection,
    alignItems,
    flexWrap,
    justifyContent,
    ...style,
  };

  return (
    <div
      className={`flex-container ${className}`}
      style={finalStyle}>
      {children}
    </div>
  );
};

FlexContainer.propTypes = {
  style: PropTypes.obj,
  flexDirection: PropTypes.string,
  flexWrap: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  className: PropTypes.string,
};

export default FlexContainer;
