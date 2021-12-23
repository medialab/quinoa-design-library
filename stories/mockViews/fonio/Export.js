import React, {Component} from 'react';
import '../../../src/themes/millet/bulma.theme.scss';
import icons from '../../../src/themes/millet/icons';
import {
   ModalCard,
   BigSelect,
   Column,
   Notification,
} from '../../../src/components';

export default class ExportView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeOptionId: 'html'
    };
  }

  render = () => {
    return (
      <div>
        <ModalCard
          isActive
          headerContent="Export story"
          mainContent={
            <div>
              <Column>
                <BigSelect
                  activeOptionId={this.state.activeOptionId}
                  onChange={activeOptionId => this.setState({activeOptionId})}
                  options={[
                    {
                      id: 'html',
                      label: 'Export as an html page',
                      iconUrl: this.state.activeOptionId === 'html' ? icons.takeAway.white.svg : icons.takeAway.black.svg
                    },
                    {
                      id: 'json',
                      label: 'Export as a json workfile',
                      iconUrl: this.state.activeOptionId === 'json' ? icons.takeAway.white.svg : icons.takeAway.black.svg
                    }
                  ]} />
              </Column>
              <Column>
                <Notification isColor="success">
                    Story was bundled successfully !
                </Notification>
              </Column>
            </div>
          } />
      </div>
    );
  }
}
