'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _bloomer = require('bloomer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var DropdownContainer = function DropdownContainer(_ref) {
  var value = _ref.value,
      onToggle = _ref.onToggle,
      onChange = _ref.onChange,
      _ref$isActive = _ref.isActive,
      isActive = _ref$isActive === undefined ? false : _ref$isActive,
      _ref$options = _ref.options,
      options = _ref$options === undefined ? [] : _ref$options,
      children = _ref.children;

  var handleAction = function handleAction(id) {
    if (typeof onChange === 'function') {
      onChange(id);
      onToggle();
    }
  };
  var isNested = options.length && Array.isArray(options[0]);

  var renderOption = function renderOption(option, index) {
    var onClick = function onClick(e) {
      e.stopPropagation();
      e.preventDefault();
      handleAction(option.id);
    };
    return _react2.default.createElement(
      _bloomer.DropdownItem,
      {
        href: '#', key: option.id + index, isActive: option.id === value.id,
        onClick: onClick },
      option.label
    );
  };
  return _react2.default.createElement(
    _bloomer.Dropdown,
    { isActive: isActive },
    _react2.default.createElement(
      _bloomer.DropdownTrigger,
      null,
      _react2.default.createElement(
        _Button2.default,
        {
          onClick: onToggle, isOutlined: true, 'aria-haspopup': 'true',
          'aria-controls': 'dropdown-menu' },
        children ? children : _react2.default.createElement(
          'span',
          null,
          value && value.label
        ),
        _react2.default.createElement(_bloomer.Icon, { icon: 'angle-down', isSize: 'small' })
      )
    ),
    _react2.default.createElement(
      _bloomer.DropdownMenu,
      null,
      _react2.default.createElement(
        _bloomer.DropdownContent,
        null,
        isNested ? options.reduce(function (result, optionGroup, index) {
          return [].concat(_toConsumableArray(result), _toConsumableArray(optionGroup.map(renderOption)), [index < options.length - 1 ? _react2.default.createElement(_bloomer.DropdownDivider, { key: index }) : null]);
        }, []) : options.map(renderOption)
      )
    )
  );
};

DropdownContainer.propTypes = {
  isActive: _propTypes2.default.bool,
  onChange: _propTypes2.default.func.isRequired,
  onToggle: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.shape({
    id: _propTypes2.default.string,
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
  }),
  options: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.shape({
    label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    id: _propTypes2.default.string
  }), _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    id: _propTypes2.default.string
  }))]))
};

exports.default = DropdownContainer;