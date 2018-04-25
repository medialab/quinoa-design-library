import React, {Component} from 'react';

import {storiesOf} from '@storybook/react';

import {action} from '@storybook/addon-actions';

import {withScreenshot} from 'storybook-chrome-screenshot';


import Column from './ResizableColumn';


/**
 * Styles import
 */
import '../src/themes/millet/bulma.theme.scss';
import icons from '../src/themes/millet/icons';
import './fixtures.scss';

/**
 * Components import
 */
import {
  Button,
  Card,
  ModalCard,
  Navbar,
  Dropdown,
  Content,
  Title,
  Container,
} from '../src/components';

/**
 * Mock views import
 */
import HomeView from './mockViews/Home';
import AuthenticationView from './mockViews/Authentication';
import PasswordPromptView from './mockViews/PasswordPrompt';
import SectionView from './mockViews/Section';
import SummaryView from './mockViews/Summary';
import DesignView from './mockViews/Design';
import NewResourceView from './mockViews/NewResource';
import ResourcesView from './mockViews/Resources';
import ExportView from './mockViews/Export';

storiesOf('Presentation', module)
  .add('Welcome', () => {
    return (
      <Container>
        <Content>
          <Title isSize={1}>
            Quinoa design library
          </Title>
          <Title isSize={4}>
            <i>(Work in progress)</i>
          </Title>
          <p>
            This repository exposes the design library used in quinoa projects. It is a centralized and reusable set of operational elements (components, stylesheets, assets) to use within the quinoa family of user interfaces.
          </p>
          <p>
            This storybook exposes the library's main components and some mock views to envision how the library should be use in specific applications.
          </p>
          <p>
            This design library is making an extensive use of the <a target="blank" href="https://bulma.io/">Bulma</a> CSS framework, and one of its react wrappers <a target="blank" href="https://bloomer.js.org/">Bloomer</a>. Kudos to these great projects !
          </p>
        </Content>
      </Container>
    );
  });

storiesOf('Button', module)
  .add('simple', () => {
    return (
      <div>
        <Button>
          Coucou
        </Button>
      </div>
    );
  });

/**
 * ==========================================================
 * ==========================================================
 * ==========================================================
 * COMPONENTS STORIES
 * ==========================================================
 * ==========================================================
 * ==========================================================
 */

/**
 * ==========================================================
 * CARD COMPONENT STORIES
 * ==========================================================
 */

const CardTest = (props) => (
  <Card
    title="Awesome item"
    subtitle="That is awesome"
    footerActions={[
      {
        label: <span>Delete</span>,
        isColor: 'danger',
        id: 'delete'
      },
      {
        label: 'settings',
        id: 'settings'
      }
    ]}
    onAction={action('on action')}
    {...props} />
);

storiesOf('Card', module)
  .add('simple', withScreenshot()(() =>
    (<Column>
      <CardTest />
    </Column>))
  , {notes: 'test'})
  .add('with aside actions', withScreenshot()(() =>
    (<Column>
      <CardTest
        asideActions={[
          {
            label: <span>Open</span>,
            isColor: 'primary',
            id: 'open'
          },
          {
            label: 'copy',
            id: 'copy'
          }
        ]} />
    </Column>)
  ))
  .add('with icon', withScreenshot()(() =>
    (<Column>
      <CardTest icon={<img src="https://bulma.io/images/placeholders/96x96.png" />} />
    </Column>)
  ))
  .add('with icon and aside actions', withScreenshot()(() =>
    (<Column>
      <CardTest
        icon={<img src="https://bulma.io/images/placeholders/96x96.png" />}
        asideActions={[
          {
            label: <span>Open</span>,
            isColor: 'primary',
            id: 'open'
          },
          {
            label: 'copy',
            id: 'copy'
          }
        ]} />
    </Column>)
  ))
  .add('with icon and header content', withScreenshot()(() =>
    (<Column>
      <CardTest
        headerContent={<img src="https://inra-dam-front-resources-cdn.brainsonic.com/ressources/afile/224020-77d3e-picture_client_link_1-ouverture-dossier-controverse.JPG" />}
        icon={<img src="https://bulma.io/images/placeholders/96x96.png" />} />
    </Column>)
  ))
  .add('with icon and body content', withScreenshot()(() =>
    (<Column>
      <CardTest
        bodyContent={<img src="https://inra-dam-front-resources-cdn.brainsonic.com/ressources/afile/224020-77d3e-picture_client_link_1-ouverture-dossier-controverse.JPG" />}
        icon={<img src="https://bulma.io/images/placeholders/96x96.png" />} />
    </Column>)
  ));

