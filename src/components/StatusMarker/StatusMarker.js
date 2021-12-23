import React from 'react';
import PropTypes from 'prop-types';


const StatusMarker = ({
  lockStatus,
  statusMessage,
  style,
}) => {
  // let computedType;
  // switch (lockStatus) {
  //   case 'open':
  //     computedType = 'light';
  //     break;
  //   case 'active':
  //     computedType = 'success';
  //     break;
  //   case 'locked':
  //     computedType = 'info';
  //     break;
  //   case 'asked':
  //     computedType = 'light';
  //     break;
  //   case 'idle':
  //   default:
  //     computedType = 'light';
  //     break;

  // }
  return (
    <span
      className={`status-marker is-lock-status-${lockStatus}`}
      data-for="tooltip"
      data-tip={statusMessage}
        // data-type={computedType}
      data-place="right"
      style={style}>
      ●

    </span>
  );
};

StatusMarker.propTypes = {
  lockStatus: PropTypes.oneOf(['open', 'locked', 'asked', 'idle', 'active']),
  statusMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array])
};

export default StatusMarker;
