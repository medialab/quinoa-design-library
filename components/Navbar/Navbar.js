'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bloomer = require('bloomer');

var _reactTooltip = require('react-tooltip');

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavbarWrapper = function NavbarWrapper(_ref) {
  var brandImage = _ref.brandImage,
      brandContent = _ref.brandContent,
      _ref$locationBreadCru = _ref.locationBreadCrumbs,
      locationBreadCrumbs = _ref$locationBreadCru === undefined ? [] : _ref$locationBreadCru,
      _ref$menuOptions = _ref.menuOptions,
      menuOptions = _ref$menuOptions === undefined ? [] : _ref$menuOptions,
      _ref$actionOptions = _ref.actionOptions,
      actionOptions = _ref$actionOptions === undefined ? [] : _ref$actionOptions,
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === undefined ? true : _ref$isOpen,
      onToggle = _ref.onToggle,
      _ref$isLockStatus = _ref.isLockStatus,
      isLockStatus = _ref$isLockStatus === undefined ? 'open' : _ref$isLockStatus,
      _ref$isFixed = _ref.isFixed,
      isFixed = _ref$isFixed === undefined ? false : _ref$isFixed,
      profile = _ref.profile;

  return _react2.default.createElement(
    _bloomer.Navbar,
    { className: 'is-lock-status-' + isLockStatus + ' ' + (isFixed ? 'is-fixed-top' : '') },
    _react2.default.createElement(
      _index.Container,
      null,
      _react2.default.createElement(
        _bloomer.NavbarBrand,
        null,
        _react2.default.createElement(
          _bloomer.NavbarItem,
          null,
          brandImage && _react2.default.createElement('img', { src: brandImage }),
          ' ',
          brandContent
        ),
        _react2.default.createElement(_bloomer.NavbarBurger, { isActive: isOpen, onClick: onToggle })
      ),
      _react2.default.createElement(
        _bloomer.NavbarMenu,
        { isActive: isOpen, onClick: onToggle },
        _react2.default.createElement(
          _bloomer.NavbarStart,
          null,
          _react2.default.createElement(
            _bloomer.Breadcrumb,
            { className: 'navbar-item' },
            locationBreadCrumbs.map(function (item, index) {
              return _react2.default.createElement(
                _bloomer.BreadcrumbItem,
                { key: index, isActive: item.isActive },
                _react2.default.createElement(
                  'a',
                  { href: item.href },
                  item.content
                )
              );
            })
          ),
          menuOptions.map(function (item, index) {
            return _react2.default.createElement(
              _bloomer.NavbarItem,
              {
                key: index,
                href: item.href,
                isActive: item.isActive,
                hasDropdown: item.subItems && item.subItems.length > 0 ? true : null,
                isHoverable: item.subItems && item.subItems.length > 0 ? true : null },
              item.subItems && item.subItems.length > 0 ? _react2.default.createElement(
                _bloomer.NavbarLink,
                { href: item.href },
                _react2.default.createElement(
                  'span',
                  null,
                  item.content,
                  item.lockStatus ? _react2.default.createElement(_index.StatusMarker, {
                    lockStatus: item.lockStatus,
                    statusMessage: item.statusMessage }) : null
                )
              ) : _react2.default.createElement(
                'span',
                null,
                item.content,
                item.lockStatus ? _react2.default.createElement(_index.StatusMarker, {
                  lockStatus: item.lockStatus,
                  statusMessage: item.statusMessage }) : null
              ),
              item.subItems && item.subItems.length > 0 && _react2.default.createElement(
                _bloomer.NavbarDropdown,
                null,
                item.subItems.map(function (subItem, index2) {
                  return _react2.default.createElement(
                    _bloomer.NavbarItem,
                    { key: index2, href: subItem.href },
                    _react2.default.createElement(
                      'span',
                      null,
                      subItem.content,
                      _react2.default.createElement(_index.StatusMarker, {
                        lockStatus: subItem.lockStatus,
                        statusMessage: subItem.statusMessage })
                    )
                  );
                })
              )
            );
          })
        ),
        _react2.default.createElement(
          _bloomer.NavbarEnd,
          null,
          actionOptions.map(function (item, index) {
            return _react2.default.createElement(
              _bloomer.NavbarItem,
              { key: index, href: item.href },
              item.content
            );
          }),
          profile ? _react2.default.createElement(
            _bloomer.NavbarItem,
            null,
            _react2.default.createElement(
              _index.Button,
              { 'data-tip': 'logged as ' + profile.nickName, 'data-for': 'profile-btn', isRounded: true },
              _react2.default.createElement(_index.Image, { isRounded: true, isSize: '32x32', src: profile.imageUri })
            ),
            _react2.default.createElement(_reactTooltip2.default, {
              id: 'profile-btn',
              effect: 'solid',
              place: 'left' })
          ) : null
        )
      )
    )
  );
};

NavbarWrapper.propTypes = {
  isOpen: _propTypes2.default.bool,
  isFixed: _propTypes2.default.bool,
  onToggle: _propTypes2.default.func,
  brandImage: _propTypes2.default.string,
  brandContent: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  profile: _propTypes2.default.shape({
    name: _propTypes2.default.string,
    imageUri: _propTypes2.default.string
  }),
  locationBreadCrumbs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    href: _propTypes2.default.string,
    content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
  })),
  menuOptions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    href: _propTypes2.default.string,
    content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    subItems: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      href: _propTypes2.default.string,
      content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
    }))
  })),
  actionOptions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    href: _propTypes2.default.string,
    content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
  }))
};

exports.default = NavbarWrapper;