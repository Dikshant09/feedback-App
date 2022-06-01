import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import Header from './components/Header.jsx';
import FeedbackData from '../src/data/FeedbackData.js';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import About from './pages/About.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink.jsx';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item ?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <div className="container">
              <FeedbackForm handleAdd={addFeedback} />
              <FeedbackStats feedback={feedback} />
              <FeedbackList feedback={feedback} handleDelete={handleDelete} />
            </div>
            <AboutIconLink />
          </>
        } />

        <Route path='/about' element={
          <div className="container"><About /></div>
        } />
      </Routes>
    </Router>
  );
}

export default App;