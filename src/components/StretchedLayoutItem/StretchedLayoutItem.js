import React, {forwardRef} from 'react';

const StretchedLayoutItem = ({
  children,
  style = {},
  isFlex,
  isFlowing,
  className = '',
  isFluid,
  id
}, ref) => (
  <div
    ref={ref}
    id={id}
    className={`stretched-layout-item ${className} ${isFlowing ? 'is-flowing' : ''} ${isFluid ? 'is-fluid' : ''}`} style={{
    flex: isFlex !== undefined ? isFlex : undefined,
    ...style,
  }}>
    {children}
  </div>
);

export default forwardRef(StretchedLayoutItem);
