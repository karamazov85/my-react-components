import React from 'react'

import TabsMenu from "../tabsmenu/TabsMenu"
import "./about_dropdown.css"
import { menuItems } from "./menuItems"

function AboutDropdown() {

    return (
        <div className="dropdown-about__container-inner">
            <TabsMenu menuItems={menuItems} />
        </div>
    )
}
export default AboutDropdown;