import React from 'react'
import NavItem  from "./NavItem"
import AboutDropdown from "./About_Dropdown"
import TabsMenu from "../tabsmenu/TabsMenu"
import { sideBarMenuItems } from "./sideBarMenuItems"
import "./navbar.css"


const NavBar = () => {
    
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <NavItem text="NavItem 1" dropDownContent={<TabsMenu sideBarMenuItems={sideBarMenuItems} />}/>
                <NavItem  text="NavItem 2" dropDownContent={<TabsMenu sideBarMenuItems={sideBarMenuItems} />}/>
                <NavItem  text="NavItem 3" dropDownContent={<TabsMenu sideBarMenuItems={sideBarMenuItems} />}/>
                <NavItem text="NavItem 4" dropDownContent={<TabsMenu sideBarMenuItems={sideBarMenuItems} />}/>
            </ul>
        </nav>
    )
}

export default NavBar