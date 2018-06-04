import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon
} from 'bloomer';

import ReactTooltip from 'react-tooltip';

const StatusMarker = ({
  lockStatus,
  statusMessage
}) => {
  let computedType;
  switch (lockStatus) {
    case 'open':
      computedType = 'info';
      break;
    case 'active':
      computedType = 'success';
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
    <span className={`status-marker is-lock-status-${lockStatus}`} data-for="status-marker" data-tip={statusMessage}>
      <Icon style={{display: ['locked', 'active'].indexOf(lockStatus) > -1 ? 'inline' : 'none'}} data-tip={computedType} className={'fa fa-lock'} />
      <Icon style={{display: ['locked', 'active'].indexOf(lockStatus) > -1 ? 'none' : 'inline'}} data-tip={computedType} className={'fa fa-unlock'} />
      <ReactTooltip
        place="right"
        effect="solid"
        id="status-marker"
        type={computedType} />
    </span>
  );
};

StatusMarker.propTypes = {
  lockStatus: PropTypes.oneOf(['open', 'locked', 'asked', 'idle', 'active']),
  statusMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array])
};

export default StatusMarker;
