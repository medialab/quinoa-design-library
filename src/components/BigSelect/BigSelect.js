import React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Columns,
  Column,
  Image
} from '../index';

const BigSelect = ({
  options = [],
  activeOptionId,
  onChange
}) => {
  return (
    <Columns>
      {
        options.map((option, index) => {
          const onClick = e => {
            e.stopPropagation();
            onChange(option.id);
          };
          return (
            <Column onClick={onClick} key={index}>
              <Box isActive={activeOptionId === option.id}>
                {
                  option.iconUrl &&
                  <Image src={option.iconUrl} />
                }
                {option.label}
              </Box>
            </Column>
          );
        })
      }
    </Columns>
  );
};

BigSelect.propTypes = {
  onChange: PropTypes.func,
  activeOptionId: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.element
      ]),
      iconUrl: PropTypes.string,
    })
  )
};

export default BigSelect;
