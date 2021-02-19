import React from 'react'
import "./about_dropdown.css"

function AboutDropdown() {
    return (
        <div className="dropdown-about__container-inner">
            <div className="dropdown-about__sidebar">
                <ul>
                    <li>sidebarmenu</li>
                    <li>sidebarmenu</li>
                    <li>sidebarmenu</li>
                    <li>sidebarmenu</li>
                </ul>
            </div>
            <div className="dropdown-about__center">
                <ul>
                    <li>links in the center</li>
                    <li>links in the center</li>
                    <li>links in the center</li>
                    <li>links in the center</li>
                </ul>
            </div>
            <div className="dropdown-about__right">
                <p>Here comes an image or a video</p>
            </div>
        </div>
    )
}
export default AboutDropdown;