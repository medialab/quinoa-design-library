'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlexContainer = function FlexContainer(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      children = _ref.children,
      flexDirection = _ref.flexDirection,
      flexWrap = _ref.flexWrap,
      alignItems = _ref.alignItems,
      justifyContent = _ref.justifyContent;


  var finalStyle = _extends({
    flexDirection: flexDirection,
    alignItems: alignItems,
    flexWrap: flexWrap,
    justifyContent: justifyContent
  }, style);

  return _react2.default.createElement(
    'div',
    {
      className: 'flex-container ' + className,
      style: finalStyle },
    children
  );
};

FlexContainer.propTypes = {
  style: _propTypes2.default.object,
  flexDirection: _propTypes2.default.string,
  flexWrap: _propTypes2.default.string,
  alignItems: _propTypes2.default.string,
  justifyContent: _propTypes2.default.string,
  className: _propTypes2.default.string
};

exports.default = FlexContainer;