import React, {Component} from 'react';
import '../../src/themes/millet/bulma.theme.scss';
import icons from '../../src/themes/millet/icons';
import {
  Column,
  Columns,
  Container,
  Navbar,
  Title,
  Level,
} from '../../src/components';

export default class ResourcesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render = () => {
    const {
      state: {
      },
    } = this;
    return (
      <div>
        <Navbar
          brandImage={icons.fonioBrand.svg}
          isOpen={false}
          isFixed

          locationBreadCrumbs={[
            {
              href: '/',
              content: <a>Scube 2018</a>
            },
            {
              href: '/',
              content: <a>My story</a>,
              isActive: true
            },
          ]}

          menuOptions={[
            {
              href: '/',
              content: <span>Summary</span>,
            },
            {
              href: '/',
              content: <span>Library</span>,
              lockStatus: 'active',
              statusMessage: 'Edited by you',
            },
            {
              href: '/',
              isActive: true,
              content: <span>Design</span>,
            }
          ]}
          actionOptions={[{
            content: <button className="button">Export</button>
          },
          {
            content: <button className="button">FR</button>
          }
          ]}
          profile={{
            imageUri: 'https://via.placeholder.com/48x48'
          }} />
        <Level />
        <Container isFluid>
          <Columns isFullHeight>
            <Column isSize={'1/4'}>
              <Title isSize={4}>
                Your file assets
              </Title>
            </Column>
            <Column isSize={'fullwidth'}>
              <Title isSize={2}>
                Your story resources
              </Title>
            </Column>
          </Columns>
        </Container>
      </div>
    );
  }
}
