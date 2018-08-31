import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';


import {
  Modal,
  ModalBackground,
  ModalCard,
  ModalCardHeader,
  ModalCardBody,
  ModalCardFooter,
  Delete,
  ModalCardTitle
} from 'bloomer';

class ModalCardContainer extends Component {

  componentDidMount = () => {
    setTimeout(() => {
      if (this.props.isActive && this.modal) {
        const inputs = this.modal.getElementsByTagName('input');
        if (inputs && inputs.length) {
          inputs[0].focus();
        }
      }
    });
  }

  componentWillReceiveProps = nextProps => {
    if (!this.props.isActive && nextProps.isActive && this.modal) {
      const inputs = this.modal.getElementsByTagName('input');
      if (inputs && inputs.length) {
        inputs[0].focus();
      }
    }
  }
  render = () => {
    const {
      props: {
        headerContent,
        mainContent,
        footerContent,
        isActive = false,
        onClose,
        style = {}
      }
    } = this;
    const bindRef = modal => {
      this.modal = modal;
    };
    return (
      <div ref={bindRef}>
        <Modal isActive={isActive}>
          <ModalBackground onClick={onClose} />
          <ModalCard style={style}>
            <ModalCardHeader>
              <ModalCardTitle>{headerContent}</ModalCardTitle>
              {typeof onClose === 'function' && <Delete onClick={onClose} />}
            </ModalCardHeader>
            <ModalCardBody>
              {mainContent}
            </ModalCardBody>
            {footerContent && <ModalCardFooter>
              {footerContent}
            </ModalCardFooter>}
          </ModalCard>
        </Modal>
      </div>
        );
  }
}

ModalCardContainer.propTypes = {
  headerContent: PropTypes.oneOfType([
    PropTypes.string,
      PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
      ])
    )
  ]),
  mainContent: PropTypes.oneOfType([
    PropTypes.string,
      PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
      ])
    )
  ]),
  footerContent: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ])
  ),
  isActive: PropTypes.bool
};

export default ModalCardContainer;
