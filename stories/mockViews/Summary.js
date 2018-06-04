import React, {Component} from 'react';
import '../../src/themes/millet/bulma.theme.scss';
import icons from '../../src/themes/millet/icons';
import {
  Button,
  Card,
  Column,
  Columns,
  Container,
  Content,
  Control,
  Field,
  Delete,
  Collapsable,
  Icon,
  Input,
  Image,
  Help,
  Level,
  Label,
  HelpPin,
  TextArea,
  LevelItem,
  LevelLeft,
  StatusMarker,
  Navbar,
  Title,
} from '../../src/components';

export default class SectionsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: 'Chapitre 1',
          subtitle: 'First few words ...',
          lockStatus: 'locked',
          statusMessage: 'Edited by Fania'
        },
        {
          title: 'Chapitre 2',
          subtitle: 'First few words ...',
          lockStatus: 'open',
        },
        {
          title: 'Chapitre 3',
          subtitle: 'First few words ...',
          lockStatus: 'open',
        },
      ],
      activeAuthors: [
        {
          message: 'You (Rawbin) are editing the summary',
          editable: true
        },
        {
          message: 'Fania is editing the section "Chapitre 1"'
        },
        {
          message: 'Fred is editing the design of the story'
        }
      ],
      metadataEdited: false
    };
  }

  render = () => {
    const {
      state: {
        sections,
        activeAuthors,
        metadataEdited,
      }
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
              isActive: true,
              content: <span>Summary</span>,
              // subItems: [
              //   {
              //     href: '/',
              //     content: 'Section 1'
              //   },
              //   {
              //     href: '/',
              //     content: 'Section 2'
              //   },
              //   {
              //     href: '/',
              //     content: 'Section 3'
              //   },
              //   {
              //     href: '/',
              //     content: 'Section 4'
              //   }
              // ]
            },
            {
              href: '/',
              content: <span>Library</span>
            },
            {
              href: '/',
              content: <span>Design</span>,
              lockStatus: 'locked',
              statusMessage: 'Edited by fred'
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
        <Container>
          <Level />
          <Level />
          <Columns>
            <Column isSize={'1/3'}>
              <Level>
                <Collapsable isCollapsed={metadataEdited}>
                  <Title isSize={2}>
                    My story
                  </Title>
                  <Title isSize={5}>
                    <i>A song of ice and fire</i>
                  </Title>
                  <Level>
                    <LevelLeft>
                      <LevelItem>
                        <Icon isSize="small" isAlign="left">
                          <span className="fa fa-user" aria-hidden="true" />
                        </Icon>
                      </LevelItem>
                      <LevelItem>
                        Felipe
                      </LevelItem>
                    </LevelLeft>
                  </Level>
                  <Level>
                    <LevelLeft>
                      <LevelItem>
                        <Icon isSize="small" isAlign="left">
                          <span className="fa fa-user" aria-hidden="true" />
                        </Icon>
                      </LevelItem>
                      <LevelItem>
                        Fania
                      </LevelItem>
                    </LevelLeft>
                  </Level>
                  <Level>
                    <LevelLeft>
                      <LevelItem>
                        <Icon isSize="small" isAlign="left">
                          <span className="fa fa-user" aria-hidden="true" />
                        </Icon>
                      </LevelItem>
                      <LevelItem>
                        Fred
                      </LevelItem>
                    </LevelLeft>
                  </Level>
                  <Content>
                    The abstract
                  </Content>
                </Collapsable>
              </Level>

              <Level isFullWidth>
                <Button isColor={metadataEdited ? 'primary' : 'info'} onClick={() => this.setState({metadataEdited: !metadataEdited})}>
                  <StatusMarker
                    lockStatus={metadataEdited ? 'active' : 'open'}
                    statusMessage={metadataEdited ? 'edited by you' : 'open'} />
                  Edit global settings
                </Button>
              </Level>
              <Collapsable isCollapsed={!metadataEdited}>
                <form>
                  <Field>
                    <Control>
                      <Label>
                          Story title
                        <HelpPin place="right">
                            Explanation about the story title
                        </HelpPin>
                      </Label>
                      <Input type="text" placeholder="My story" />
                    </Control>
                  </Field>
                  <Field>
                    <Control>
                      <Label>
                          Story subtitle
                        <HelpPin place="right">
                            Explanation about the story subtitle
                        </HelpPin>
                      </Label>
                      <Input type="text" placeholder="A song of ice and fire" />
                    </Control>
                  </Field>

                  <Field>
                    <Label>
                      Authors
                      <HelpPin place="right">
                          Explanation about the story authors
                      </HelpPin>
                    </Label>
                    <Control hasIcons>
                      <Input isColor="success" placeholder="Text Input" value="Fania" />
                      <Icon isSize="small" isAlign="left">
                        <span className="fa fa-user" aria-hidden="true" />
                      </Icon>
                      <Icon isSize="small" isAlign="right">
                        <Delete />
                      </Icon>
                    </Control>
                    <Control hasIcons>
                      <Input isColor="success" placeholder="Text Input" value="Fred" />
                      <Icon isSize="small" isAlign="left">
                        <span className="fa fa-user" aria-hidden="true" />
                      </Icon>
                      <Icon isSize="small" isAlign="right">
                        <Delete />
                      </Icon>
                    </Control>
                    <Control hasIcons>
                      <Input isColor="success" placeholder="Text Input" value="Felipe" />
                      <Icon isSize="small" isAlign="left">
                        <span className="fa fa-user" aria-hidden="true" />
                      </Icon>
                      <Icon isSize="small" isAlign="right">
                        <Delete />
                      </Icon>
                    </Control>
                    <Level />
                    <Button isFullWidth>
                      Add an author
                    </Button>
                  </Field>
                  <Field>
                    <Label>Abstract</Label>
                    <Control hasIcons>
                      <TextArea placeholder={'The abstract'} />
                    </Control>
                  </Field>
                </form>
              </Collapsable>
              <Level />
              <Level />
              <Level />
              <Title isSize={4}>
                Who's on what ?
              </Title>
              {
                  activeAuthors.map((author, authorIndex) => (
                    <Level key={authorIndex}>
                      <LevelLeft>
                        <LevelItem>
                          <Image isRounded isSize="32x32" src="https://via.placeholder.com/48x48" />
                        </LevelItem>
                        <LevelItem>
                          <Help>{author.message}</Help>
                        </LevelItem>
                      </LevelLeft>
                    </Level>
                  ))
                }
            </Column>
            <Column isSize={'2/3'}>
              <Title isSize={2}>
                  Summary
              </Title>
              <Column>
                <Level>
                  <LevelLeft>
                    <LevelItem>
                      <Field hasAddons>
                        <Control>
                          <Input placeholder="Find a section" />
                        </Control>
                        <Control>
                          <Button>Search</Button>
                        </Control>
                      </Field>
                    </LevelItem>
                  </LevelLeft>
                </Level>
              </Column>
              <Level>
                <Column>
                  <Button isFullWidth isColor="primary">
                        New section
                  </Button>
                </Column>
              </Level>
              {
                    sections.map((section, index) => (
                      <Level key={index}>
                        <Column>
                          <Card
                            key={index}
                            title={section.title}
                            subtitle={section.subtitle}
                            lockStatus={section.lockStatus}
                            statusMessage={section.statusMessage}
                            asideActions={[
                              {
                                label: 'edit',
                                id: 'edit',
                                isColor: 'primary'
                              }, {
                                label: 'move',
                                isColor: 'info',
                                id: 'move'
                              },
                              {
                                label: 'delete',
                                isColor: 'danger',
                                id: 'delete'
                              },

                              {
                                label: 'duplicate',
                                id: 'duplicate'
                              }
                            ]} />
                        </Column>
                      </Level>
                    ))
                  }
            </Column>
          </Columns>


        </Container>
      </div>
    );
  }
}
