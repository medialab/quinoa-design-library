import React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Image,
  Grid,
} from '../index';

const BigSelect = ({
  options = [],
  activeOptionId,
  columns,
  onChange,
  style
}) => {
  return (
    <Grid columns={columns} style={style}>
      {
        options.map((option, index) => {
          const onClick = e => {
            e.stopPropagation();
            onChange(option.id);
          };
          return (
            <Box
              onClick={onClick} key={index}
              style={{textAlign: 'center'}}
              isActive={activeOptionId === option.id}>
              {
                option.iconUrl &&
                <div style={{textAlign: 'center'}}>
                  <Image style={{display: 'inline-block'}} isSize={'64x64'} src={option.iconUrl} />
                </div>
              }
              {option.label}
            </Box>
          );
        })
      }
    </Grid>
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
