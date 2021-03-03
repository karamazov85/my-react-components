import React from 'react'
import NavItem  from "./NavItem"
import { menuItems } from "./menuItems"
import "./navbar.css"


const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <NavItem title="Services" content={menuItems["services"]} />
                <NavItem  title="Pricing" content={menuItems["pricing"]}/>
                <NavItem  title="About" content={menuItems["about"]}/>
            </ul>
        </nav>
    )
}

export default NavBar