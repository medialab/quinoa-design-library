import React, {Component} from 'react';

export default class ResizableColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.beginingWidth || 0.5
    };
  }

  setWidth = pct => {
    this.setState({
      width: pct
    });
  };


  render = () => {
    const {
      props: {children, ...rest},
      state: {width},
      setWidth
    } = this;

    const style = {
      width: width * 100 + '%'
    };

    const wrapperStyle = {
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      position: 'absolute'
    };
    const onMouseDown = e => {
      const ratio = e.clientX / e.target.offsetWidth;
      setWidth(ratio);
    };
    return (
      <div style={wrapperStyle}>
        <div
          {...rest}
          style={style}>
          {children}
        </div>
        <div style={{position: 'relative', marginTop: '1rem'}}>
          <div onMouseDown={onMouseDown} style={{position: 'absolute', background: 'lightgrey', height: '2rem', width: '100%'}} />
          <div style={{position: 'absolute', pointerEvents: 'none', background: 'darkgrey', height: '2rem', width: style.width, cursor: 'pointer'}}>
            Click here to vary the container width
          </div>
        </div>
      </div>
    );
  }

}
