import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import {
  Dropdown,
  DropdownTrigger,
  Icon,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  DropdownDivider,
} from 'bloomer';

const DropdownContainer = ({
  value,
  onToggle,
  onChange,
  isActive = false,
  options = [],
  children
}) => {
  const handleAction = id => {
    if (typeof onChange === 'function') {
      onChange(id);
      onToggle();
    }
  };
  const isNested = options.length && Array.isArray(options[0]);

  const renderOption = (option, index) => {
    const onClick = e => {
      e.stopPropagation();
      e.preventDefault();
      handleAction(option.id);
    };
    return (
      <DropdownItem
        href="#" key={option.id + index} isActive={option.id === value.id}
        onClick={onClick}>
        {option.label}
      </DropdownItem>
    );
  };
  return (
    <Dropdown isActive={isActive}>
      <DropdownTrigger>
        <Button
          onClick={onToggle} isOutlined aria-haspopup="true"
          aria-controls="dropdown-menu">
          {
            children ?
            children :
            <span>{value && value.label}</span>
          }
          <Icon icon="angle-down" isSize="small" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownContent>
          {
            isNested ?
              options.reduce((result, optionGroup, index) => [
                  ...result,
                  ...optionGroup.map(renderOption),
                  index < options.length - 1 ? <DropdownDivider key={index} /> : null
                ], [])
            : options.map(renderOption)
          }
        </DropdownContent>
      </DropdownMenu>
    </Dropdown>
  );

};

DropdownContainer.propTypes = {
  isActive: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  value: PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  }),
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
          PropTypes.shape({
            label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
            id: PropTypes.string,
          }),
          PropTypes.arrayOf(
            PropTypes.shape({
              label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
              id: PropTypes.string,
            })
          )
        ])
  )
};

export default DropdownContainer;
