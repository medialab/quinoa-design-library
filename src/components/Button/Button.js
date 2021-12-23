import React from 'react';
import {Button} from 'bloomer';

export default (props) => {
  const {
    className,
    isLockStatus,
    isRounded,
    isDisabled,
    onClick,
    ...otherProps
  } = props;

  const handleClick = e => {
    if (isDisabled) {
      e.stopPropagation();
      e.preventDefault();
    }
    else if (typeof onClick === 'function') {
      onClick(e);
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={`${className || ''} is-lock-status-${isLockStatus || 'open'} ${isRounded ? 'is-rounded' : ''} ${isDisabled ? 'is-disabled' : ''}`}
      {...otherProps} />
  );
};
