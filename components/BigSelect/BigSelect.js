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

var BigSelect = function BigSelect(_ref) {
  var _ref$options = _ref.options,
      options = _ref$options === undefined ? [] : _ref$options,
      activeOptionId = _ref.activeOptionId,
      onChange = _ref.onChange;

  return _react2.default.createElement(
    _index.Grid,
    null,
    options.map(function (option, index) {
      var onClick = function onClick(e) {
        e.stopPropagation();
        onChange(option.id);
      };
      return _react2.default.createElement(
        _index.Box,
        { onClick: onClick, key: index, style: { textAlign: 'center' }, isActive: activeOptionId === option.id },
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