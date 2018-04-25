import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';


/**
 * Renders the DropZone component as a pure function
 * @param {object} props - used props (see prop types below)
 * @param {object} context - used context data (see context types below)
 * @return {ReactElement} component - the resulting component
 */
const DropZone = ({
  onDrop,
  children,
  accept
}) => (
  <Dropzone
    className="drop-zone"
    activeClassName="active"
    accept={accept}
    onDrop={onDrop}>
    {({isDragActive, isDragReject}) => (
      <div className={'caption-wrapper ' + (isDragActive ? 'active ' : ' ') + (isDragReject ? 'reject' : '')}>
        <div className="caption-container">{children}</div>
      </div>
    )}
  </Dropzone>
);


/**
 * Component's properties types
 */
DropZone.propTypes = {
  onDrop: PropTypes.func,
  accept: PropTypes.string,
};

export default DropZone;
