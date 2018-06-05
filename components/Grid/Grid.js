'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bloomer = require('bloomer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var children = props.children,
      _props$columns = props.columns,
      columns = _props$columns === undefined ? 3 : _props$columns,
      _props$style = props.style,
      style = _props$style === undefined ? {} : _props$style;

  // grouping items

  var groups = children.reduce(function (result, child, index) {
    if (index > 0) {
      var lastGroup = result[result.length - 1];
      if (lastGroup.length < columns) {
        lastGroup.push(child);
      } else {
        result.push([child]);
      }
    } else {
      result.push([child]);
    }
    return result;
  }, []);

  return _react2.default.createElement(
    'div',
    { style: style },
    groups.map(function (group, groupIndex) {
      return _react2.default.createElement(
        _bloomer.Tile,
        { key: groupIndex, isAncestor: true },
        group.map(function (item, itemIndex) {
          return _react2.default.createElement(
            _bloomer.Tile,
            {
              key: itemIndex, isSize: parseInt(12 / columns, 10), isVertical: true,
              isParent: true },
            _react2.default.createElement(_bloomer.Tile, {
              isChild: true, render: function render() {
                return item;
              } })
          );
        })
      );
    })
  );
};