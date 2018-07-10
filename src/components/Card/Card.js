import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import StatusMarker from '../StatusMarker';

const Card = ({
  title,
  subtitle,
  bodyContent,
  icon,
  footerActions = [],
  asideActions = [],
  headerContent,
  onAction,
  lockStatus,
  statusMessage
}) => {
  const displayedLockStatus = lockStatus || 'open';
  const handleAction = id => {
    if (typeof onAction === 'function') {
      onAction(id);
    }
  };
  const renderContent = () => {
    return (
      <div className="card-content">
        <div className="media">
          {icon &&
          <div className="media-left">
            <figure className="image">
              {icon}
            </figure>
          </div>
            }
          <div className="media-content">
            <h2 className="title">
              {title}
              {lockStatus ? <StatusMarker lockStatus={lockStatus} statusMessage={statusMessage} /> : null}
            </h2>
            {
                  subtitle &&
                  <p className="subtitle">
                    {subtitle}
                  </p>
              }
          </div>
        </div>
        {
            bodyContent &&
            <div className="content">
              {bodyContent}
            </div>
          }
      </div>
      );
  };
  return (
    <div className={`card is-lock-status-${displayedLockStatus}`}>
      {headerContent && <div className="card-image">
        <figure className="image">
          {headerContent}
        </figure>
      </div>}

      {asideActions && asideActions.length ?
        <div className="columns">
          <div className="column is-three-fifths">
            {renderContent()}
          </div>
          <div className="column is-two-fifths">
            <div className="card-content">
              {
              asideActions.map((action, index) => {
                const onActionClick = () => {
                  handleAction(action.id);
                };
                return (
                  <p key={index} onClick={onActionClick}>
                    {
                      action.component ? <action.component /> :
                      <Button isDisabled={action.isDisabled} isColor={action.isColor} className="button is-fullwidth">
                        {action.label}
                      </Button>
                    }
                  </p>
                );
              })
            }
            </div>
          </div>
        </div>
        :
        renderContent()
      }
      {footerActions.length > 0 ?
        <footer className="card-footer">
          {
            footerActions.map((action, index) => {
              const onActionClick = () => {
                handleAction(action.id);
              };
              return (
                <p key={index} className="card-footer-item">
                  <Button
                    isDisabled={action.isDisabled} isColor={action.isColor} onClick={onActionClick}
                    className="button is-fullwidth">
                    {action.label}
                  </Button>
                </p>
              );
            })
          }
        </footer>
      : null}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  icon: PropTypes.element,
  subtitle: PropTypes.string,
  headerContent: PropTypes.element,
  lockStatus: PropTypes.oneOf(['open', 'locked', 'asked', 'idle', 'active']),
  statusMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
  bodyContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
  footerActions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
      id: PropTypes.string
    })
  ),
  asideActions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
      id: PropTypes.string
    })
  )
};

export default Card;
