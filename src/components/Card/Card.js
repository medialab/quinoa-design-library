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
  isActive = false,
  headerContent,
  onAction,
  lockStatus,
  statusMessage,
  isSelectable,
  style = {},
  onClick
}) => {
  const displayedLockStatus = lockStatus || 'open';
  const handleAction = (id, e) => {
    if (typeof onAction === 'function') {
      onAction(id, e);
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
    <div style={style} onClick={onClick} className={`card is-lock-status-${displayedLockStatus} ${isSelectable ? 'is-selectable' : ''} ${isActive ? 'is-active' : ''}`}>
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
            <div className="card-content aside-actions">
              {
              asideActions.map((action, index) => {
                const onActionClick = (e) => {
                  handleAction(action.id, e);
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
              const onActionClick = (e) => {
                handleAction(action.id, e);
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
