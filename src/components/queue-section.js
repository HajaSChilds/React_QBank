import React, { Component } from 'react';

import QuestionBank from './question-bank';
import AnswerQuestion from './answer-question';
 
 function QueueSection() {
     return(
         <div className="queueSection">
             <QuestionBank />
             <AnswerQuestion />            
        </div>
    );
}

export default QueueSection;