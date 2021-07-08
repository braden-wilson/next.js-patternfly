import React from 'react';
import { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup } from '@patternfly/react-core';

class NavExpandableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGroup: 'grp-1',
      activeItem: 'grp-1_itm-1'
    };
    this.onSelect = result => {
      this.setState({
        activeGroup: result.groupId,
        activeItem: result.itemId
      });
    };
    this.onToggle = result => {
      // eslint-disable-next-line no-console
      console.log(`Group ${result.groupId} expanded? ${result.isExpanded}`);
    };
    this.handleItemOnclick = (event, itemId, groupId) => {
      // eslint-disable-next-line no-console
      console.log(`my own click handler on ${itemId}`);
    };
  }

  render() {
    const { activeGroup, activeItem } = this.state;
    return (
      <Nav onSelect={this.onSelect} onToggle={this.onToggle}>
        <NavList>
          <NavExpandable title="About devfiles" groupId="grp-1" isActive={activeGroup === 'grp-1'} isExpanded>
            <NavItem
              preventDefault
              to="#about-devfiles"
              groupId="grp-1"
              itemId="grp-1_itm-1"
              isActive={activeItem === 'grp-1_itm-1'}
            >
              What is a devfile
            </NavItem>
            <NavItem preventDefault groupId="grp-1" itemId="grp-1_itm-2" isActive={activeItem === 'grp-1_itm-2'}>
              etc.
            </NavItem>
            <NavItem to="#expandable-3" groupId="grp-1" itemId="grp-1_itm-3" isActive={activeItem === 'grp-1_itm-3'}>
              etc.
            </NavItem>
          </NavExpandable>
          <NavExpandable title="Develop with devfiles" groupId="grp-2" isActive={activeGroup === 'grp-2'} isExpanded>
            <NavItem
              preventDefault
              to="#develop"
              groupId="grp-2"
              itemId="grp-2_itm-1"
              isActive={activeItem === 'grp-2_itm1'}
            >
              Getting started
            </NavItem>
            <NavItem
              preventDefault
              to="#expandable-4"
              groupId="grp-2"
              itemId="grp-2_itm-2"
              isActive={activeItem === 'grp-2_itm-2'}
            >
              or something
            </NavItem>
            <NavItem
              preventDefault
              to="#expandable-5"
              groupId="grp-2"
              itemId="grp-2_itm-3"
              isActive={activeItem === 'grp-2_itm-3'}
            >
              etc.
            </NavItem>
            <NavItem
              preventDefault
              to="#expandable-6"
              groupId="grp-2"
              itemId="grp-2_itm-4"
              isActive={activeItem === 'grp-2_itm-4'}
            >
              etc.
            </NavItem>
          </NavExpandable>
          <NavExpandable title="Customizing a devfile" groupId="grp-3" isActive={activeGroup === 'grp-3'} isExpanded>
            <NavItem
                preventDefault
                to="#customize"
                groupId="grp-3"
                itemId="grp-3_itm-1"
                isActive={activeItem === 'grp-3_itm-1'}
            >
                .
            </NavItem>
          </NavExpandable>
          <NavExpandable title="Setting up a registry" groupId="grp-4" isActive={activeGroup === 'grp-4'} isExpanded>
            <NavItem
                preventDefault
                to="#set_registry"
                groupId="grp-4"
                itemId="grp-4_itm-1"
                isActive={activeItem === 'grp-4_itm-1'}
            >
                .
            </NavItem>
          </NavExpandable>
          <NavExpandable title="Tools provider..." groupId="grp-5" isActive={activeGroup === 'grp-5'} isExpanded>
            <NavItem
                preventDefault
                to="#tools"
                groupId="grp-5"
                itemId="grp-5_itm-1"
                isActive={activeItem === 'grp-5_itm-1'}
            >
                .
            </NavItem>
          </NavExpandable>
        </NavList>
      </Nav>
    );
  }
}

export default NavExpandableList;