import React from 'react'
import { tabsContent } from "./tabsContent"
import "./factbox.css"

const FactBox = ({ activeId}) => {

    const { body, link } = tabsContent[activeId]

    return (
        <div className="content-container">
            <p>{body}</p>
            <a href={link}>Read more...</a>    
        </div>
    )
}

export default FactBox;