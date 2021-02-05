import React from 'react'
import { ACCORDION_DATA } from "./accordion-data";
import Question from "./Question";
import './Accordion.style.scss';

const Accordion = () => {

  return (
     <div className="outer__container">
        <div className="accordion__main--wrapper">
          <div className="accordion__title--wrapper flow-content">
            <h1>Sample Accordion</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nemo recusandae nulla, libero at ipsum nostrum.
            </p>
          </div>
          <div className="accordion__body--wrapper">
            {
              ACCORDION_DATA.map(item => 
              <Question key={item.id} {...item}/>)
            }
          </div>
      </div>
     </div>
  );
}

export default Accordion;
