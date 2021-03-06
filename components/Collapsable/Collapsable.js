'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var _ref$isCollapsed = _ref.isCollapsed,
      isCollapsed = _ref$isCollapsed === undefined ? false : _ref$isCollapsed,
      maxHeight = _ref.maxHeight,
      children = _ref.children,
      _ref$paddingBottom = _ref.paddingBottom,
      paddingBottom = _ref$paddingBottom === undefined ? 0 : _ref$paddingBottom;

  var style = {
    maxHeight: !isCollapsed && maxHeight ? maxHeight : undefined,
    paddingBottom: !isCollapsed ? paddingBottom : undefined
  };
  return _react2.default.createElement(
    'div',
    { style: style, className: 'collapsable ' + (isCollapsed ? 'is-collapsed' : '') },
    children
  );
};