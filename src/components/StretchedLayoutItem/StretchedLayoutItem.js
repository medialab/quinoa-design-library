import React from 'react';

const StretchedLayoutItem = ({
  children,
  style = {},
  isFlex,
  isFlowing,
  className = '',
  isFluid
}) => (
  <div
    className={`stretched-layout-item ${className} ${isFlowing ? 'is-flowing' : ''} ${isFluid ? 'is-fluid' : ''}`} style={{
    flex: isFlex !== undefined ? isFlex : undefined,
    ...style,
  }}>
    {children}
  </div>
);

export default StretchedLayoutItem;
