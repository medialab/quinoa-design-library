
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Controlled as CodeMirror} from 'react-codemirror2';
import {debounce} from 'lodash';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';

const TRIGGER_DEBOUNCE_DELAY = 500;

class CodeEditor extends Component {

  static propTypes = {
    changeDelay: PropTypes.number,
    value: PropTypes.string,
    mode: PropTypes.string,
    lineNumbers: PropTypes.bool,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || '', 
      focused: false
    };
    const delay = props.changeDelay || TRIGGER_DEBOUNCE_DELAY;
    this.debouncedTriggerChange = debounce(this.triggerChange, delay);
  }

  componentWillReceiveProps = nextProps => {
    if (this.props.value !== nextProps.value && !this.state.focused) {
      this.setState({
        value: nextProps.value
      })
    }
  }


  triggerChange = code => {
    if (this.props.onChange && typeof this.props.onChange === 'function') {
      this.props.onChange(code);
    }
  }


  onChange = (editor, metadata, code) => {
    this.setState({
      value: code
    });
    this.debouncedTriggerChange(code);
  };

  onClick= e => {
    if (this.props.onClick && typeof this.props.onClick === 'function') {
      this.props.onClick(e);
    }
    if (this.props.onFocus && typeof this.props.onFocus === 'function') {
      this.props.onFocus(e);
    }
    e.stopPropagation();
  }

  render() {
    const {
      onChange,
      onClick,
      props: {
        // value = '',
        mode = 'css',
        lineNumbers = true
      },
      state: {
        value
      }
    } = this;
    return (
      <div className="fonio-CodeEditor" onClick={onClick}>
        <CodeMirror
          value={value}
          options={{
            mode,
            lineNumbers
          }}
          onFocus={() => this.setState({focused: true})}
          onBlur={() => this.setState({focused: false})}
          onBeforeChange={(editor, data, thatValue) => {
            this.setState({value: thatValue}); // state management here
          }}
          onChange={(editor, data, thatValue) => {
            // downstream callback
            onChange(editor, data, thatValue);
          }} />
      </div>
    );
  }
}

export default CodeEditor;
