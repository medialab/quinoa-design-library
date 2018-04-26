'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders the DropZone component as a pure function
 * @param {object} props - used props (see prop types below)
 * @param {object} context - used context data (see context types below)
 * @return {ReactElement} component - the resulting component
 */
var DropZone = function DropZone(_ref) {
  var onDrop = _ref.onDrop,
      children = _ref.children,
      accept = _ref.accept;
  return _react2.default.createElement(
    _reactDropzone2.default,
    {
      className: 'drop-zone',
      activeClassName: 'active',
      accept: accept,
      onDrop: onDrop },
    function (_ref2) {
      var isDragActive = _ref2.isDragActive,
          isDragReject = _ref2.isDragReject;
      return _react2.default.createElement(
        'div',
        { className: 'caption-wrapper ' + (isDragActive ? 'active ' : ' ') + (isDragReject ? 'reject' : '') },
        _react2.default.createElement(
          'div',
          { className: 'caption-container' },
          children
        )
      );
    }
  );
};

/**
 * Component's properties types
 */
DropZone.propTypes = {
  onDrop: _propTypes2.default.func,
  accept: _propTypes2.default.string
};

exports.default = DropZone;