'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactColor = require('react-color');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorPicker = function (_Component) {
  _inherits(ColorPicker, _Component);

  function ColorPicker(props) {
    _classCallCheck(this, ColorPicker);

    var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this, props));

    _this.componentWillReceiveProps = function (nextProps) {
      if (_this.props.color !== nextProps.color) {
        _this.setState({ color: nextProps.color });
      }
    };

    _this.setEdited = function (edited) {
      _this.setState({ edited: edited });
      if (typeof _this.props.onEdit === 'function' && edited) {
        _this.props.onEdit();
      }
    };

    _this.toggleEdited = function (e) {
      e.stopPropagation();
      e.preventDefault();
      _this.setEdited(!_this.state.edited);
    };

    _this.onChange = function (_ref) {
      var hex = _ref.hex;

      if (typeof _this.props.onChange === 'function') {
        _this.props.onChange(hex);
      }
    };

    _this.render = function () {
      var _this$state = _this.state,
          edited = _this$state.edited,
          color = _this$state.color,
          toggleEdited = _this.toggleEdited,
          onChange = _this.onChange;


      return _react2.default.createElement(
        'div',
        { style: { position: 'relative' } },
        _react2.default.createElement(
          'button',
          { className: 'button', onClick: toggleEdited },
          _react2.default.createElement('span', { style: {
              width: '1em',
              height: '1em',
              background: color
            } })
        ),
        edited && _react2.default.createElement(
          'div',
          { style: { position: 'absolute' } },
          _react2.default.createElement(_reactColor.SwatchesPicker, {
            color: color,
            onChange: onChange })
        )
      );
    };

    _this.state = {
      edited: false,
      color: props.color
    };
    return _this;
  }

  return ColorPicker;
}(_react.Component);

ColorPicker.propTypes = {
  edited: _propTypes2.default.bool,
  value: _propTypes2.default.string,
  onEdit: _propTypes2.default.func,
  onChange: _propTypes2.default.func
};
exports.default = ColorPicker;