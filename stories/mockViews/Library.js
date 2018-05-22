import React, {Component} from 'react';
import {v4 as genId} from 'uuid';
import '../../src/themes/millet/bulma.theme.scss';
import icons from '../../src/themes/millet/icons';
import {
  Column,
  Columns,
  Container,
  Navbar,
  Title,
  Level,

  Tile,

  DropZone,

  Field,
  Control,
  Input,
  Button,

  LevelLeft,
  LevelRight,
  LevelItem,
  Delete,
  Card
} from '../../src/components';

const mockAssetIds = [];
const mockAssetsNbr = 20;
const mockResourcesIds = [];
const mockResourcesNbr = 20;
for (let i = 0; i < mockAssetsNbr; i++) mockAssetIds.push(genId());
for (let i = 0; i < mockResourcesNbr; i++) mockResourcesIds.push(genId());
const mockNames = [
'Baleric Shearwater',
'Barn Owl',
'Barnacle Goose',
'Bar-tailed Godwit',
'Bean Goose',
"Bewick's Swan",
'Black Brant',
'Black Guillemot',
'Black Redstart',
'Black Swan',
'Blackbird',
'Blackcap',
'Black-headed Gull',
'Black-necked Grebe',
'Black-tailed Godwit',
'Black-throated Diver',
'Blue Tit',
'Brambling',
'Brent Goose (dark-bellied)',
'Brent Goose (light-bellied)',
'Buff-breasted Sandpiper',
'Bullfinch',
'Buzzard',
];
const assetsExtensions = ['csv', 'json', 'jpg', 'png', 'svg'];
const resourcesModels = [
];

const mockAssets = mockAssetIds.reduce((res, id) => {
  const extension = assetsExtensions[parseInt(Math.random() * assetsExtensions.length)];
  return {
    ...res,
    [id]: {
      id,
      fileName: (mockNames[parseInt(Math.random() * mockNames.length)] || mockNames[0]) + '.' + extension,
      extension
    }
  };
}, {});

const mockResources = mockResourcesIds.map(id => {
  return {
    id,
    metadata: {
      title: 'coucou',
      type: 'bib',
      creators: [],
      description: 'description',
      source: 'source'
    },
    data: {
     id: 'unique_string-1219205',
     type: 'book',
     title: 'Book Title',
     author: [
         {
                 family: 'de las Casas',
                 given: 'Bartolomé',
         },
         {
                 family: 'King',
                 given: 'Rev. Martin Luther Jr., Ph.D.',
         }
    ],
     arbitraryField: 'An example arbitrary field with arbitrary data. This field will be ignored by the CSL Processor.'
    }
  };
});

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
              isActive: true,
              statusMessage: 'Edited by you',
            },
            {
              href: '/',
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
            imageUri: 'https://via.placeholder.com/48x48',
            nickName: 'rawbin'
          }} />
        <Level />
        <Container isFluid>
          <Columns isFullHeight>
            <Column isSize={'fullwidth'}>
              <Columns>
                {
                    mockResources.map(resource => {
                      return (
                        <Column isSize={3} key={resource.id}>
                          <Card
                            key={resource.id}
                            title="resource"
                            bodyContent={<img src="https://inra-dam-front-resources-cdn.brainsonic.com/ressources/afile/224020-77d3e-picture_client_link_1-ouverture-dossier-controverse.JPG" />}
                            icon={<img src="https://bulma.io/images/placeholders/96x96.png" />} />
                        </Column>
                      );
                    })
                  }
              </Columns>
            </Column>
          </Columns>
        </Container>
      </div>
    );
  }
}
