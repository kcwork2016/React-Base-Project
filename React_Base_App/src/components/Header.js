import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge, Row, Col  } from 'reactstrap';
import {Navbar, NavItem, MenuItem, NavDropdown, Nav} from 'react-bootstrap';

export default function Header (props) {

    return (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#home">React-Bootstrap</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem eventKey={1} href="#">
                Link
            </NavItem>
            <NavItem eventKey={2} href="#">
                Link
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
        </Nav>
    </Navbar>
);
}

// <!-- Image and text -->
// <nav class="navbar navbar-light bg-light">
//     <a class="navbar-brand" href="#">
//         <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
//             Bootstrap
//     </a>
// </nav>