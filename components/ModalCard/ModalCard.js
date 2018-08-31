'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bloomer = require('bloomer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalCardContainer = function (_Component) {
  _inherits(ModalCardContainer, _Component);

  function ModalCardContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ModalCardContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ModalCardContainer.__proto__ || Object.getPrototypeOf(ModalCardContainer)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      setTimeout(function () {
        if (_this.props.isActive && _this.modal) {
          var inputs = _this.modal.getElementsByTagName('input');
          if (inputs && inputs.length) {
            inputs[0].focus();
          }
        }
      });
    }, _this.componentWillReceiveProps = function (nextProps) {
      if (!_this.props.isActive && nextProps.isActive && _this.modal) {
        var inputs = _this.modal.getElementsByTagName('input');
        if (inputs && inputs.length) {
          inputs[0].focus();
        }
      }
    }, _this.render = function () {
      var _this2 = _this,
          _this2$props = _this2.props,
          headerContent = _this2$props.headerContent,
          mainContent = _this2$props.mainContent,
          footerContent = _this2$props.footerContent,
          _this2$props$isActive = _this2$props.isActive,
          isActive = _this2$props$isActive === undefined ? false : _this2$props$isActive,
          onClose = _this2$props.onClose,
          _this2$props$style = _this2$props.style,
          style = _this2$props$style === undefined ? {} : _this2$props$style;

      var bindRef = function bindRef(modal) {
        _this.modal = modal;
      };
      return _react2.default.createElement(
        'div',
        { ref: bindRef },
        _react2.default.createElement(
          _bloomer.Modal,
          { isActive: isActive },
          _react2.default.createElement(_bloomer.ModalBackground, { onClick: onClose }),
          _react2.default.createElement(
            _bloomer.ModalCard,
            { style: style },
            _react2.default.createElement(
              _bloomer.ModalCardHeader,
              null,
              _react2.default.createElement(
                _bloomer.ModalCardTitle,
                null,
                headerContent
              ),
              typeof onClose === 'function' && _react2.default.createElement(_bloomer.Delete, { onClick: onClose })
            ),
            _react2.default.createElement(
              _bloomer.ModalCardBody,
              null,
              mainContent
            ),
            footerContent && _react2.default.createElement(
              _bloomer.ModalCardFooter,
              null,
              footerContent
            )
          )
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return ModalCardContainer;
}(_react.Component);

ModalCardContainer.propTypes = {
  headerContent: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]))]),
  mainContent: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]))]),
  footerContent: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])),
  isActive: _propTypes2.default.bool
};

exports.default = ModalCardContainer;