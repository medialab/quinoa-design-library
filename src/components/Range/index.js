import React from 'react';
import RcSlider, {createSliderWithTooltip, Handle} from 'rc-slider';
import Tooltip from 'rc-tooltip';
import {omit} from 'lodash/fp';
import 'rc-slider/assets/index.css';

const handle = (props) => (
  <Tooltip
    prefixCls="rc-slider-tooltip"
    overlay={props.value}
    visible
    getTooltipContainer={props.getTooltipContainer}
    placement="bottom"
    key={props.index}>
    <Handle {...omit(['dragging', 'getTooltipContainer'], props)} />
  </Tooltip>
);

const Slider = props => (
  <RcSlider
    {...props}
    className="quinoa-slider"
    handle={p => handle({...p, getTooltipContainer: props.getTooltipContainer})} />
);

export default createSliderWithTooltip(Slider);
