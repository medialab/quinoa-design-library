'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCodemirror = require('react-codemirror2');

var _lodash = require('lodash');

require('codemirror/lib/codemirror.css');

require('codemirror/mode/javascript/javascript');

require('codemirror/mode/xml/xml');

require('codemirror/mode/css/css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TRIGGER_DEBOUNCE_DELAY = 500;

var CodeEditor = function (_Component) {
  _inherits(CodeEditor, _Component);

  function CodeEditor(props) {
    _classCallCheck(this, CodeEditor);

    var _this = _possibleConstructorReturn(this, (CodeEditor.__proto__ || Object.getPrototypeOf(CodeEditor)).call(this, props));

    _this.triggerChange = function (code) {
      if (_this.props.onChange && typeof _this.props.onChange === 'function') {
        _this.props.onChange(code);
      }
    };

    _this.onChange = function (editor, metadata, code) {
      _this.setState({
        value: code
      });
      _this.debouncedTriggerChange(code);
    };

    _this.onClick = function (e) {
      if (_this.props.onClick && typeof _this.props.onClick === 'function') {
        _this.props.onClick(e);
      }
      if (_this.props.onFocus && typeof _this.props.onFocus === 'function') {
        _this.props.onFocus(e);
      }
      e.stopPropagation();
    };

    _this.state = {
      value: props.value || ''
    };
    var delay = props.changeDelay || TRIGGER_DEBOUNCE_DELAY;
    _this.debouncedTriggerChange = (0, _lodash.debounce)(_this.triggerChange, delay);
    return _this;
  }

  _createClass(CodeEditor, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _onChange = this.onChange,
          onClick = this.onClick,
          _props = this.props,
          _props$mode = _props.mode,
          mode = _props$mode === undefined ? 'css' : _props$mode,
          _props$lineNumbers = _props.lineNumbers,
          lineNumbers = _props$lineNumbers === undefined ? true : _props$lineNumbers,
          value = this.state.value;

      return _react2.default.createElement(
        'div',
        { className: 'fonio-CodeEditor', onClick: onClick },
        _react2.default.createElement(_reactCodemirror.Controlled, {
          value: value,
          options: {
            mode: mode,
            lineNumbers: lineNumbers
          },
          onBeforeChange: function onBeforeChange(editor, data, thatValue) {
            _this2.setState({ value: thatValue }); // state management here
          },
          onChange: function onChange(editor, data, thatValue) {
            // downstream callback
            _onChange(editor, data, thatValue);
          } })
      );
    }
  }]);

  return CodeEditor;
}(_react.Component);

CodeEditor.propTypes = {
  changeDelay: _propTypes2.default.number,
  value: _propTypes2.default.string,
  mode: _propTypes2.default.string,
  lineNumbers: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onFocus: _propTypes2.default.func
};
exports.default = CodeEditor;