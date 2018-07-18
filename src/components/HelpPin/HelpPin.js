import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
} from 'bloomer';

import ReactTooltip from 'react-tooltip';

const HelpPin = ({
  children,
  place,
  type,
  effect = 'solid'
}) =>
  (<span
    style={{position: 'relative'}}
    data-tip={children}
    data-for="help-tooltip"
    data-type={type}
    data-place={place}
    data-effect={effect}>
    <Icon
      className="fa fa-question-circle" />
    <ReactTooltip id="help-tooltip" />
  </span>);


HelpPin.propTypes = {
  place: PropTypes.string,
  type: PropTypes.string,
  effect: PropTypes.string,
};

export default HelpPin;
