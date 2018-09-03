import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon
} from 'bloomer';


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
      style={style}>
      <Icon
        data-for="tooltip"
        data-tip={statusMessage}
        // data-type={computedType}
        data-place="right"
        style={{display: 'inline'}}
        icon={'circle'} />

      {/*<Icon
        style={{display: ['locked', 'active'].indexOf(lockStatus) > -1 ? 'none' : 'inline'}}
        className={'fa fa-unlock'} />*/}

    </span>
  );
};

StatusMarker.propTypes = {
  lockStatus: PropTypes.oneOf(['open', 'locked', 'asked', 'idle', 'active']),
  statusMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array])
};

export default StatusMarker;
