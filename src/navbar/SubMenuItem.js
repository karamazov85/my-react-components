import React, { useState } from 'react'
import "./submenuitem.css"

const SubMenuItem = ({ id, subMenuName, url, description}) => {
    
    const [showDescription, setShowDescription] = useState(true)

    return (
        <li onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)}>
            {subMenuName}
            {
                showDescription && 
                <div className="submenu-description__container">
                    <p>{description}</p>
                </div>
            }
        </li>
    )
}

export default SubMenuItem;