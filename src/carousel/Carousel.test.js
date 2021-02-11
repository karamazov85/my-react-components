import React from 'react'
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Carousel from "./Carousel";
import { CAROUSEL_DATA } from "./carousel-data"

const arrayLength = Object.values(CAROUSEL_DATA).length;

test('renders component with carouselItems and carouselDot elements whose number is same as length of data/prop array', async () => {
    render(<Carousel />);

    const carouselItems = await screen.findAllByRole('article')
    expect(carouselItems).toHaveLength(arrayLength)

    const carouselDots = await screen.findAllByTestId('carousel-dot');
    expect(carouselDots).toHaveLength(arrayLength)
})

test('renders right and left arrows',() => {
    render(<Carousel />);
    expect(screen.getByTestId('arrow-left')).toBeInTheDocument();
    expect(screen.getByTestId('arrow-right')).toBeInTheDocument();
})


test('clicking the arrows adds "active" class to the displayed CarouselItem, "previous" class to previous CarouselItem',() => {
    render(<Carousel />);
    // carouselitem 
    expect(screen.getByTestId("0")).toHaveClass('active') // at index 0 
    expect(screen.getByTestId(String(arrayLength -1))).toHaveClass('previous')
    // carouselDot - at slideIndex 0 carousel-dot 0 must be active
    expect(screen.getAllByTestId('carousel-dot')[0]).toHaveClass('dot-active')


    // first click right
    fireEvent.click(screen.getByTestId('arrow-right'))
    expect(screen.getByTestId("1")).toHaveClass('active')
    expect(screen.getByTestId("0")).toHaveClass('previous') 
    expect(screen.getAllByTestId('carousel-dot')[1]).toHaveClass('dot-active')

    // second click right 
    fireEvent.click(screen.getByTestId('arrow-right'))
    expect(screen.getByTestId("2")).toHaveClass('active')
    expect(screen.getByTestId("1")).toHaveClass('previous')
    expect(screen.getAllByTestId('carousel-dot')[2]).toHaveClass('dot-active')

    // then click on the left arrow

    fireEvent.click(screen.getByTestId('arrow-left'))
    expect(screen.getByTestId("1")).toHaveClass('active')
    expect(screen.getByTestId("0")).toHaveClass('previous')
    expect(screen.getAllByTestId('carousel-dot')[1]).toHaveClass('dot-active') 

    // click left arrow again 
    fireEvent.click(screen.getByTestId('arrow-left'))
    expect(screen.getByTestId("0")).toHaveClass('active')
    expect(screen.getByTestId(String(arrayLength -1))).toHaveClass('previous')
    expect(screen.getAllByTestId('carousel-dot')[0]).toHaveClass('dot-active') 

    // if we click again, the index goes below 0. We want the last item in the CAROUSEL_DATA array to be active now
    fireEvent.click(screen.getByTestId('arrow-left'))
    expect(screen.getByTestId(String(arrayLength -1))).toHaveClass('active')
    
    // same goes for carousel dots - last one must be active
    expect(screen.getAllByTestId('carousel-dot')[String(arrayLength -1)]).toHaveClass('dot-active') 
})

