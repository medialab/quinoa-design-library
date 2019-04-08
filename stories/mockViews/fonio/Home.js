import React, {Component} from 'react';

import '../../../src/themes/millet/bulma.theme.scss';
import icons from '../../../src/themes/millet/icons';

import {
  Button,
  Card,
  Column,
  Columns,
  Container,
  Content,
  Control,
  DropZone,
  Field,
  Footer,
  Hero,
  HeroBody,
  HeroFooter,
  HeroHeader,
  HelpPin,
  Icon,
  Image,
  Label,
  Input,
  Level,
  LevelItem,
  LevelLeft,
  LevelRight,
  Navbar,
  Tab,
  Delete,
  TabLink,
  TabList,
  TextArea,
  Tabs,
  Help,
  Title,
} from '../../../src/components';

export default class HomeView extends Component {
  constructor(props) {
    super(props);
    const numberOfStories = 2 + parseInt(Math.random() * 20, 10);
    const names = ['Flora', 'Flavie', 'Fanny', 'Faustine', 'Flore', 'Floriane', 'Florine', 'Fleur', 'Fantine', 'Farah', 'Fiona', 'Fatima', 'Fatoumata', 'Fanchon', 'Fernanda', 'Francesca', 'Francoise', 'Felicie', 'Filipa', 'France', 'Frieda', 'Felise', 'Flavia', 'Freya', 'Fabienne', 'Fina', 'Francine', 'Florentine', 'Fabiola', 'Francisca', 'Florence', 'Florencia', 'Frederique', 'Fama', 'Fanely', 'Fanie', 'Farida', 'Fatima-Zohra', 'Faye', 'Federica', 'Felicia', 'Ferielle', 'Fallone', 'Fanta', 'Fatiha', 'Fayrouz', 'Feriel', 'Filomene', 'Fionna', 'Fiorina', 'Fleuriane', 'Flo', 'Florelle', 'Floryane', 'Fortuna', 'Franceska', 'Frida', 'Fadela', 'Fadime', 'Faith', 'Faouzia', 'Farha', 'Ferial', 'Feryel', 'Fiby', 'Filly', 'Firdaws', 'Fadma', 'Faina', 'Falone', 'Fanelie', 'Fanni', 'Farrah', 'Fatma', 'Floryne', 'Foune', 'Francheska', 'Fella', 'Fiora', 'Fiorine', 'Firdaous', 'Floraline', 'Florene', 'Fouzia', 'Fabiana', 'Fanette', 'Fany', 'Fathia', 'Fatimata', 'Fatouma', 'Ferdaous', 'Flamine', 'Fleure', 'Florane', 'Fadoua', 'Fadwa', 'Fahima', 'Faiza', 'Fatima-Zahra', 'Fatou', 'Fauve', 'Felicity', 'Fiorella', 'Florianne', 'Fadia', 'Fadila', 'Fatim'];

    const stories = [];

    for (let i = 0; i < numberOfStories; i++) {
      const title = `Story ${i + 1}`;
      const author1 = names[parseInt(Math.random() * names.length, 10)];
      const author2 = names[parseInt(Math.random() * names.length, 10)];
      const authors = [author1, author2];
      const edited = Math.random() > 0.3;
      const subtitle = authors.join(', ');
      stories.push({
        title,
        subtitle,
        edited,
      });
    }
    this.state = {
      tabMode: 'stories',
      newStoryOpen: false,
      storyInfoVisible: false,
      newStoryTabMode: 'new-story',
      stories,
      instanceTitle: 'Scube 2018',
      profileEdited: false,
      backgroundImage: require('../../mockAssets/cover_forccast.jpg')
    };
  }

