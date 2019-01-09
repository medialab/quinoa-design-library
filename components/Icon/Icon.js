'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bloomer = require('bloomer');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CustomIcon = function CustomIcon(_ref) {
  var children = _ref.children,
      isSize = _ref.isSize,
      props = _objectWithoutProperties(_ref, ['children', 'isSize']);

  if (children) {
    return _react2.default.createElement(
      'span',
      { className: 'icon custom-icon is-size-' + isSize },
      children
    );
  }
  return _react2.default.createElement(_bloomer.Icon, _extends({ isSize: isSize }, props));
};

exports.default = CustomIcon;