import React from 'react';
import RcSlider, {createSliderWithTooltip, Handle} from 'rc-slider';
import Tooltip from 'rc-tooltip';

const VisibleHandle = props => (
  <Tooltip
    prefixCls="rc-slider-tooltip"
    overlay={props.value}
    visible
    placement="top"
    key={props.index}>
    <Handle {...props} />
  </Tooltip>
);

const Slider = props => (
  <RcSlider {...props} handle={VisibleHandle} />
);

export default createSliderWithTooltip(Slider);
