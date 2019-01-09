'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StretchedLayoutItem = function StretchedLayoutItem(_ref, ref) {
  var children = _ref.children,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      isFlex = _ref.isFlex,
      isFlowing = _ref.isFlowing,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      isFluid = _ref.isFluid,
      id = _ref.id;
  return _react2.default.createElement(
    'div',
    {
      ref: ref,
      id: id,
      className: 'stretched-layout-item ' + className + ' ' + (isFlowing ? 'is-flowing' : '') + ' ' + (isFluid ? 'is-fluid' : ''), style: _extends({
        flex: isFlex !== undefined ? isFlex : undefined
      }, style) },
    children
  );
};

exports.default = (0, _react.forwardRef)(StretchedLayoutItem);