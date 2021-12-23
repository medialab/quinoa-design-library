import {Icon} from 'bloomer';
import React from 'react';

const CustomIcon = ({
  children,
  isSize,
  ...props,
}) => {
  if (children) {
    return <span className={`icon custom-icon is-size-${isSize}`}>{children}</span>;
  }
  return <Icon isSize={isSize} {...props} />;
};

export default CustomIcon;