  renderContent = mode => {
    switch (mode) {
      case 'learn':
        return (
          <Container>
            <Column>
              <Content>
                <h1>Learn Fonio</h1>
                <p>
                  Fonio is a tool aimed at building rich html pages featuring text, bibliographic references, images, interactive resources such as visualizations and videos.
                </p>
                <p>
                  Write your story and enrich it with diverse resources, then customize its look, then export it as a plain HTML file to host anywhere on the web.
                </p>
                <p>
                  Fonio is a tool aimed at building rich html pages featuring text, bibliographic references, images, interactive resources such as visualizations and videos.
                </p>
                <p>
                  Write your story and enrich it with diverse resources, then customize its look, then export it as a plain HTML file to host anywhere on the web.
                </p>
                <p>
                  Fonio is a tool aimed at building rich html pages featuring text, bibliographic references, images, interactive resources such as visualizations and videos.
                </p>
                <p>
                  Write your story and enrich it with diverse resources, then customize its look, then export it as a plain HTML file to host anywhere on the web.
                </p>
                <p>
                  Fonio is a tool aimed at building rich html pages featuring text, bibliographic references, images, interactive resources such as visualizations and videos.
                </p>
                <p>
                  Write your story and enrich it with diverse resources, then customize its look, then export it as a plain HTML file to host anywhere on the web.
                </p>
                <p>
                  Fonio is a tool aimed at building rich html pages featuring text, bibliographic references, images, interactive resources such as visualizations and videos.
                </p>
                <p>
                  Write your story and enrich it with diverse resources, then customize its look, then export it as a plain HTML file to host anywhere on the web.
                </p>
              </Content>
            </Column>
          </Container>
        );
      case 'about':
        return (
          <Container>
            <Column>
              <Content>
                <h1>About Fonio</h1>
                <p>
                  Fonio is a tool aimed at building rich html pages featuring text, bibliographic references, images, interactive resources such as visualizations and videos.
                </p>
                <p>
                  Write your story and enrich it with diverse resources, then customize its look, then export it as a plain HTML file to host anywhere on the web.
                </p>
                <p>
                  Fonio is a tool aimed at building rich html pages featuring text, bibliographic references, images, interactive resources such as visualizations and videos.
                </p>
                <p>
                  Write your story and enrich it with diverse resources, then customize its look, then export it as a plain HTML file to host anywhere on the web.
                </p>
                <p>
                  Fonio is a tool aimed at building rich html pages featuring text, bibliographic references, images, interactive resources such as visualizations and videos.
                </p>
                <p>
                  Write your story and enrich it with diverse resources, then customize its look, then export it as a plain HTML file to host anywhere on the web.
                </p>
                <p>
                  Fonio is a tool aimed at building rich html pages featuring text, bibliographic references, images, interactive resources such as visualizations and videos.
                </p>
                <p>
                  Write your story and enrich it with diverse resources, then customize its look, then export it as a plain HTML file to host anywhere on the web.
                </p>
              </Content>
            </Column>
          </Container>
        );
      case 'stories':
      default:
      const {
        stories,
        newStoryOpen,
        storyInfoVisible,
        newStoryTabMode,
        instanceTitle,
        profileEdited,
      } = this.state;
      const setNewStoryTabMode = thatnewStoryTabMode => this.setState({newStoryTabMode: thatnewStoryTabMode});
        return (
          <Container>
            <Columns>
              <Column isHidden={storyInfoVisible} isSize={storyInfoVisible ? 0 : '1/3'}>
                <Title isSize={2}>
                  {instanceTitle} stories
                </Title>

                <div>
                  <Title isSize={5}>
                            Your profile <HelpPin>choose how you will be identified by other writers</HelpPin>
                  </Title>
                  <Level isMobile>
                    <LevelLeft>
                      <LevelItem>
                        {
                              profileEdited ?
                                <DropZone>
                                  Drop an image
                                </DropZone> :
                                <Image isRounded isSize="64x64" src="https://via.placeholder.com/48x48" />
                             }
                      </LevelItem>
                      <LevelItem>
                        {
                                profileEdited ?
                                  <Control>
                                    <Input type="text" placeholder="Write a nickname" />
                                  </Control> :
                                  'Jean-Pierre'
                              }
                      </LevelItem>
                      <LevelItem>
                        <Button isColor={profileEdited ? 'primary' : ''} onClick={() => this.setState({profileEdited: !profileEdited})}>
                                Edit
                        </Button>
                      </LevelItem>
                    </LevelLeft>
                  </Level>
                </div>
                <Level />
                <Content>
                  Create a new story to produce a website.
                </Content>

                <div>
                  <Button isFullWidth onClick={() => this.setState({newStoryOpen: !this.state.newStoryOpen})} isColor={newStoryOpen ? 'primary' : 'info'}>
                            New story
                  </Button>
                </div>
                <Level />
              </Column>
              <Column isHidden={newStoryOpen} isSize={storyInfoVisible ? '1/2' : '2/3'}>
                <Column>
                  <Level isDisplay={storyInfoVisible ? 'block' : 'flex'}>
                    <LevelLeft>
                      <Field hasAddons>
                        <Control>
                          <Input placeholder="Find a story" />
                        </Control>
                        <Control>
                          <Button>Search</Button>
                        </Control>
                      </Field>
                    </LevelLeft>
                    <LevelRight>
                      <LevelItem><i>sort by: </i></LevelItem>
                      <LevelItem><strong>last modification</strong></LevelItem>
                      <LevelItem><a>creation</a></LevelItem>
                      <LevelItem><a>title</a></LevelItem>
                    </LevelRight>
                  </Level>
                </Column>
                {
                        stories.map((story, index) => (
                          <Level key={index}>
                            <Column>
                              <Card
                                key={index}
                                title={story.title}
                                subtitle={story.subtitle}
                                lockStatus={story.edited ? 'active' : 'open'}
                                statusMessage={story.edited ? `Edited by ${story.subtitle}` : undefined}
                                onAction={(id) => {
                                if (id === 'info') {
                                  this.setState({
                                    storyInfoVisible: true
                                  });
                                }
                              }}
                                footerActions={[

                                // {
                                //   label: 'change password',
                                //   id: 'change password'
                                // }
                              ]}
                                asideActions={[
                                {
                                  label: <span>Open</span>,
                                  isColor: 'primary',
                                  id: 'open'
                                },
                                {
                                  label: 'duplicate',
                                  id: 'duplicate'
                                },
                                {
                                  label: 'info',
                                  id: 'info'
                                },
                                {
                                  label: <span>Delete</span>,
                                  isColor: 'danger',
                                  id: 'delete'
                                },
                              ]} />
                            </Column>
                          </Level>
                        ))
                      }
              </Column>
              {
                      newStoryOpen || storyInfoVisible ?
                        <Column isSize={newStoryOpen ? '2/3' : '1/2'}>
                          {
                              storyInfoVisible ?
                                <Column>
                                  <Title isSize={2}>
                                    <Columns>
                                      <Column isSize={11}>
                                        Story title
                                      </Column>
                                      <Column>
                                        <Delete onClick={
                                          () => this.setState({newStoryOpen: false, storyInfoVisible: false})
                                        } />
                                      </Column>
                                    </Columns>
                                  </Title>
                                  <Image src="https://inra-dam-front-resources-cdn.brainsonic.com/ressources/afile/224020-77d3e-picture_client_link_1-ouverture-dossier-controverse.JPG" />
                                  <Title isSize={4}>
                                    <i>Authors</i>
                                  </Title>
                                  <Content>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum sodales massa, non malesuada neque. Duis congue non ipsum at posuere. Morbi sit amet sodales est.
                                  </Content>
                                  <Button isColor="primary" isFullWidth>
                                    Read this story
                                  </Button>
                                </Column>
                              :
                                <Column>
                                  <Title isSize={2}>
                                    <Columns>
                                      <Column isSize={11}>
                                        New Story
                                      </Column>
                                      <Column>
                                        <Delete onClick={
                                          () => this.setState({newStoryOpen: false, storyInfoVisible: false})
                                        } />
                                      </Column>
                                    </Columns>
                                  </Title>
                                  <Tabs isBoxed isFullWidth>
                                    <Container>
                                      <TabList>
                                        <Tab onClick={() => setNewStoryTabMode('new-story')} isActive={newStoryTabMode === 'new-story'}><TabLink>Create a story</TabLink></Tab>
                                        <Tab onClick={() => setNewStoryTabMode('import-story')} isActive={newStoryTabMode === 'import-story'}><TabLink>Import an existing story</TabLink></Tab>
                                      </TabList>
                                    </Container>
                                  </Tabs>
                                  {newStoryTabMode === 'new-story' ?
                                    <form>
                                      <Field>
                                        <Control>
                                          <Label>
                                          Story title
                                            <HelpPin place="right">
                                            Explanation about the story title
                                            </HelpPin>
                                          </Label>
                                          <Input type="text" placeholder="Story title" />
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
                                        Story password
                                          <HelpPin place="right">
                                          Explanation about the story password
                                          </HelpPin>
                                        </Label>
                                        <Control hasIcons>
                                          <Input
                                            isColor="success" placeholder="Text Input" value="bloomer"
                                            type="password" />
                                          <Icon isSize="small" isAlign="left">
                                            <span className="fa fa-lock" aria-hidden="true" />
                                          </Icon>
                                          <Icon isSize="small" isAlign="right">
                                            <span className="fa fa-exclamation" aria-hidden="true" />
                                          </Icon>
                                        </Control>
                                        <Help isColor="danger">Password must be at least 6 characters long</Help>
                                      </Field>

                                      <Field>
                                        <Label>
                                      Authors
                                          <HelpPin place="right">
                                          Explanation about the story authors
                                          </HelpPin>
                                        </Label>
                                        <Control hasIcons>
                                          <Input isColor="success" placeholder="Text Input" value="bloomer" />
                                          <Icon isSize="small" isAlign="left">
                                            <span className="fa fa-user" aria-hidden="true" />
                                          </Icon>
                                          <Icon isSize="small" isAlign="right">
                                            <Delete />
                                          </Icon>
                                          <Button>
                                          Add an author
                                          </Button>
                                        </Control>
                                      </Field>
                                      <Field>
                                        <Label>Abstract</Label>
                                        <Control hasIcons>
                                          <TextArea placeholder={'abstract'} />
                                        </Control>
                                      </Field>
                                      <Columns>
                                        <Column>
                                          <Button isFullWidth isColor="success">
                                        Create a new story
                                          </Button>
                                        </Column>
                                        <Column>
                                          <Button isFullWidth isColor="danger">
                                        Cancel
                                          </Button>
                                        </Column>
                                      </Columns>
                                    </form>
                                    :
                                    <Column>
                                      <DropZone>
                                    Drop a fonio file
                                      </DropZone>
                                      <Level />
                                      <Columns>
                                        <Column>
                                          <Button isFullWidth isColor="success">
                                        Create a new story
                                          </Button>
                                        </Column>
                                        <Column>
                                          <Button isFullWidth isColor="danger">
                                        Cancel
                                          </Button>
                                        </Column>
                                      </Columns>
                                    </Column>
                                }
                                </Column>
                            }

                        </Column>
                      : null
                    }
            </Columns>
          </Container>
        );
    }
  }

