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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BigSelect = function BigSelect(_ref) {
  var _ref$options = _ref.options,
      options = _ref$options === undefined ? [] : _ref$options,
      activeOptionId = _ref.activeOptionId,
      _ref$columns = _ref.columns,
      columns = _ref$columns === undefined ? 2 : _ref$columns,
      minHeight = _ref.minHeight,
      onChange = _ref.onChange,
      style = _ref.style,
      boxStyle = _ref.boxStyle;

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
        _defineProperty({
          onClick: onClick,
          key: index,
          style: { textAlign: 'center' },
          isActive: activeOptionId === option.id
        }, 'style', boxStyle),
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