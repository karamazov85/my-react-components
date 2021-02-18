import React from 'react'
import { render, screen, fireEvent, act } from "@testing-library/react"
import "@testing-library/jest-dom"
import Carousel from "./Carousel";
import { CAROUSEL_DATA } from "./carousel-data"

beforeEach(() => {
    jest.useFakeTimers()
})

// ALWAYS RESET TIMERS when using fake timers
afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
})

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

    // then click the left arrow
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
    // same for carousel dots - last one must be active!
    expect(screen.getAllByTestId('carousel-dot')[String(arrayLength -1)]).toHaveClass('dot-active') 
})

test('without user click, slides images in correct order automatically every 3 sec', () => {
   render(<Carousel />);
   // test functions that cause React state changes OUTSIDE THE REACT CALL STACK must be wrapped in act();

   // on component load
   act(() => {
        jest.advanceTimersByTime(3000);
    })
    expect(screen.getByTestId("1")).toHaveClass('active')    

    act(() => {
        jest.advanceTimersByTime(3000);
    })
    expect(screen.getByTestId("2")).toHaveClass('active')  
})

test('with auto-slide + user click mix, updates active image correctly', () => {
   render(<Carousel />);

   // on component load
   act(() => {
        jest.advanceTimersByTime(3000);
    })
    expect(screen.getByTestId("1")).toHaveClass('active')    

    // then we manually click left arrow 
    fireEvent.click(screen.getByTestId('arrow-left'))
    expect(screen.getByTestId("0")).toHaveClass('active')

    // then leave it for 3 secs to run on auto
    act(() => {
        jest.advanceTimersByTime(3000);
    })
    expect(screen.getByTestId("1")).toHaveClass('active')  
})