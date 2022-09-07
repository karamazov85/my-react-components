import React, { useState } from 'react' 
import DropDown from "./DropDown"
import SlideInMenu from "./SlideInMenu"; 
import TabsMenu from "../tabsmenu/TabsMenu"
import ListMenu from "../listmenu/ListMenu"
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md"
import "./navitem.css"

const NavItem = ({ title, content}) => {
    
    const [showDropdown, setShowDropdown] = useState(false)

    const [showSlideInMenu, setShowSlideInMenu] = useState(false)

    const handleMouseEnter = (e) => {
        if(window.innerWidth > 720) {
            setShowDropdown(true)
        } else {
            setShowDropdown(false)
        }
    }

    const handleMouseLeave = (e) => {
        if(window.innerWidth > 720) {
            setShowDropdown(false)
        } else {
            setShowDropdown(false)
        }
    }

    const habdleMenuItemClick = (e) => {
        e.preventDefault(); 
        if(window.innerWidth > 720 && content) {
            setShowDropdown(true)
        } else {
            setShowSlideInMenu(true);
        }
    }

    const handleBackToMenu = (e) => {
        e.preventDefault()
        setShowSlideInMenu(false);
    }

    return ( 
        <>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="menu-button__container">
              <button className="hovernav__button" onClick={habdleMenuItemClick}>{title}</button>
                  <MdKeyboardArrowDown className={showDropdown ? "down-arrow show-arrow" : "down-arrow" }/>
                  <MdKeyboardArrowRight className="right-arrow" />
          </div>
        {
            showDropdown && (
            <DropDown>
                {
                    content && <TabsMenu menuItems={content}/>   
                }
            </DropDown>)
        }
        </li>
        {
            showSlideInMenu && (
                <SlideInMenu >
                    {
                     content && <ListMenu menuItems={content} backToMenu={handleBackToMenu}/>
                    }
                </SlideInMenu>
            )
        }
        </>
    )
}

export default NavItem;