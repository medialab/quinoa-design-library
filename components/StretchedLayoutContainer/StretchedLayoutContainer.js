'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children,
      _ref$isDirection = _ref.isDirection,
      isDirection = _ref$isDirection === undefined ? 'vertical' : _ref$isDirection,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      _ref$isAbsolute = _ref.isAbsolute,
      isAbsolute = _ref$isAbsolute === undefined ? false : _ref$isAbsolute,
      isFlowing = _ref.isFlowing,
      isFluid = _ref.isFluid,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;
  return _react2.default.createElement(
    'div',
    { style: style, className: 'stretched-layout-container ' + className + ' is-direction-' + isDirection + ' ' + (isAbsolute ? 'is-absolute' : '') + ' ' + (isFlowing ? 'is-flowing' : '') + ' ' + (isFluid ? 'is-fluid' : '') },
    children
  );
};