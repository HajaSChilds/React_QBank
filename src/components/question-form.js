import React, {useState} from 'react';
// import axios from 'axios';

function QuestionForm() {
   const [newQuestion, setQuestion] = useState({
        name: '',
        email: '',
        topic: '',
        question: ''
   })

   function sendQuestion(event) {
    event.preventDefault()
    console.log("checking sendQuestion Function")
    console.log("newQuestion:", newQuestion);
    setQuestion({
      name: '',
      email: '',
      topic: 'Astrology',
      question: '',
    });
    }


      return (
        <div className="question">
          <h1>Send Your Question</h1>
          <form className="question__form" >
            <input
              type="text"
              placeholder="Name"
              value={newQuestion['name']}
              onChange={(e) =>
                setQuestion({...newQuestion, name: e.target.value})
              }
            />
            <input
              type="text"
              placeholder="Email"
              value={newQuestion['email']}
              onChange={(e) =>
                setQuestion({...newQuestion, email: e.target.value})
              }
            />
            <select
              type="text"
              placeholder="Select Topic"
              value={newQuestion['topic']}
              onChange={(e) =>
                setQuestion({...newQuestion, topic: e.target.value})
              }
            >
              <option value="Astrology">Astrology</option>
              <option value="Finances">Finances</option>
              <option value="General">General</option>
              <option value="Software Engineering">Software Engineering</option>
            </select>
            <textarea
              type="text"
              placeholder="Your Question"
              value={newQuestion['question']}
              onChange={(e) =>
                setQuestion({...newQuestion, question: e.target.value})
              }
            />
            <button className="q-button" onClick={sendQuestion}>
              Submit Question
            </button>
          </form>
          <hr />
        </div>
      );
    }


export default QuestionForm;