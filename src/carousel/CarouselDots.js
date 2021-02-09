import React from 'react'
import { BsDot } from "react-icons/bs" 
import "./carouseldots.css"

const CarouselDots = ({slideIndex, arrayLength}) => {
    const dotNumberArray = new Array(arrayLength).fill("_");
    return (
        <div className="dot__container">
           {
               dotNumberArray.map((placeholder, index) => <BsDot className={`bs-dot ${slideIndex === index ? "dot-active" : ""}`}/>)
           }
        </div>
    )
}

export default CarouselDots;