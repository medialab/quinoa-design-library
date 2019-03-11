import React from 'react';
import {
  StretchedLayoutContainer,
  StretchedLayoutItem,
  Button,
  Box,
  Icon,
  // Columns,
  // Container,
  // Navbar,
  // Level,
  // Tabs,
  // Title,
  // TabList,
  // TabLink,
  // Collapsable,
  // CodeEditor,
  // Field,
  // Select,
  // Control,
  // Dropdown,
  // Input,
  // Label,
  // ColorPicker,
  // Box,
  // Tab,
  // Help,
  // Content,
} from '../../../src/components';
import icons from '../../../src/themes/millet/icons';

const AnnotationBox = ({
  isActive
}) => (
  <Box
    style={{
      background: isActive ? '#3849a2' : 'transparent',
    }}>
    <StretchedLayoutContainer isDirection="horizontal">

      <StretchedLayoutItem
        style={{
          paddingRight: '1rem',
      }}
        isFlex={1}>
        <textarea
          style={{
          width: '100%',
          background: isActive ? '#3849a2' : 'transparent',
          color: isActive ? 'white' : 'black',
        }} className="textarea" value="coucou" />
      </StretchedLayoutItem>
      <StretchedLayoutItem>
        <StretchedLayoutContainer isDirection="vertical">
          <Button style={{marginBottom: '.5rem'}} data-for="card-action" data-tip={'delete this annotation'}>
            <Icon isSize="small" isAlign="left">
              <img src={icons.remove.black.svg} />
            </Icon>
          </Button>

          <Button style={{marginBottom: '.5rem'}} data-for="card-action" data-tip={'drag to change annotation order'}>
            <Icon isSize="small" isAlign="left">
              <img src={icons.move.black.svg} />
            </Icon>
          </Button>

          <Button data-for="card-action" data-tip={'set a frame'}>
            <Icon isSize="small" isAlign="left">
              <img src={icons.cover.black.svg} />
            </Icon>
          </Button>
        </StretchedLayoutContainer>
      </StretchedLayoutItem>
    </StretchedLayoutContainer>
  </Box>
);

const ImagesAnnotationDraft = () => {

  const activeTool = 'anchorRectangle';
  const activeBoxIndex = 0;
  return (
    <StretchedLayoutContainer
      isFullHeight
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
      isDirection="horizontal">
      <StretchedLayoutItem isFlex={1} style={{padding: '1rem', overflow: 'auto'}}>
        {
          [0, 1, 2, 3, 4, 5, 6]
          .map(index => <AnnotationBox isActive={index === activeBoxIndex} key={index} />)
        }
      </StretchedLayoutItem>
      <StretchedLayoutItem isFlex={3}>
        <img style={{width: '500%', height: '500%', position: 'absolute', top: '-20%', left: '0'}} src={require('../../mockAssets/carto-eg.jpeg')} />
        <div
          className="buttons-container"
          style={{
            position: 'absolute',
            right: '1rem',
            bottom: '1rem',
            display: 'flex',
            flexDirection: 'column'
          }}>
          {['anchorRectangle', 'anchorEllipse', 'anchorPolygon']
            .map(type => (
              <Button key={type} isColor={type === activeTool ? 'primary' : ''} style={{marginBottom: '.5rem'}} isRounded>
                <Icon isSize="medium" isAlign="left">
                  <img src={icons[type][type === activeTool ? 'white' : 'black'].svg} />
                </Icon>
              </Button>
            ))
          }

        </div>
      </StretchedLayoutItem>
    </StretchedLayoutContainer>
  );
};

export default ImagesAnnotationDraft;
