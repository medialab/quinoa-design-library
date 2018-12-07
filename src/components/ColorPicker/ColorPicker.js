
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SwatchesPicker as Picker} from 'react-color';
import onClickOutside from 'react-onclickoutside';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPalette} from '@fortawesome/free-solid-svg-icons';

class ColorPicker extends Component {

  static propTypes = {
    edited: PropTypes.bool,
    value: PropTypes.string,
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
  }

  render = () => {
    const {
      state: {
        edited,
        color
      },
      toggleEdited,
      onChange,
    } = this;

    return (
      <div style={{position: 'relative', display: 'inline-block'}}>
        <button className="button" onClick={toggleEdited}>
          <FontAwesomeIcon icon={faPalette} />
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

export default onClickOutside(ColorPicker);
