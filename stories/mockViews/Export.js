import React, {Component} from 'react';
import '../../src/themes/millet/bulma.theme.scss';
import {
   ModalCard,
   Button,
} from '../../src/components';

export default class ExportView extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div>
        <ModalCard
          isActive
          headerContent="Export story"
          mainContent={
            <ul>
              <li>
                <Button>
                  Export as an html page
                </Button>
              </li>
              <li>
                <Button>
                  Export as a json workfile
                </Button>
              </li>
            </ul>
          } />
      </div>
    );
  }
}
