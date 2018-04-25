import React from 'react';
import PropTypes from 'prop-types';

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
