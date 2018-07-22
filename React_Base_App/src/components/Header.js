import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge, Row, Col  } from 'reactstrap';
import {Navbar, NavItem, MenuItem, NavDropdown, Nav} from 'react-bootstrap';
import '../css/Header.css';

export default function Header (props) {

    return (
    <div className='header-part'>
        <a href="//www.google.com" title="google.com" target="_top">
            <img className="app-logo" src="//img.alicdn.com/tfs/TB1_Gn8RXXXXXXqaFXXXXXXXXXX-380-54.png"/>
        </a>
    </div>
);
}