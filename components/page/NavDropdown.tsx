import React, { useState } from "react";

import {
    Dropdown,
    DropdownItem,
} from '@patternfly/react-core'

import StartingNavList from '@components/starting/StartingNavList';


function NavDropdown() {
    
    const [isOpen, setOpen] = useState(false);

    function toggleOpen() { setOpen(!isOpen) }

    const dropdownItems = StartingNavList().map(
        // use just the headers
        (navSection) => <DropdownItem key="link">{navSection[0]}</DropdownItem>
    );
    
    return (
        <Dropdown
            onSelect={toggleOpen}
            toggle={<a href="/starting">Getting Started</a>}
            isOpen={isOpen}
            dropdownItems={dropdownItems}
        />
    );
}

export default NavDropdown;