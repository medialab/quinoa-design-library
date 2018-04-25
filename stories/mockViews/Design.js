import React, {Component} from 'react';
import '../../src/themes/millet/bulma.theme.scss';
import icons from '../../src/themes/millet/icons';
import {
  Column,
  Columns,
  Container,
  Navbar,
  Level,
} from '../../src/components';

export default class DesignView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render = () => {
    const {
      state: {
      }
    } = this;
    return (
      <div>
        <Navbar
          brandImage={icons.brand.svg}
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
              content: <span>Library</span>
            },
            {
              href: '/',
              isActive: true,
              content: <span>Design</span>,
              lockStatus: 'active',
              statusMessage: 'Edited by you',
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
                Design
              <div style={{position: 'relative'}}>
                <div
                  style={{
                      background: 'red',
                      height: '200rem',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: '100%'
                    }}>
                    1
                </div>
              </div>
            </Column>
            <Column isSize={'fullwidth'}>
              <img src={require('../mockAssets/mock-story-preview.png')} />
            </Column>
          </Columns>
        </Container>
      </div>
    );
  }
}
