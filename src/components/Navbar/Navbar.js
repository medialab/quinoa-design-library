import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

import {
  Navbar,
  NavbarItem,
  NavbarBrand,
  NavbarBurger,
  NavbarStart,
  NavbarEnd,
  NavbarMenu,
  NavbarDropdown,
  NavbarLink,
  Breadcrumb,
  BreadcrumbItem
} from 'bloomer';
import Tooltip from 'react-tooltip';

import {
  StatusMarker,
  Button,
  Container,
  Image
} from '../index';

const NavbarWrapper = ({
  brandImage,
  brandContent,
  brandUrl = '/',
  locationBreadCrumbs = [],
  menuOptions = [],
  actionOptions = [],
  isOpen = true,
  onToggle,
  onProfileClick,
  isLockStatus = 'open',
  isFixed = false,
  withReactRouter = true,
  profile
}) => {
  const NavLink = withReactRouter ? Link : NavbarLink;
  const Ref = ({to, children}) => {
    if (withReactRouter) {
      return (<Link to={to}>
        {children}
      </Link>);
    }
    else {
      return (<a href={to}>
        {children}
      </a>);
    }
  };

  return (
    <Navbar className={`is-lock-status-${isLockStatus} ${isFixed ? 'is-fixed-top' : ''}`}>
      <Container>
        <NavbarBrand>
          <NavbarItem>
            <Ref to={brandUrl}>
              {brandImage && <img src={brandImage} />} {brandContent}
            </Ref>
          </NavbarItem>
          <NavbarBurger isActive={isOpen} onClick={onToggle} />
        </NavbarBrand>
        <NavbarMenu isActive={isOpen} onClick={onToggle}>
          <NavbarStart>
            <Breadcrumb className="navbar-item">
              {
                locationBreadCrumbs.map((item, index) => (
                  <BreadcrumbItem key={index} isActive={item.isActive}>
                    <Ref to={item.href}>
                      {item.content}
                    </Ref>
                  </BreadcrumbItem>
                ))
              }
            </Breadcrumb>
            {
              menuOptions.map((item, index) => {
                return (
                  <NavbarItem
                    key={index}
                    href={withReactRouter ? undefined : item.href}
                    to={item.href}
                    tag={withReactRouter ? Link : undefined}
                    isActive={item.isActive}
                    hasDropdown={(item.subItems && item.subItems.length > 0) ? true : null}
                    isHoverable={(item.subItems && item.subItems.length > 0) ? true : null}>
                    {
                      item.subItems && item.subItems.length > 0 ?
                        <NavLink href={item.href}>
                          <span>
                            {item.content}
                            {
                              item.lockStatus ?
                                <StatusMarker
                                  lockStatus={item.lockStatus}
                                  statusMessage={item.statusMessage} /> : null
                            }
                          </span>
                        </NavLink> :
                        <span>
                          {item.content}
                          {
                            item.lockStatus ?
                              <StatusMarker
                                lockStatus={item.lockStatus}
                                statusMessage={item.statusMessage} /> : null
                          }
                        </span>
                    }
                    {
                      item.subItems && item.subItems.length > 0 &&
                      <NavbarDropdown>
                        {
                          item.subItems.map((subItem, index2) => (
                            <NavbarItem key={index2} href={subItem.href}>
                              <span>
                                {subItem.content}
                                <StatusMarker
                                  lockStatus={subItem.lockStatus}
                                  statusMessage={subItem.statusMessage} />
                              </span>
                            </NavbarItem>
                          ))
                        }
                      </NavbarDropdown>
                    }

                  </NavbarItem>
                );
              })
            }
          </NavbarStart>
          <NavbarEnd>
            {
            actionOptions.map((item, index) => {
              return (
                <NavbarItem key={index} href={item.href}>
                  {item.content}
                </NavbarItem>
              );
            })
          }
            {
            profile ?
              <NavbarItem>
                <Button
                  onClick={onProfileClick} data-tip={`logged as ${profile.nickName}`} data-for="profile-btn"
                  isRounded>
                  <Image isRounded isSize="32x32" src={profile.imageUri} />
                </Button>
                <Tooltip
                  id="profile-btn"
                  effect="solid"
                  place="left" />
              </NavbarItem>
            : null
          }

          </NavbarEnd>
        </NavbarMenu>
      </Container>
    </Navbar>
  );
};

NavbarWrapper.propTypes = {
  isOpen: PropTypes.bool,
  isFixed: PropTypes.bool,
  onToggle: PropTypes.func,
  brandImage: PropTypes.string,
  brandContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  profile: PropTypes.shape({
    name: PropTypes.string,
    imageUri: PropTypes.string
  }),
  locationBreadCrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    })
  ),
  menuOptions: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      subItems: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string,
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      }))
    })
  ),
  onProfileClick: PropTypes.func,
  actionOptions: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    })
  ),
};

export default NavbarWrapper;
