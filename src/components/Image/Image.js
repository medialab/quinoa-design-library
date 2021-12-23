import React from 'react';
import {Image} from 'bloomer';

export default (props) => {
  const {
    className,
    isLockStatus,
    isRounded,
    ...otherProps
  } = props;
  return (
    <Image
      className={`${className} is-lock-status-${isLockStatus || 'open'} ${isRounded ? 'is-rounded' : ''}`}
      {...otherProps} />
  );
};
