import React, { useState } from 'react'
import "./tabsmenu.css"

const TabsMenu = ({ menuItems }) => {

    const[activeId, setActiveId] = useState(null)
    const[activeSubMenuId, setActiveSubMenuId] = useState(null)

    const activeMenuItem = activeId && Object.values(menuItems).filter(item => item.id === activeId)
    const activeSubMenuItem = activeId && Object.values(menuItems).filter(item => item.id === activeId)[0].subMenuItems?.find(subMenuItem => subMenuItem.id === activeSubMenuId)

    return (
        <div className="tabs-menu__container">
            <ul className="tabs__list"> 
                {
                    Object.values(menuItems).map(item =>

                    <li key={item.id}
                        onMouseEnter={() => setActiveId(item.id)}
                        className={item.id === activeId ? "menu-item menu-item-active" : "menu-item"}>
                            <a href={item.url}>{item.menuName}</a>
                    </li>)
                }
            </ul>
           
            <ul className="submenu__list">
                {
                    activeMenuItem && 
                    activeMenuItem[0]?.subMenuItems?.map(subMenuItem =>

                    <li onMouseEnter={() => setActiveSubMenuId(subMenuItem.id)}
                    className={subMenuItem.id === activeSubMenuId ? "submenu-item submenu-item-active" : "submenu-item"}>
                       <a href={subMenuItem.url}>{subMenuItem.subMenuName}</a>
                    </li>)
                }
            </ul>

            <div className="description__container">
                {   activeSubMenuItem && 

                    <a href={activeSubMenuItem.url}>{activeSubMenuItem.description}</a>
                }
            </div>
        </div>
    )
}
export default TabsMenu;