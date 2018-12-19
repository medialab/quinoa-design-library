import React from 'react';
import RcSlider, {createSliderWithTooltip, Handle} from 'rc-slider';
import Tooltip from 'rc-tooltip';
import {omit} from 'lodash/fp';
import 'rc-slider/assets/index.css';

const VisibleHandle = props => (
  <Tooltip
    prefixCls="rc-slider-tooltip"
    overlay={props.value}
    visible
    placement="bottom"
    key={props.index}>
    <Handle {...omit(['dragging'], props)} />
  </Tooltip>
);

const Slider = props => (
  <RcSlider {...props} className="quinoa-slider" handle={VisibleHandle} />
);

export default createSliderWithTooltip(Slider);
