import React, {Component} from 'react';
import '../../src/themes/millet/bulma.theme.scss';
import {
   ModalCard,
   Button,
   Field,
   Label,
   Control,
   Input,
   Image,
   Columns,
   Column,
   DropZone
} from '../../src/components';

export default class AuthenticationView extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div>
        <ModalCard
          isActive
          headerContent="Who is this?"
          mainContent={
            <form>
              <Field>
                <Label>Enter a nickname</Label>
                <Control>
                  <Input type="text" placeholder="Enter a nickname" />
                </Control>
              </Field>
              <Columns>
                <Column>
                  <Image isRounded isSize="64x64" src="https://via.placeholder.com/48x48" />
                </Column>
                <Column isSize="2/3">
                  <DropZone>
                      Choose a file…
                  </DropZone>
                </Column>
              </Columns>
            </form>
          }
          footerContent={[
            <Button key={0} isColor="success">Submit</Button>,
            <Button key={1} isColor="warning">Cancel</Button>
          ]} />
      </div>
    );
  }
}
