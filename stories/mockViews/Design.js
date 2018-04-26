import React, {Component} from 'react';
import '../../src/themes/millet/bulma.theme.scss';
import icons from '../../src/themes/millet/icons';
import {
  Column,
  Columns,
  Container,
  Navbar,
  Level,
  Tabs,
  Title,
  TabList,
  TabLink,
  Collapsable,
  CodeEditor,
  Button,
  Field,
  Select,
  Control,
  Dropdown,
  Input,
  Label,
  ColorPicker,
  Box,
  Tab,
  Help,
  Content,
} from '../../src/components';

export default class DesignView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabMode: 'parameters',
      stylesMode: 'gui',
      sizeActive: false,
      colorEdited: false
    };
  }

  setTabMode = tabMode => this.setState({tabMode});

  renderContent = () => {
    const {
      state: {
        tabMode,
        stylesMode,
        sizeActive,
        colorEdited,
      }
    } = this;
    switch (tabMode) {
      case 'parameters':
        return (
          <Column>
            <form>
              <Field>
                <Label>Citation style</Label>
                <Box>
                  <Title isSize={5}>
                        APA
                  </Title>
                  <Help>Example:</Help>
                  <Content isSize={'small'}>
                      Ricci, D., de Mourat, R., Leclercq, C., & Latour, B. (2015). Clues. Anomalies. Understanding. <i>Visible Language</i>, 49(3).
                  </Content>
                </Box>
              </Field>
            </form>
          </Column>
        );
      case 'style':
      default:
        return (
          <Column>
            <Collapsable paddingBottom={'5rem'} isCollapsed={stylesMode === 'code'}>
              <form>
                <Field>
                  <Label>Title 1 size:</Label>
                  <Dropdown
                    onToggle={() => this.setState({sizeActive: !sizeActive})}
                    isActive={sizeActive}
                    value={{id: 1, label: '1 rem'}}
                    options={[1, 2, 3, 4].map(id => ({id, label: id + ' rem'}))}>
                    <Input
                      value={'1.1rem'} />
                  </Dropdown>
                </Field>
                <Field>
                  <Label>Title 1 size:</Label>
                  <Control>
                    <Select value={'3rem'}>
                      <option>1rem</option>
                      <option>2rem</option>
                      <option>3rem</option>
                      <option>4rem</option>
                    </Select>
                  </Control>
                </Field>
                <Field>
                  <Label>Background color:</Label>
                  <Level>
                    <ColorPicker
                      edited={colorEdited}
                      color={'#32FF'}
                      onEdit={() => this.setState({colorEdited: !colorEdited})} />
                    <Input value={'#32FF'} />
                  </Level>
                </Field>
                <Field>
                  <Label>Figures margin</Label>
                  <Control>
                    <Select value={'same as content'}>
                      <option>same as content</option>
                      <option>full width</option>
                    </Select>
                  </Control>
                </Field>
              </form>
            </Collapsable>
            {stylesMode !== 'code' && <Level />}
            <Button
              isFullWidth
              isColor={stylesMode === 'gui' ? '' : 'primary'}
              onClick={() => this.setState({stylesMode: stylesMode === 'gui' ? 'code' : 'gui'})}>
              Edit css (advanced)
            </Button>
            {stylesMode === 'code' && <Level />}
            <Collapsable isCollapsed={stylesMode !== 'code'}>
              <CodeEditor
                value={`
p{
  color: red;
}`} />
            </Collapsable>
          </Column>
        );
    }
  }

  render = () => {
    const {
      state: {
        tabMode
      },
      setTabMode,
      renderContent
    } = this;
    return (
      <div>
        <Navbar
          fonioBrandImage={icons.fonioBrand.svg}
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
              <Tabs isBoxed isFullWidth>
                <TabList>
                  <Tab onClick={() => setTabMode('parameters')} isActive={tabMode === 'parameters'}><TabLink>Parameters</TabLink></Tab>
                  <Tab onClick={() => setTabMode('style')} isActive={tabMode === 'style'}><TabLink>Style</TabLink></Tab>
                </TabList>
              </Tabs>
              {renderContent()}
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
