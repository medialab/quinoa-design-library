
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SwatchesPicker as Picker} from 'react-color';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPalette} from '@fortawesome/free-solid-svg-icons/faPalette';

class ColorPicker extends Component {

  static propTypes = {
    edited: PropTypes.bool,
    color: PropTypes.string,
    onEdit: PropTypes.func,
    onChange: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      edited: false,
      color: props.color,
    };
  }

  componentWillReceiveProps = nextProps => {
    if (this.props.color !== nextProps.color) {
      this.setState({color: nextProps.color});
    }
  }

  handleClickOutside = () => {
    if (this.state.edited) {
      this.setState({edited: false});
    }
  };

  setEdited = edited => {
    this.setState({edited});
    if (typeof this.props.onEdit === 'function' && edited) {
      this.props.onEdit();
    }
  }

  toggleEdited = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setEdited(!this.state.edited);
  }

  onChange = ({hex}) => {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(hex);
    }
    this.setState({
      color: hex
    });
  }

  render = () => {
    const {
      state: {
        edited,
        color
      },
      toggleEdited,
      handleClickOutside,
      onChange,
    } = this;

    return (
      <div className="color-picker dropdown" style={{position: 'relative', display: 'inline-block'}}>
        {edited && <div
          className="dropdown-background"
          onClick={handleClickOutside} />}
        <button className="button" onClick={toggleEdited}>
          <FontAwesomeIcon icon={faPalette} />
          <div className="color-picker--color-notification" style={{background: color}} />
        </button>
        {
          edited &&
          <div className="color-picker-container" style={{position: 'absolute'}}>
            <Picker
              color={color}
              onChange={onChange} />
          </div>
        }
      </div>
    );
  }
}

export default ColorPicker;
