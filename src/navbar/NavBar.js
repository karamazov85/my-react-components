import React from 'react'
import NavItem  from "./NavItem"
import { menuItems } from "./menuItems"
import "./navbar.css"


const NavBar = () => {
    
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <NavItem text="Services" content={menuItems["services"]} />
                <NavItem  text="Pricing" content={menuItems["pricing"]}/>
                <NavItem  text="About" content={menuItems["about"]}/>
            </ul>
        </nav>
    )
}

export default NavBar