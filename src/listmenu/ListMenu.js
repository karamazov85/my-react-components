import React from 'react'
import "./listmenu.css"


const ListMenu = ({ menuItems, backToMenu }) => {


    return (
        <div className="list-menu__container">
            <ul>
                <li className="back-to-main-menu__container">
                    <a href="#" onClick={backToMenu}>Back to Main Menu</a>
                </li>
                {
                    menuItems && Object.values(menuItems).map(item =>   
                    <li><a href="#">{item.menuName}</a></li>)
                }
            </ul>
        </div>
    )
}

export default ListMenu;