/**
 * ==========================================================
 * END CARD COMPONENT STORIES
 * ==========================================================
 */

/**
 * ============================================ ==============
 * NAVBAR COMPONENT STORIES
 * ==========================================================
 */

storiesOf('Navbar', module)
  .add('default', withScreenshot()(() =>
    (<Column beginingWidth={1}>
      <Navbar
        brandImage={icons.brand.svg}

        locationBreadCrumbs={[
          {
            href: '/',
            content: <a>Scube 2018</a>
          },
          {
            href: '/',
            content: <a>My story</a>
          },
          {
            href: '/',
            content: <a>Section 1</a>,
            isActive: true
          },
        ]}

        menuOptions={[
          {
            href: '/',
            content: <span>Summary</span>,
            subItems: [
              {
                href: '/',
                content: 'Section 2'
              },
              {
                href: '/',
                content: 'Section 3'
              },
              {
                href: '/',
                content: 'Section 4'
              }
            ]
          },
          {
            href: '/',
            content: <span>Resources</span>
          },
          {
            href: '/',
            content: <span>Parameters</span>
          },
          {
            href: '/',
            content: <span>Design</span>
          }
        ]}
        actionOptions={[{
          content: <button className="button">Export</button>
        },
        {
          content: <button className="button">FR/EN</button>
        }
        ]} />
    </Column>)
  ));

/**
 * ==========================================================
 * END NAVBAR COMPONENT STORIES
 * ==========================================================
 */


/**
 * ==========================================================
 * MODAL COMPONENT STORIES
 * ==========================================================
 */

storiesOf('Modal card', module)
  .add('default', withScreenshot()(() => (
    <ModalCard
      isActive
      headerContent="Nice content"
      mainContent={<div>My content</div>}
      footerContent={[
        <Button key={0} isColor="success">Save</Button>,
        <Button key={1} isColor="warning">Cancel</Button>
      ]} />
  )));

/**
 * ==========================================================
 * END Modal COMPONENT STORIES
 * ==========================================================
 */


/**
 * ============================================ ==============
 * DROPDOWN COMPONENT STORIES
 * ==========================================================
 */
class DropContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {id: 'option3', label: <span>salut <strong>option 3</strong></span>},
      options: [
              [{
                id: 'option1',
                label: 'option 1'
              }, {
                id: 'option2',
                label: 'option 2'
              }],
              [{
                id: 'option3',
                label: 'option 3'
              }, {
                id: 'option4',
                label: 'option 4'
              }]
            ],
      isActive: false
    };
  }
  onChange = id => {
    const value = this.state.options
      .find(optionsGroup => optionsGroup.find(option => option.id === id))
      .find(option => option.id === id)
      ;
    this.setState({value});
  }
  render = () => {
    return (
      <Dropdown
        onToggle={() => this.setState({isActive: !this.state.isActive})}
        isActive={this.state.isActive}
        onChange={this.onChange}
        value={this.state.value}
        options={this.state.options} />
    );
  }
}
storiesOf('Dropdown', module)
  .add('default', withScreenshot()(() => (
    <DropContainer />
  )));
/**
 * ============================================ ==============
 * END DROPDOWN COMPONENT STORIES
 * ==========================================================
 */

/**
 * ==========================================================
 * ==========================================================
 * ==========================================================
 * END COMPONENTS STORIES
 * ==========================================================
 * ==========================================================
 * ==========================================================
 */

/**
 * ==========================================================
 * ==========================================================
 * ==========================================================
 * MOCK VIEWS STORIES
 * ==========================================================
 * ==========================================================
 * ==========================================================
 */
storiesOf('Mock views for the Fonio app', module)
  .add('home view', withScreenshot()(() => <HomeView />))
  .add('password prompt view', withScreenshot()(() => <PasswordPromptView />))
  .add('authentication view', withScreenshot()(() => <AuthenticationView />))
  .add('summary view', withScreenshot()(() => <SummaryView />))
  .add('section edition view', withScreenshot()(() => <SectionView />))
  .add('resources view', withScreenshot()(() => <ResourcesView />))
  .add('new resource view', withScreenshot()(() => <NewResourceView />))
  .add('design view', withScreenshot()(() => <DesignView />))
  .add('export view', withScreenshot()(() => <ExportView />));
/**
 * ==========================================================
 * ==========================================================
 * ==========================================================
 * END MOCK VIEWS STORIES
 * ==========================================================
 * ==========================================================
 * ==========================================================
 */

