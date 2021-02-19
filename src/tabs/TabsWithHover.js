import React, { useState } from 'react'
import { tabsContent } from "./tabsContent"
import FactBox from "./FactBox"
import "./tabs.css"


const TabsWithHover = () => {

    const [activeId, setActiveId] = useState(1);

    return (
        <div className="container"> 
            <ul className="tabs-list">
                {tabsContent && Object.values(tabsContent).map(tab => {
                    const { id, tabText } = tab;
                    return (
                        <li key={id} onMouseEnter={() => setActiveId(id)} className={`${activeId === id ? "tab-active" : "tab-inactive"}`}>{tabText}</li>
                    )
                })}
            </ul>
            <FactBox activeId={activeId}/>
        </div>
    )
}

export default TabsWithHover;