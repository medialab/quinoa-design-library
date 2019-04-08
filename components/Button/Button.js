'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bloomer = require('bloomer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = _react2.default.forwardRef(function (props, ref) {
  var className = props.className,
      isLockStatus = props.isLockStatus,
      isRounded = props.isRounded,
      isDisabled = props.isDisabled,
      onClick = props.onClick,
      otherProps = _objectWithoutProperties(props, ['className', 'isLockStatus', 'isRounded', 'isDisabled', 'onClick']);

  var handleClick = function handleClick(e) {
    if (isDisabled) {
      e.stopPropagation();
      e.preventDefault();
    } else if (typeof onClick === 'function') {
      onClick(e);
    }
  };

  return _react2.default.createElement(_bloomer.Button, _extends({
    ref: ref,
    onClick: handleClick,
    className: (className || '') + ' is-lock-status-' + (isLockStatus || 'open') + ' ' + (isRounded ? 'is-rounded' : '') + ' ' + (isDisabled ? 'is-disabled' : '')
  }, otherProps));
});