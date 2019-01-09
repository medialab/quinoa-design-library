import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  DropdownDivider,
  Title,
} from 'bloomer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons/faAngleDown';
import Button from '../Button';

class DropdownContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      width: 192
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.menuRef) {
      const {menuAlign = 'left'} = nextProps;
      const elemRect = this.menuRef.getBoundingClientRect();
      const {x, y, width} = elemRect;
      const {height, width: triggerWidth} = this.triggerRef.getBoundingClientRect();
      let finalX;
      if (menuAlign === 'left') {
        finalX = x + width > window.innerWidth ? window.innerWidth - width : x;
      }
      else if (menuAlign === 'right') {
        finalX = window.innerWidth - (x + triggerWidth);
        finalX = finalX + width > window.innerWidth ? window.innerWidth : finalX;
      }
      if (y > 0) {
        this.setState({
          x: finalX,
          y: y + height,
          width
        });
      }
      else {
        this.setState({
          width,
        });
      }
    }
  }

  render = () => {
    const {
      props: {
        value,
        onToggle,
        isFullWidth,
        onChange,
        isColor,
        isActive = false,
        options = [],
        closeOnChange = true,
        children,
        menuAlign = 'left',
      },
      state: {
        x,
        y,
      }
    } = this;

    const handleAction = (id, index) => {
      if (typeof onChange === 'function') {
        onChange(id, index);
        if (closeOnChange) {
          onToggle();
        }
      }
    };
    const isNested = options.length && options[0].options;

    const renderOption = (option, index, nested = false) => {
      const onClick = e => {
        e.stopPropagation();
        e.preventDefault();
        handleAction(option.id, index);
      };
      const {label, id} = option;
      const val = nested && value ? value[index].value : value;
      const subIsActive = Array.isArray(val) ? val.indexOf(id) > - 1 : val === id;
      return (
        <DropdownItem
          href="#"
          key={id + '-' + index}
          isActive={subIsActive}
          onClick={onClick}>
          {label}
        </DropdownItem>
      );
    };

    const renderGroup = (option, index) => {
      const {id, options: subOptions} = option;
      return [
        <DropdownItem
          key={id + '-' + index}>
          <Title isSize={5}>{option.label}</Title>
        </DropdownItem>,
        <DropdownDivider key={id + '-' + (index + 1)} />,
        ...subOptions.map(o => renderOption(o, id, true))
      ];
    };

    const bindMenuRef = menuRef => {
      this.menuRef = menuRef;
    };
    const bindTriggerRef = triggerRef => {
      this.triggerRef = triggerRef;
    };
    let color = '';
    if (isActive) {
      color = 'info';
    }
    else if (isColor) {
      color = isColor;
    }
    return (
      <Dropdown isActive={isActive} isFullWidth={isFullWidth}>
        <div
          className="dropdown-bind-menu-ref"
          ref={bindMenuRef}>
          {isActive && <div
            className="dropdown-background"
            onClick={onToggle} />}
          <div
            className="dropdown-bind-trigger-ref"
            ref={bindTriggerRef}>
            <DropdownTrigger isFullWidth={isFullWidth}>
              <Button
                isFullWidth={isFullWidth}
                onClick={onToggle}
                isOutlined
                aria-haspopup="true"
                aria-controls="dropdown-menu"
                isColor={color}>
                {
                children ?
                children :
                <span>{value && value.label}</span>
              }
                <FontAwesomeIcon icon={faAngleDown} />
              </Button>
            </DropdownTrigger>
          </div>

          <DropdownMenu
            style={{
            maxHeight: window.innerHeight - y,
            top: y + 'px',
            left: menuAlign === 'left' ? x + 'px' : 'unset',
            right: menuAlign === 'right' ? x + 'px' : 'unset',
            width: this.state.width
          }}
            onClick={e => e.stopPropagation()}>
            <DropdownContent>
              {
              isNested ?
                options.map(renderGroup).reduce((cur, next, index) => [...cur, cur.length && index !== options.length - 1 ? <DropdownDivider key={index + 0.5} /> : null, ...next], [])
              : options.map(o => renderOption(o))
            }
            </DropdownContent>
          </DropdownMenu>
        </div>
      </Dropdown>
    );
  }
}

DropdownContainer.propTypes = {
  isActive: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    }),
    // for nested value
    PropTypes.object,
    PropTypes.array,
  ]),
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
          PropTypes.shape({
            label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
            id: PropTypes.string,
          }),
          PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
            options: PropTypes.arrayOf(
                      PropTypes.shape({
                        label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
                        id: PropTypes.string,
                      })
                    )
          })
        ])
  )
};

export default DropdownContainer;
