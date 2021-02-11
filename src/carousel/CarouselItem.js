import React from 'react'
import "./carouselItem.css"

const CarouselItem = ({title, body, img_path, imgPosition, itemIndex}) => {
    return (
        <article className={`carouselItem__container ${imgPosition}`} style={{backgroundImage: `url(${img_path})`}} data-testid={`${itemIndex}`}>
            <div className="text__container">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </article>
    )
}

export default CarouselItem;
