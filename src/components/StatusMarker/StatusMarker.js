import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon
} from 'bloomer';


const StatusMarker = ({
  lockStatus,
  statusMessage
}) => {
  let computedType;
  switch (lockStatus) {
    case 'open':
      computedType = 'success';
      break;
    case 'active':
      computedType = 'info';
      break;
    case 'locked':
      computedType = 'error';
      break;
    case 'asked':
      computedType = 'light';
      break;
    case 'idle':
    default:
      computedType = 'light';
      break;

  }
  return (
    <span
      className={`status-marker is-lock-status-${lockStatus}`}
      data-for="tooltip"
      data-tip={statusMessage}
      data-type={computedType}
      data-place="right"
      data-effect="solid">
      <Icon
        style={{display: ['locked', 'active'].indexOf(lockStatus) > -1 ? 'inline' : 'none'}}
        className={'fa fa-lock'} />
      <Icon
        style={{display: ['locked', 'active'].indexOf(lockStatus) > -1 ? 'none' : 'inline'}}
        className={'fa fa-unlock'} />

    </span>
  );
};

StatusMarker.propTypes = {
  lockStatus: PropTypes.oneOf(['open', 'locked', 'asked', 'idle', 'active']),
  statusMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array])
};

export default StatusMarker;
