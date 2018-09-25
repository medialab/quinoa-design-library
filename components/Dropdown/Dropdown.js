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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownContainer = function (_Component) {
  _inherits(DropdownContainer, _Component);

  function DropdownContainer(props) {
    _classCallCheck(this, DropdownContainer);

    var _this = _possibleConstructorReturn(this, (DropdownContainer.__proto__ || Object.getPrototypeOf(DropdownContainer)).call(this, props));

    _this.componentWillReceiveProps = function (nextProps) {
      if (_this.menuRef) {
        var _nextProps$menuAlign = nextProps.menuAlign,
            menuAlign = _nextProps$menuAlign === undefined ? 'left' : _nextProps$menuAlign;

        var elemRect = _this.menuRef.getBoundingClientRect();
        var x = elemRect.x,
            y = elemRect.y,
            width = elemRect.width;

        var _this$triggerRef$getB = _this.triggerRef.getBoundingClientRect(),
            height = _this$triggerRef$getB.height,
            triggerWidth = _this$triggerRef$getB.width;

        var finalX = void 0;
        if (menuAlign === 'left') {
          finalX = x + width > window.innerWidth ? window.innerWidth - width : x;
        } else if (menuAlign === 'right') {
          finalX = window.innerWidth - (x + triggerWidth);
          finalX = finalX + width > window.innerWidth ? window.innerWidth : finalX;
        }
        if (y > 0) {
          _this.setState({
            x: finalX,
            y: y + height
          });
        }
      }
    };

    _this.render = function () {
      var _this$props = _this.props,
          value = _this$props.value,
          onToggle = _this$props.onToggle,
          onChange = _this$props.onChange,
          isColor = _this$props.isColor,
          _this$props$isActive = _this$props.isActive,
          isActive = _this$props$isActive === undefined ? false : _this$props$isActive,
          _this$props$options = _this$props.options,
          options = _this$props$options === undefined ? [] : _this$props$options,
          _this$props$closeOnCh = _this$props.closeOnChange,
          closeOnChange = _this$props$closeOnCh === undefined ? true : _this$props$closeOnCh,
          children = _this$props.children,
          _this$props$menuAlign = _this$props.menuAlign,
          menuAlign = _this$props$menuAlign === undefined ? 'left' : _this$props$menuAlign,
          _this$state = _this.state,
          x = _this$state.x,
          y = _this$state.y;


      var handleAction = function handleAction(id, index) {
        if (typeof onChange === 'function') {
          onChange(id, index);
          if (closeOnChange) {
            onToggle();
          }
        }
      };
      var isNested = options.length && options[0].options;

      var renderOption = function renderOption(option, index) {
        var nested = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var onClick = function onClick(e) {
          e.stopPropagation();
          e.preventDefault();
          handleAction(option.id, index);
        };
        var label = option.label,
            id = option.id;

        var val = nested && value ? value[index].value : value;
        var subIsActive = Array.isArray(val) ? val.indexOf(id) > -1 : val === id;
        return _react2.default.createElement(
          _bloomer.DropdownItem,
          {
            href: '#',
            key: id + '-' + index,
            isActive: subIsActive,
            onClick: onClick },
          label
        );
      };

      var renderGroup = function renderGroup(option, index) {
        var id = option.id,
            subOptions = option.options;

        return [_react2.default.createElement(
          _bloomer.DropdownItem,
          {
            key: id + '-' + index },
          _react2.default.createElement(
            _bloomer.Title,
            { isSize: 5 },
            option.label
          )
        ), _react2.default.createElement(_bloomer.DropdownDivider, { key: id + '-' + (index + 1) })].concat(_toConsumableArray(subOptions.map(function (o) {
          return renderOption(o, id, true);
        })));
      };

      var bindMenuRef = function bindMenuRef(menuRef) {
        _this.menuRef = menuRef;
      };
      var bindTriggerRef = function bindTriggerRef(triggerRef) {
        _this.triggerRef = triggerRef;
      };
      var color = '';
      if (isActive) {
        color = 'info';
      } else if (isColor) {
        color = isColor;
      }
      return _react2.default.createElement(
        _bloomer.Dropdown,
        { isActive: isActive },
        _react2.default.createElement(
          'div',
          {
            ref: bindMenuRef },
          isActive && _react2.default.createElement('div', {
            className: 'dropdown-background',
            onClick: onToggle }),
          _react2.default.createElement(
            'div',
            {
              ref: bindTriggerRef },
            _react2.default.createElement(
              _bloomer.DropdownTrigger,
              null,
              _react2.default.createElement(
                _Button2.default,
                {
                  onClick: onToggle,
                  isOutlined: true,
                  'aria-haspopup': 'true',
                  'aria-controls': 'dropdown-menu',
                  isColor: color },
                children ? children : _react2.default.createElement(
                  'span',
                  null,
                  value && value.label
                ),
                _react2.default.createElement(_bloomer.Icon, { icon: 'angle-down', isSize: 'small' })
              )
            )
          ),
          _react2.default.createElement(
            _bloomer.DropdownMenu,
            {
              style: {
                maxHeight: window.innerHeight - y,
                top: y + 'px',
                left: menuAlign === 'left' ? x + 'px' : 'unset',
                right: menuAlign === 'right' ? x + 'px' : 'unset'
              },
              onClick: function onClick(e) {
                return e.stopPropagation();
              } },
            _react2.default.createElement(
              _bloomer.DropdownContent,
              null,
              isNested ? options.map(renderGroup).reduce(function (cur, next, index) {
                return [].concat(_toConsumableArray(cur), [cur.length && index !== options.length - 1 ? _react2.default.createElement(_bloomer.DropdownDivider, { key: index + 0.5 }) : null], _toConsumableArray(next));
              }, []) : options.map(function (o) {
                return renderOption(o);
              })
            )
          )
        )
      );
    };

    _this.state = {
      x: 0,
      y: 0
    };
    return _this;
  }

  return DropdownContainer;
}(_react.Component);

DropdownContainer.propTypes = {
  isActive: _propTypes2.default.bool,
  onChange: _propTypes2.default.func.isRequired,
  onToggle: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.oneOfType([_propTypes2.default.shape({
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
  }),
  // for nested value
  _propTypes2.default.object]),
  options: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.shape({
    label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    id: _propTypes2.default.string
  }), _propTypes2.default.shape({
    id: _propTypes2.default.string,
    label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
      id: _propTypes2.default.string
    }))
  })]))
};

exports.default = DropdownContainer;