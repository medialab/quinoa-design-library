'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AbsoluteContainer = function AbsoluteContainer(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      children = _ref.children;

  return _react2.default.createElement(
    'div',
    {
      className: 'absolute-container ' + className,
      style: style },
    children
  );
};

AbsoluteContainer.propTypes = {
  style: _propTypes2.default.obj,
  className: _propTypes2.default.string
};

exports.default = AbsoluteContainer;