  render = () => {
    const {
      state: {
        tabMode,
        instanceTitle,
        backgroundImage,
      },
      renderContent,
    } = this;
    const setTabMode = thatTabmode => this.setState({tabMode: thatTabmode});
    return (
      <section>
        <Hero
          isColor="success"
          isSize="large"
          style={{
                background: `url(${backgroundImage})`,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundColor: '#999',
              }}>
          <HeroHeader>
            <Navbar
              isOpen={false}
              isFixed
              brandImage={icons.fonioBrand.svg}

              locationBreadCrumbs={[
              {
                href: '/',
                content: <strong>{instanceTitle}</strong>,
                isActive: true
              },
            ]}

              actionOptions={[
            {
              content: <button className="button">FR</button>
            }
            ]} />
          </HeroHeader>

          <HeroBody>
            <Container hasTextAlign="centered">
              <Title>{instanceTitle}</Title>
            </Container>
          </HeroBody>

          <HeroFooter>
            <Tabs isBoxed isFullWidth>
              <Container>
                <TabList>
                  <Tab onClick={() => setTabMode('stories')} isActive={tabMode === 'stories'}><TabLink>Stories</TabLink></Tab>
                  <Tab onClick={() => setTabMode('learn')} isActive={tabMode === 'learn'}><TabLink>Learn</TabLink></Tab>
                  <Tab onClick={() => setTabMode('about')} isActive={tabMode === 'about'}><TabLink>About</TabLink></Tab>
                </TabList>
              </Container>
            </Tabs>
          </HeroFooter>
        </Hero>

        <Container>
          <Level />
          {renderContent(tabMode)}
          <Level />
          <Level />
        </Container>

        <Footer id="footer">
          <Container>
            <Content>
              <Columns>
                <Column>
                  <p>
                                Made with<Icon hasTextColor="danger" className="fa fa-heart" />
                                by <a href="http://medialab.sciencespo.fr/">médialab</a>
                  </p>
                </Column>
              </Columns>
              <Content isSize="small">
                <p>The source code is licensed under <a target="_blank">LGPL</a>.</p>
                <p>The website content is licensed under <a target="_blank">CC ANS 4.0</a>.</p>
              </Content>
            </Content>
          </Container>
        </Footer>

      </section>
    );
  }
}
