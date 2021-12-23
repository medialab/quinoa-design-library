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
  columns = 2,
  onChange,
  style,
  boxStyle = {}
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
              onClick={onClick}
              key={index}
              isActive={activeOptionId === option.id}
              style={{textAlign: 'center', ...boxStyle}}>
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
