'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcSlider = require('rc-slider');

var _rcSlider2 = _interopRequireDefault(_rcSlider);

var _rcTooltip = require('rc-tooltip');

var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

var _fp = require('lodash/fp');

require('rc-slider/assets/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VisibleHandle = function VisibleHandle(props) {
  return _react2.default.createElement(
    _rcTooltip2.default,
    {
      prefixCls: 'rc-slider-tooltip',
      overlay: props.value,
      visible: true,
      placement: 'bottom',
      key: props.index },
    _react2.default.createElement(_rcSlider.Handle, (0, _fp.omit)(['dragging'], props))
  );
};

var Slider = function Slider(props) {
  return _react2.default.createElement(_rcSlider2.default, _extends({}, props, { className: 'quinoa-slider', handle: VisibleHandle }));
};

exports.default = (0, _rcSlider.createSliderWithTooltip)(Slider);