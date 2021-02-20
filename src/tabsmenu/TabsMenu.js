import React, { useState } from 'react'
import "./tabsmenu.css"
// import { sideBarMenuItems } from "../navbar/sideBarMenuItems"

const TabsMenu = ({ sideBarMenuItems }) => {
    
    const[activeId, setActiveId] = useState(null)
    const[activeSubMenuId, setActiveSubMenuId] = useState(null)

    const activeMenuItem = activeId && Object.values(sideBarMenuItems).filter(item => item.id === activeId)

    const activeSubMenuItem = activeId && Object.values(sideBarMenuItems).filter(item => item.id === activeId)[0].subMenuItems.find(subMenuItem => subMenuItem.id === activeSubMenuId)

    console.log(activeSubMenuItem)
    return (
        <div className="tabs-menu__container">
            <ul className="tabs__list"> 
                {
                    Object.values(sideBarMenuItems).map(item =>

                    <li key={item.id}
                        onMouseEnter={() => setActiveId(item.id)}
                        className={item.id === activeId ? "tab-active" : ""}>
                            {item.menuName}
                    </li>)
                }
            </ul>
           
            <ul className="submenu__list">
                {
                    activeMenuItem && 
                    activeMenuItem[0].subMenuItems.map(subMenuItem =>

                    <li onMouseEnter={() => setActiveSubMenuId(subMenuItem.id)}>{subMenuItem.subMenuName}</li>)
                }
            </ul>

            <div className="content__container">
                {   activeSubMenuItem && 

                    <p>{activeSubMenuItem.description}</p>
                }
            </div>
        </div>
    )
}
export default TabsMenu;