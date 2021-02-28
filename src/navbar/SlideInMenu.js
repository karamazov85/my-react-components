import React from 'react'
import "./slideinmenu.css"

const SlideInMenu = ({children}) => {
    return (
        <div className="slide-in__container">
            {children}
        </div>
    )
}

export default SlideInMenu;