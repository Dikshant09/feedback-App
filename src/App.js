import Header from './components/Header.jsx';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import About from './pages/About.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink.jsx';
import { FeedbackProvider } from './context/FeedbackContext.jsx';

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <div className="container">
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </div>
              <AboutIconLink />
            </>
          } />

          <Route path='/about' element={
            <div className="container"><About /></div>
          } />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;