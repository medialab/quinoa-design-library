import React from 'react';

export default ({
  isCollapsed = false,
  maxHeight,
  children,
  paddingBottom = 0
}) => {
  const style = {
    maxHeight: !isCollapsed && maxHeight ? maxHeight : undefined,
    paddingBottom: !isCollapsed ? paddingBottom : undefined
  };
  return (
    <div style={style} className={`collapsable ${isCollapsed ? 'is-collapsed' : ''}`}>
      {children}
    </div>
  );
};
