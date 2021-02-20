import React, { useState } from 'react'
import SubMenuItem from "./SubMenuItem"
import { sideBarMenuItems } from "./sideBarMenuItems"
import "./sidebarmenu.css"

const SideBarMenu = () => {

    const [showSubMenu, setShowSubMenu] = useState(true);

    return (
        <div className="sidebar-menu__container">
            <ul>
                {Object.values(sideBarMenuItems).map((menuItem, index )=> {
                    return (
                    <li key={index} 
                        className="sidebar__menu-item"
                        onMouseEnter={() => setShowSubMenu(true)}
                        onMouseLeave={() => setShowSubMenu(false)}>
                          <a href={menuItem.url}>{menuItem.menuName}</a>
                          {/* {
                            showSubMenu && 
                            // <ul className="submenu__list"> 
                            //     {
                            //     Object.values(menuItem.subMenuItems).map(item => 
                            //         <SubMenuItem { ...item }/>)
                            //     }
                            // </ul>
                          } */}
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default SideBarMenu;