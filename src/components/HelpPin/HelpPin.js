import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
} from 'bloomer';

import Tooltip from 'react-tooltip';

const HelpPin = ({
  children,
  place,
  type,
  effect = 'solid'
}) =>
  (<span>
    <Icon data-tip={children} data-for="help-pin" className="fa fa-question-circle" />
    <Tooltip
      place={place}
      type={type}
      effect={effect}
      id="help-pin" />
  </span>);


HelpPin.propTypes = {
  place: PropTypes.string,
  type: PropTypes.string,
  effect: PropTypes.string,
};

export default HelpPin;
