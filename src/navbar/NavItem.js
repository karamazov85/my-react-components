import React, { useState } from 'react' 
import DropDown from "./DropDown"
import "./navitem.css"

const NavItem = ({ text, dropDownContent}) => {
    
    const [showDropdown, setShowDropdown] = useState(true)

    const handleMouseEnter = (e) => {
           setShowDropdown(true)
    }

    const handleMouseLeave = (e) => {
           setShowDropdown(false)
    }

    const habdleMenuItemClick = (e) => {
        e.preventDefault(); 
        if(dropDownContent) {
            setShowDropdown(!showDropdown)
        }
    }

    return ( 
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={habdleMenuItemClick}>
          <a href="#">{text}</a>
        {
            showDropdown && (
            <DropDown>
                {
                    dropDownContent && dropDownContent
                }
            </DropDown>)
        }
        </li>
    )
}

export default NavItem;