import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Accordion from './Accordion';
import { ACCORDION_DATA } from "./accordion-data"

afterEach(cleanup)

test('renders an Accordion with a title', () => {
    render(<Accordion />);
    const title = screen.getByText('Sample Accordion')
    expect(title.textContent).toBe('Sample Accordion')
})


test('renders exact number of Questions components based on data file', async () => {
    render(<Accordion />);

    // findAllByRole can find us all the elements rendered with <article> === questions elements 
    const article = await screen.findAllByRole('article'); 
    
    // this is how we check that we render the same amount of <Questions /> as the length of the ACCORDION_DATA array
    expect(article).toHaveLength(5)

    const questionOne = screen.getByText(ACCORDION_DATA[0].question)
    const questionFive = screen.getByText(ACCORDION_DATA[4].question)
    expect((questionOne).textContent).toBe("I have lost my PIN. What can I do?")   
    expect((questionFive).textContent).toBe("I want to learn a new language. What do you propose?")
})