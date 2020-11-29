import React, {useState, useEffect} from 'react';
import axios from 'axios';

function QuestionForm() {
   const [newQuestion, setQuestion ] = useState({
        name: '',
        email: '',
        topic: 'Astrology',
        question: ''
   })

   function sendQuestion() {
    console.log("newQuestion:", newQuestion);
   }


    useEffect(() => {
        setQuestion({
            name: '',
            email: '',
            topic: 'Astrology',
            question: '' 
        }[newQuestion])

  })

      return (
        <div>
          <h1>Send Your Question</h1>
          <form action="">
            <input type="text" placeholder="Name"  onchange={(e)=>setQuestion({name: e.target.value})} />
            <input type="text" placeholder="Email" onchange={(e)=>setQuestion({email: e.target.value})} />
            <input type="text" placeholder="Topic" onchange= {(e)=>setQuestion({topic: e.target.value})} />
            <input type="text" placeholder="Question" onchange={(e)=>setQuestion({question: e.target.value})} />
            <button 
            className="q-button"
            submit={()=>sendQuestion()}
            >Submit Question
            </button>
          </form>
          <hr/>
        </div>
      );
}


export default QuestionForm;