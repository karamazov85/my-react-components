import React, {useState, useEffect} from 'react'
import SubListMenu from "./SubListMenu"
import { MdKeyboardArrowRight } from "react-icons/md"
import "./listmenu.css"


const ListMenu = ({ menuItems, backToMenu }) => {

    const[activeId, setActiveId] = useState(null)

    const activeMenuItem = activeId && Object.values(menuItems).find(item => activeId === item.id)

    console.log(activeMenuItem)

    const[showSubMenu, setShowSubMenu] = useState(false)
    
    useEffect(() => {
        if (activeId) {
            setShowSubMenu(true)
        }
    }, [activeId])

    return (
        <div className="list-menu__container">
            {
                !showSubMenu ? 
                <ul>
                    <li className="back-to-main-menu__container">
                        <p className="back-button" onClick={backToMenu}>Back</p>
                    </li>
                    {
                        menuItems && Object.values(menuItems).map(item =>   
                        
                        <li onClick={(e) => {e.preventDefault(); 
                                            setActiveId(item.id)}}>
                            <button className="hovernav__button">{item.menuName}</button>
                        </li>)
                    }
                </ul>
                : 
                <SubListMenu subMenuItems={activeMenuItem.subMenuItems} backToPrevMenu={() => setShowSubMenu(false)}/>
            }
        </div>
    )
}

export default ListMenu;