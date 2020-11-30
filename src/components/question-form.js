import React, {useState, useEffect} from 'react';
import axios from 'axios';

function QuestionForm() {
   const [newQuestion, setQuestion] = useState({
        name: '',
        email: '',
        topic: 'Astrology',
        question: ''
   })

   function sendQuestion(e) {
    e.preventDefault()
    console.log("newQuestion:", newQuestion);
    setQuestion({
      name: '',
      email: '',
      topic: 'Astrology',
      question: '',
    });
    }


      return (
        <div>
          <h1>Send Your Question</h1>
          <form action="">
            <input 
             type="text" 
             placeholder="Name" 
             value={newQuestion['name']}
             onChange={(e) => setQuestion({...newQuestion, name:e.target.value})} 
             />
            <input 
             type="text" 
             placeholder="Email" 
             value={newQuestion['email']}
             onChange={(e)=>setQuestion({...newQuestion, email: e.target.value})} 
             />
            <input 
            type="text" 
            placeholder="Topic" 
            value={newQuestion['topic']}
            onChange= {(e)=>setQuestion({...newQuestion, topic: e.target.value})}
             />
            <input 
            type="text" 
            placeholder="Question" 
            value={newQuestion['question']}
            onChange={(e)=>setQuestion({...newQuestion, question: e.target.value})} 
            />
            <button 
             className="q-button"
             onSubmit={(e)=>sendQuestion()}
            >Submit Question
            </button>
          </form>
          <hr/>
        </div>
      );
    }


export default QuestionForm;