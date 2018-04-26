import React from 'react';
import {Box} from 'bloomer';

const BoxContainer = (props) => {
  const {
    isActive,
    ...otherProps
  } = props;
  return (
    <Box
      className={`${props.className || ''} ${isActive ? 'is-active' : ''}`}
      {...otherProps} />
  );
};


export default BoxContainer;
