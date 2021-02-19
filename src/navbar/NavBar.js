import React from 'react'
import NavItem  from "./NavItem"
import AboutDropdown from "./About_Dropdown"
import "./navbar.css"


const NavBar = () => {
    
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <NavItem text="NavItem 1" dropDownContent={<AboutDropdown />}/>
                <NavItem  text="NavItem 2"/>
                <NavItem  text="NavItem 3" />
                <NavItem text="NavItem 4"/>
            </ul>
        </nav>
    )
}

export default NavBar