import React from 'react';


export default ({
  children,
  isDirection = 'vertical',
  style = {},
  isAbsolute = false,
  isFlowing,
  isFluid,
  isOverflowVisible,
  className = ''
}) =>
  (<div style={style} className={`stretched-layout-container ${className} is-direction-${isDirection} ${isAbsolute ? 'is-absolute' : ''} ${isFlowing ? 'is-flowing' : ''} ${isFluid ? 'is-fluid' : ''} ${isOverflowVisible ? 'is-overflow-visible' : ''}`}>
    {children}
  </div>);
