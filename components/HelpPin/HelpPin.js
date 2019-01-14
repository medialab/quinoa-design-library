'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../index');

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _faQuestionCircle = require('@fortawesome/free-solid-svg-icons/faQuestionCircle');

var _reactTooltip = require('react-tooltip');

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HelpPin = function HelpPin(_ref) {
  var children = _ref.children,
      place = _ref.place,
      type = _ref.type,
      _ref$effect = _ref.effect,
      effect = _ref$effect === undefined ? 'solid' : _ref$effect;
  return _react2.default.createElement(
    'span',
    {
      style: { position: 'relative' },
      'data-tip': children,
      'data-for': 'help-tooltip',
      'data-type': type,
      'data-place': place,
      'data-effect': effect },
    _react2.default.createElement(
      _index.Icon,
      null,
      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _faQuestionCircle.faQuestionCircle })
    ),
    _react2.default.createElement(_reactTooltip2.default, { id: 'help-tooltip' })
  );
};

HelpPin.propTypes = {
  place: _propTypes2.default.string,
  type: _propTypes2.default.string,
  effect: _propTypes2.default.string
};

exports.default = HelpPin;