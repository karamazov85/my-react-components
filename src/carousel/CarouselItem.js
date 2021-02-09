import React from 'react'
import "./carouselItem.css"

const CarouselItem = ({title, body, img_path, imgPosition}) => {
    return (
        <div className={`carouselItem__container ${imgPosition}`} style={{backgroundImage: `url(${img_path})`}}>
            {/* <img src={img_path} alt="a beautiful place"/> */}
            <div className="text__container">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default CarouselItem;
