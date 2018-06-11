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

var _StatusMarker = require('../StatusMarker');

var _StatusMarker2 = _interopRequireDefault(_StatusMarker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      bodyContent = _ref.bodyContent,
      icon = _ref.icon,
      _ref$footerActions = _ref.footerActions,
      footerActions = _ref$footerActions === undefined ? [] : _ref$footerActions,
      _ref$asideActions = _ref.asideActions,
      asideActions = _ref$asideActions === undefined ? [] : _ref$asideActions,
      headerContent = _ref.headerContent,
      onAction = _ref.onAction,
      lockStatus = _ref.lockStatus,
      statusMessage = _ref.statusMessage;

  var displayedLockStatus = lockStatus || 'open';
  var handleAction = function handleAction(id) {
    if (typeof onAction === 'function') {
      onAction(id);
    }
  };
  var renderContent = function renderContent() {
    return _react2.default.createElement(
      'div',
      { className: 'card-content' },
      _react2.default.createElement(
        'div',
        { className: 'media' },
        icon && _react2.default.createElement(
          'div',
          { className: 'media-left' },
          _react2.default.createElement(
            'figure',
            { className: 'image' },
            icon
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'media-content' },
          _react2.default.createElement(
            'h2',
            { className: 'title' },
            title,
            lockStatus ? _react2.default.createElement(_StatusMarker2.default, { lockStatus: lockStatus, statusMessage: statusMessage }) : null
          ),
          subtitle && _react2.default.createElement(
            'p',
            { className: 'subtitle' },
            subtitle
          )
        )
      ),
      bodyContent && _react2.default.createElement(
        'div',
        { className: 'content' },
        bodyContent
      )
    );
  };
  return _react2.default.createElement(
    'div',
    { className: 'card is-lock-status-' + displayedLockStatus },
    headerContent && _react2.default.createElement(
      'div',
      { className: 'card-image' },
      _react2.default.createElement(
        'figure',
        { className: 'image' },
        headerContent
      )
    ),
    asideActions && asideActions.length ? _react2.default.createElement(
      'div',
      { className: 'columns' },
      _react2.default.createElement(
        'div',
        { className: 'column is-three-fifths' },
        renderContent()
      ),
      _react2.default.createElement(
        'div',
        { className: 'column is-two-fifths' },
        _react2.default.createElement(
          'div',
          { className: 'card-content' },
          asideActions.map(function (action, index) {
            var onActionClick = function onActionClick() {
              handleAction(action.id);
            };
            return _react2.default.createElement(
              'p',
              { key: index, onClick: onActionClick },
              action.component ? _react2.default.createElement(action.component, null) : _react2.default.createElement(
                _Button2.default,
                { isDisabled: action.isDisabled, isColor: action.isColor, className: 'button is-fullwidth' },
                action.label
              )
            );
          })
        )
      )
    ) : renderContent(),
    footerActions.length > 0 ? _react2.default.createElement(
      'footer',
      { className: 'card-footer' },
      footerActions.map(function (action, index) {
        var onActionClick = function onActionClick() {
          handleAction(action.id);
        };
        return _react2.default.createElement(
          'p',
          { key: index, className: 'card-footer-item' },
          _react2.default.createElement(
            _Button2.default,
            {
              isDisabled: action.isDisabled, isColor: action.isColor, onClick: onActionClick,
              className: 'button is-fullwidth' },
            action.label
          )
        );
      })
    ) : null
  );
};

Card.propTypes = {
  title: _react2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.component]).isRequired,
  icon: _propTypes2.default.element,
  subtitle: _propTypes2.default.string,
  headerContent: _propTypes2.default.element,
  lockStatus: _propTypes2.default.oneOf(['open', 'locked', 'asked', 'idle', 'active']),
  statusMessage: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.array]),
  bodyContent: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.array]),
  footerActions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.array]),
    id: _propTypes2.default.string
  })),
  asideActions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.array]),
    id: _propTypes2.default.string
  }))
};

exports.default = Card;