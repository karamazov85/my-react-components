import React, { useState, useEffect } from 'react'
import { CAROUSEL_DATA } from "./carousel-data"
import CarouselItem from "./CarouselItem"
import CarouselDots from "./CarouselDots"
import {FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import "./carousel.css"

const Carousel = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    
    useEffect(() => {
        let arrayLength = Object.values(CAROUSEL_DATA).length; 

        if(slideIndex < 0) {
            setSlideIndex(arrayLength - 1)
        }

        if(slideIndex > arrayLength -1) {
            setSlideIndex(0)
        }
    },[slideIndex])

    // useEffect(() => {
    //     let carousel = setInterval(() => {
    //         setSlideIndex(slideIndex + 1)
    //     }, 3000);
    //     return () => clearInterval(carousel)
    // }, [slideIndex])

    return (
        <div className="carousel__container">
            <div className="carouselItems__container">
              {
                Object.values(CAROUSEL_DATA).map((item, itemIndex) => {
                let imgPosition = "next";
                
                if(itemIndex === slideIndex) {
                    imgPosition = "active"
                }

                if(itemIndex === slideIndex - 1 || (slideIndex === 0 && itemIndex === Object.values(CAROUSEL_DATA).length -1)) {
                    imgPosition = "previous"
                }

                return <CarouselItem key={item.id} imgPosition={imgPosition} itemIndex={itemIndex} {...item}/>
                })
              }
            <FaArrowCircleLeft data-testid="arrow-left" className="arrow-left" onClick={() => setSlideIndex(slideIndex -1)}/>
            <FaArrowCircleRight data-testid="arrow-right" className="arrow-right" onClick={() => setSlideIndex(slideIndex + 1)}/>
            </div>
        <CarouselDots slideIndex={slideIndex} arrayLength={Object.values(CAROUSEL_DATA).length}/>
        </div>
    )
}

export default Carousel;