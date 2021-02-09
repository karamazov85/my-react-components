import React from 'react'
import "./carouselItem.css"

const CarouselItem = ({title, body, img_path, imgPosition}) => {
    return (
        <div className={`carouselItem__container ${imgPosition}`} style={{backgroundImage: `url(${img_path})`}}>
            <div className="text__container">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default CarouselItem;
