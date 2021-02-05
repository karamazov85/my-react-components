import React from 'react'
import { render, screen, fireEvent } from  "@testing-library/react"
import "@testing-library/jest-dom"
import  Question  from "./Question";


test('renders an article with a question, an answer and a button', () => {
    render(<Question />);
    const question = screen.getByTestId('question'); 
    // note: import jest-dom to use this, toBeInTheDocument() is not part of RTL
    expect(question).toBeInTheDocument()
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
})

test('clicking the button toggles an answer on/off and changes the button icon between + and -', () => {
    render(<Question />);
             
    const button = screen.getByRole('button')
    // when we expect someting to already be in the document, we use getBy*
    expect(screen.getByTestId('plus')).toBeInTheDocument();
    
    fireEvent.click(button)
    // we don't expect to find 'plus' anymore so we use queryBy*
    expect(screen.queryByTestId('plus')).not.toBeInTheDocument();
    expect(screen.getByTestId('minus')).toBeInTheDocument();
    expect(screen.getByTestId('answer')).toBeInTheDocument()
    expect(screen.getByRole('link')).toBeInTheDocument()
    // we test what the user sees, not how the browser implements it! :
    expect(screen.getByRole('article')).toHaveStyle('background-color: var(--clr-primary-400)')
    // it works with this one too, but THIS IS NO GOOD though, it's testing impl detail:
    expect(screen.getByRole('article')).toHaveClass('add-bg') // toHaveClass() is in jest-DOM
    // above is equivalent to this, THIS IS NO GOOD though, it also tests impl detail: 
    expect(screen.getByRole('article').classList.contains('add-bg')).toBe(true)

    fireEvent.click(button)
    expect(screen.queryByTestId('answer')).not.toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(screen.getByTestId('plus')).toBeInTheDocument();
})