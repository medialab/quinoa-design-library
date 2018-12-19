'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rcSlider = require('rc-slider');

var _rcSlider2 = _interopRequireDefault(_rcSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const Slider = props => {
//   const [value, setValue] = useState(props.defaultValue);
//   const onChange = (event) => {
//     setValue(+event.target.value);
//     if (props.onChange) {
//       props.onChange(+event.target.value);
//     }
//   };
//   return (
//     <RcSlider {...props} />
//   );
// };

exports.default = (0, _rcSlider.createSliderWithTooltip)(_rcSlider2.default); // import React, {useState} from 'react';