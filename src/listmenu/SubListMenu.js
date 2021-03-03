import React from 'react'
import "./sublistmenu.css"

const SubListMenu = ({ subMenuItems, backToPrevMenu }) => {
    return (
        <div className="sublist-menu__container">
            <ul>
                <li className="back-button" onClick={backToPrevMenu}><p >Back</p></li>
                {
                    subMenuItems && 

                    subMenuItems.map(subMenuItem => 
                    <li><button className="hovernav__button">{subMenuItem.subMenuName}</button></li>)
                }
            </ul>
        </div>
    )
}

export default SubListMenu