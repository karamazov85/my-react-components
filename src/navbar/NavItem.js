import React, { useEffect, useState, useRef} from 'react' 
import DropDown from "./DropDown"
import "./navitem.css"

const NavItem = ({ text, dropDownContent}) => {
    
    const [showDropdown, setShowDropdown] = useState(false)

    const dropDownRef = useRef()
    const menuRef = useRef()

    const handleMouseOver = (e) => {
        console.log(e.target)
        if(e.target === menuRef.current && e.target === dropDownRef.current) {
           setShowDropdown(true)
        }
    }

    useEffect(() => {
        window.addEventListener("mouseover", handleMouseOver)
        return () => {
            window.removeEventListener("mouseover", handleMouseOver)
        }
    })

    return ( 
        <>
        <li>
          <a href="#" ref={menuRef} onMouseEnter={() => setShowDropdown(true)}>{text}</a>
        </li>
        {
            showDropdown && (
            <DropDown ref={dropDownRef}>
                {
                    dropDownContent && dropDownContent
                }
            </DropDown>)
        }
        </>
    )
}

export default NavItem;