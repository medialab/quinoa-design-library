import React from 'react';

export default ({
  isCollapsed = false,
  maxHeight,
  children
}) => {
  const style = {
    maxHeight: !isCollapsed && maxHeight ? maxHeight : undefined
  };
  return (
    <div style={style} className={`collapsable ${isCollapsed ? 'is-collapsed' : ''}`}>
      {children}
    </div>
  );
};
