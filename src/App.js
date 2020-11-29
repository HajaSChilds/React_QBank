import React from 'react';

import './App.scss';
import QuestionForm from './components/question-form';
import QueueSection from './components/queue-section';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <li>ASK</li>
        <li>ANSWER</li>
      </header>
      <main className="App__container">
        <QuestionForm />
        <QueueSection />
      </main>
    </div>
  );
}

export default App;
