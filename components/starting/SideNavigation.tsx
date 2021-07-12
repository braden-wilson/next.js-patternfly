import React, { useState } from 'react';
import { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup, WizardNavItem } from '@patternfly/react-core';

import StartingNavList from '@components/starting/StartingNavList';


function NavExpandableList() {

  return (
    <Nav>
        <NavList>
            {StartingNavList().map(
                (navSection) => <NavExpandable title={navSection[0] as string} isExpanded>
                    {(navSection[1] as string[]).map(
                        (navItem) => <NavItem preventDefault to={"#"+navItem}>{navItem}</NavItem>
                    )}
                </NavExpandable>
            )}
        </NavList>
    </Nav>
  );
}

export default NavExpandableList;