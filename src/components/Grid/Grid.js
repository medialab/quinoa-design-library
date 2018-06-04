import React from 'react';
import {Tile} from 'bloomer';

export default (props) => {
  const {
    children,
    columns = 3,
    style = {}
  } = props;

  // grouping items
  const groups = children.reduce((result, child, index) => {
    if (index > 0) {
      const lastGroup = result[result.length - 1];
      if (lastGroup.length < columns) {
        lastGroup.push(child);
      }
 else {
        result.push([child]);
      }
    }
 else {
      result.push([child]);
    }
    return result;
  }, []);

  return (
    <div style={style}>
      {
        groups.map((group, groupIndex) => (
          <Tile key={groupIndex} isAncestor>
            {
              group.map((item, itemIndex) => (
                <Tile
                  key={itemIndex} isSize={parseInt(12 / columns, 10)} isVertical
                  isParent>
                  <Tile
                    isChild render={
                    () => item
                  } />
                </Tile>
              ))
            }
          </Tile>
        ))
      }
    </div>
  );
};
