import React from 'react'
import SideBarMenu from "./SideBarMenu"
import TabsMenu from "../tabsmenu/TabsMenu"
import "./about_dropdown.css"
import { sideBarMenuItems } from "./sideBarMenuItems"

function AboutDropdown() {
    console.log(sideBarMenuItems)
    return (
        <div className="dropdown-about__container-inner">
            <TabsMenu sideBarMenuItems={sideBarMenuItems} />
        </div>
    )
}
export default AboutDropdown;