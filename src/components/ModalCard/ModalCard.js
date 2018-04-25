import React from 'react';
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


const ModalCardContainer = ({
  headerContent,
  mainContent,
  footerContent,
  isActive = false,
  onClose,
}) => {
  return (
    <Modal isActive={isActive}>
      <ModalBackground />
      <ModalCard>
        <ModalCardHeader>
          <ModalCardTitle>{headerContent}</ModalCardTitle>
          <Delete onClick={onClose} />
        </ModalCardHeader>
        <ModalCardBody>
          {mainContent}
        </ModalCardBody>
        <ModalCardFooter>
          {footerContent}
        </ModalCardFooter>
      </ModalCard>
    </Modal>
  );
};

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
