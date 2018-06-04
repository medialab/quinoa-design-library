import React, {Component} from 'react';
import {v4 as genId} from 'uuid';
import '../../src/themes/millet/bulma.theme.scss';
import icons from '../../src/themes/millet/icons';
import {
  Box,
  BigSelect,

  Column,
  Columns,
  Content,
  Container,
  Navbar,
  Title,
  Level,
  Label,
  TextArea,

  HelpPin,

  Tile,

  DropZone,
  Dropdown,

  Icon,

  Field,
  Control,
  Input,
  Button,
  Checkbox,

  LevelLeft,
  LevelRight,
  LevelItem,
  Delete,
  StatusMarker,
  Grid,
  Card,
} from '../../src/components';

const mockResourcesIds = [];
const mockResourcesNbr = 20;
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
<span>Coulibaly, P., Anctil, François, & Bobée, B. (1999). Prévision hydrologique par réseaux de neurones artificiels: état de l’art. <i>Canadian Journal of Civil Engineering</i>, 26(3), 293–304.</span>,
];
const assetsExtensions = ['csv', 'json', 'jpg', 'png', 'svg'];
const resourceTypes = ['bib', 'image', 'video', 'embed', 'webpage', 'table', 'glossary'];
const resourcesModels = [
];

const mockResources = mockResourcesIds.map(id => {
  const title = mockNames[parseInt(Math.random() * mockNames.length)];
  const type = resourceTypes[parseInt(Math.random() * resourceTypes.length)];
  return {
    id,
    metadata: {
      title: title,
      type: type,
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
      filterVisible: false,
      sortVisible: false,
      mainColumnMode: 'list'
    };
  }

  renderMainColumn = () => {
    const {
      sortVisible,
      filterVisible,
      mainColumnMode
    } = this.state;
    const renderResourceForm = () => {
      return <div>
        <Columns>
              <Column>
                <Field>
                  <Control>
                    <Label>
                    Url of the video
                      <HelpPin place="right">
                      Explanation about the video url
                      </HelpPin>
                    </Label>
                    <Input type="text" placeholder="Video url" />
                  </Control>
                </Field>
              </Column>
              <Column>
                <Title isSize={5}>
                  Preview
                </Title>
                <iframe src="https://www.youtube.com/embed/QHDRRxKlimY?rel=0&amp;controls=0&amp;showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
              </Column>
            </Columns>
            <Level/>
            <Columns>
              <Column>
                <Field>
                  <Control>
                    <Label>
                      Title of the video
                      <HelpPin place="right">
                      Explanation about the video title
                      </HelpPin>
                    </Label>
                    <Input type="text" placeholder="Video title" />
                  </Control>
                </Field>
                <Field>
                  <Control>
                    <Label>
                    Source of the video
                      <HelpPin place="right">
                      Explanation about the video source
                      </HelpPin>
                    </Label>
                    <Input type="text" placeholder="Video source" />
                  </Control>
                </Field>
              </Column>
              <Column>
                <Field>
                  <Control>
                    <Label>
                    Description of the video
                      <HelpPin place="right">
                      Explanation about the video description
                      </HelpPin>
                    </Label>
                    <TextArea type="text" placeholder="Video description" />
                  </Control>
                </Field>
              </Column>
            </Columns>
      </div>;
    }
    switch(mainColumnMode) {
      case 'new':
        return (
          <div>
            <Level />
            <Title isSize={2}>
              <Columns>
                <Column isSize={11}>
                  Create a new resource
                </Column>
                <Column>
                  <Delete onClick={
                    () => this.setState({mainColumnMode: 'list'})
                  } />
                </Column>
              </Columns>
            </Title>
            <BigSelect
              activeOptionId={this.state.activeOptionId}
              onChange={activeOptionId => this.setState({activeOptionId})}
              options={
                resourceTypes.map(type => ({
                  id: type,
                  label: type,
                  iconUrl: icons[type].black.svg
                }))
              } />
            {renderResourceForm()}
          </div>
        );
      case 'edit':
        return (
          <div>
            <Level />
            <Title isSize={2}>
              <Columns>
                <Column isSize={11}>
                  Edit video
                </Column>
                <Column>
                  <Delete onClick={
                    () => this.setState({mainColumnMode: 'list'})
                  } />
                </Column>
              </Columns>
            </Title>
            {renderResourceForm()}
          </div>
        );
      case 'list':
      default:
        return (
        <div>

          <Column>
              <Level isMobile>
                <LevelLeft>
                  <Field hasAddons>
                    <Control>
                      <Input placeholder="Find a resource" />
                    </Control>
                    <Control>
                      <Button>Search</Button>
                    </Control>
                  </Field>
                </LevelLeft>
                <LevelRight>
                  <LevelItem>
                    <Dropdown
                      onToggle={() => this.setState({sortVisible: !sortVisible, filterVisible: false})}
                      isActive={sortVisible}
                      value={{id: 'lastmod', label: 'last modification'}}
                      options={[
                        {
                          id: 'lastmod',
                          label: 'last modification'
                        },
                        {
                          id: 'creation',
                          label: 'creation'
                        },
                        {
                          id: 'title',
                          label: 'title'
                        },
                      ]}>
                      Sort
                    </Dropdown>
                  </LevelItem>
                  <LevelItem>
                    <Dropdown
                      onToggle={() => this.setState({filterVisible: !filterVisible, sortVisible: false})}
                      isActive={filterVisible}
                      value={{id: 1, label: '1 rem'}}
                      options={[
                        {
                          id: 'images',
                          label: <Field>
                              <Control>
                                  <Checkbox checked>Images</Checkbox>
                              </Control>
                          </Field>
                        },
                        {
                          id: 'videos',
                          label: <Field>
                                    <Control>
                                        <Checkbox>Videos</Checkbox>
                                    </Control>
                                </Field>
                        },
                        {
                          id: 'all',
                          label: 'Select all'
                        }
                      ]}>
                      Filter
                    </Dropdown>
                  </LevelItem>
                </LevelRight>
              </Level>
            </Column>
            <div>
              <Grid columns={3}>
                {
                    mockResources.map(resource => {
                      return (
                          <Card
                            key={resource.id}
                            bodyContent={
                              <div>
                                <Columns>
                                  <Column isSize={2}>
                                    <Icon isSize="medium" isAlign="left">
                                      <img src={icons[resource.metadata.type].black.svg} />
                                    </Icon>
                                  </Column>

                                  <Column isSize={8}>
                                    {resource.metadata.title}
                                  </Column>

                                  <Column isSize={2}>
                                    <StatusMarker
                                          lockStatus={'open'}
                                          statusMessage={'open'} />
                                  </Column>
                                </Columns>
                                <Column>
                                {
                                  ['image', 'video'].indexOf(resource.metadata.type) > -1 &&
                                  <img src="https://inra-dam-front-resources-cdn.brainsonic.com/ressources/afile/224020-77d3e-picture_client_link_1-ouverture-dossier-controverse.JPG" />
                                }
                                </Column>
                              </div>
                            }
                            footerActions={[
                              {
                                id: 'edit',
                                isColor: 'info',
                                label: 'edit'
                              },
                              {
                                id: 'delete',
                                isColor: 'danger',
                                label: 'delete'
                              }
                            ]}
                            onAction={action => action === 'edit' ? this.setState({mainColumnMode: 'edit'}) : undefined}
                            />
                      );
                    })
                  }
              </Grid>
            </div>
        </div>
      );
    }
  }

  render = () => {
    const {
      state: {
        filterVisible,
        sortVisible,
        mainColumnMode
      },
      renderMainColumn
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
            <Column isSize={'1/4'}>
              <Level/>
              <Level>
                <Content>
                  Your library contains all the resources (references, images, visualizations...) that can be used within the story.
                </Content>
              </Level>
              <Level>
                <Button isFullWidth onClick={() => this.setState({mainColumnMode: 'new'})} isColor={mainColumnMode === 'new' ? 'primary' : 'info'}>
                  New resource
                </Button>
              </Level>
              <Level>
                <DropZone>
                 Drop files to include new resources in your library (images, tables, bibliographies)
                </DropZone>
              </Level>
            </Column>
            <Column isSize={'3/4'}>
              {renderMainColumn()}
            </Column>    
          </Columns>          
        </Container>
      </div>
    );
  }
}
