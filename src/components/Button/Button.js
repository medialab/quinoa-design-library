import React from 'react';
import {Button} from 'bloomer';

export default (props) => {
  const {
    className,
    isLockStatus,
    isRounded,
    ...otherProps
  } = props;

  return (
    <Button
      className={`${className || ''} is-lock-status-${isLockStatus || 'open'} ${isRounded ? 'is-rounded' : ''}`}
      {...otherProps} />
  );
};
