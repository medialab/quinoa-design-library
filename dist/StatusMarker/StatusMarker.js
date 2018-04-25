'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTooltip = require('react-tooltip');

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatusMarker = function StatusMarker(_ref) {
  var lockStatus = _ref.lockStatus,
      statusMessage = _ref.statusMessage;

  var computedType = void 0;
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
  return _react2.default.createElement(
    'span',
    { className: 'status-marker is-lock-status-' + lockStatus, 'data-for': 'status-marker', 'data-tip': statusMessage },
    _react2.default.createElement(_reactTooltip2.default, {
      place: 'right',
      effect: 'solid',
      id: 'status-marker',
      type: computedType })
  );
};

StatusMarker.propTypes = {
  lockStatus: _propTypes2.default.oneOf(['open', 'locked', 'asked', 'idle', 'active']),
  statusMessage: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.array])
};

exports.default = StatusMarker;