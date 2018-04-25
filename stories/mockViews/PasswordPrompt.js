import React, {Component} from 'react';
import '../../src/themes/millet/bulma.theme.scss';
import {
   ModalCard,
   Button,
   Field,
   Label,
   Control,
   Input,
   HelpPin,
   Help,
   Icon
} from '../../src/components';

export default class PasswordView extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div>
        <ModalCard
          isActive
          headerContent="Story 1"
          mainContent={
            <form>
              <Field>
                <Label>
                    Enter your password
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
                <Help isColor="danger">Password is not valid</Help>
              </Field>
            </form>
          }
          footerContent={[
            <Button isFullWidth key={0} isColor="success">Submit</Button>,
            <Button isFullWidth key={1} isColor="warning">Cancel</Button>
          ]} />
      </div>
    );
  }
}
