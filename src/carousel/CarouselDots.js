import React from 'react'
import { BsDot } from "react-icons/bs" 
import "./carouseldots.css"

const CarouselDots = ({slideIndex, arrayLength}) => {
    const dotNumberArray = new Array(arrayLength).fill("_");
    return (
        <div className="dot__container">
           {
               dotNumberArray.map((_, index) => <BsDot key={index} className={`bs-dot at-index-${index.toString()} ${slideIndex === index ? "dot-active" : ""}`} data-testid="carousel-dot"/>)
           }
        </div>
    )
}

export default CarouselDots;