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

var ModalCardContainer = function ModalCardContainer(_ref) {
  var headerContent = _ref.headerContent,
      mainContent = _ref.mainContent,
      footerContent = _ref.footerContent,
      _ref$isActive = _ref.isActive,
      isActive = _ref$isActive === undefined ? false : _ref$isActive,
      onClose = _ref.onClose;

  return _react2.default.createElement(
    _bloomer.Modal,
    { isActive: isActive },
    _react2.default.createElement(_bloomer.ModalBackground, null),
    _react2.default.createElement(
      _bloomer.ModalCard,
      null,
      _react2.default.createElement(
        _bloomer.ModalCardHeader,
        null,
        _react2.default.createElement(
          _bloomer.ModalCardTitle,
          null,
          headerContent
        ),
        _react2.default.createElement(_bloomer.Delete, { onClick: onClose })
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
  );
};

ModalCardContainer.propTypes = {
  headerContent: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]))]),
  mainContent: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]))]),
  footerContent: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])),
  isActive: _propTypes2.default.bool
};

exports.default = ModalCardContainer;