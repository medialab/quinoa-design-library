'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BigSelect = function BigSelect(_ref) {
  var _ref$options = _ref.options,
      options = _ref$options === undefined ? [] : _ref$options,
      activeOptionId = _ref.activeOptionId,
      _ref$columns = _ref.columns,
      columns = _ref$columns === undefined ? 2 : _ref$columns,
      onChange = _ref.onChange,
      style = _ref.style,
      _ref$boxStyle = _ref.boxStyle,
      boxStyle = _ref$boxStyle === undefined ? {} : _ref$boxStyle;

  return _react2.default.createElement(
    _index.Grid,
    { columns: columns, style: style },
    options.map(function (option, index) {
      var onClick = function onClick(e) {
        e.stopPropagation();
        onChange(option.id);
      };
      return _react2.default.createElement(
        _index.Box,
        {
          onClick: onClick,
          key: index,
          isActive: activeOptionId === option.id,
          style: _extends({ textAlign: 'center' }, boxStyle) },
        option.iconUrl && _react2.default.createElement(
          'div',
          { style: { textAlign: 'center' } },
          _react2.default.createElement(_index.Image, { style: { display: 'inline-block' }, isSize: '64x64', src: option.iconUrl })
        ),
        option.label
      );
    })
  );
};

BigSelect.propTypes = {
  onChange: _propTypes2.default.func,
  activeOptionId: _propTypes2.default.string,
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string,
    label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array, _propTypes2.default.element]),
    iconUrl: _propTypes2.default.string
  }))
};

exports.default = BigSelect;