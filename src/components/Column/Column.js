import React from 'react';
import {Column} from 'bloomer';

export default (props) => {
  const {
    className,
    isWrapper,
    ...otherProps
  } = props;

  return (
    <Column
      className={`${className || ''} ${isWrapper ? 'is-wrapper' : ''}`}
      {...otherProps} />
  );
};
