import React from 'react';
import {Button} from 'bloomer';

export default (props) => {
  const {
    className,
    isLockStatus,
    isRounded,
    isDisabled,
    ...otherProps
  } = props;

  const onClick = e => {
    if (isDisabled) {
      e.stopPropagation();
      e.preventDefault();
    }
 else if (typeof otherProps.onClick === 'function') {
      otherProps.onClick(e);
    }
  };

  return (
    <Button
      onClick={onClick}
      className={`${className || ''} is-lock-status-${isLockStatus || 'open'} ${isRounded ? 'is-rounded' : ''} ${isDisabled ? 'is-disabled' : ''}`}
      {...otherProps} />
  );
};
