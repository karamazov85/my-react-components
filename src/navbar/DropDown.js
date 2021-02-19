import React from 'react'
import "./dropdown.css"

const DropDown = ({children}) => {
    return (
        <div className="dropdown-container">
            {children}
        </div>
    )
}

export default DropDown;