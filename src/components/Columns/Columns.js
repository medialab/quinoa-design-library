import React from 'react';
import {Columns} from 'bloomer';

export default (props) => {
  const {
    className,
    isFullHeight,
    ...otherProps
  } = props;

  return (
    <Columns
      className={`${className || ''} ${isFullHeight ? 'is-fullheight' : ''}`}
      {...otherProps} />
  );
};
