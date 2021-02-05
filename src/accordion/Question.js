import React, { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import "./Question.style.scss"

const Question = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false)
    return (
        <>
           <article className={showAnswer ? "add-bg" : ""}>
                <button onClick={() => setShowAnswer(!showAnswer)}>
                    {
                        !showAnswer ? <FiPlus data-testid="plus" className="toggle-logo"/> : <FiMinus data-testid="minus" className="toggle-logo"/>
                    }
                </button>
                <p data-testid="question" className="question">{question}</p>
                {
                showAnswer && 
                <div data-testid="answer" className="answer flow-content">
                    <p>{answer}</p>
                    <a href="/learn-more">Learn more</a>    
                </div>
               }
           </article>
        </>
    )
}

export default Question;