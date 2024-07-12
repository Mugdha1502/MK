import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import styles from './App.module.css';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import Blog from './components/Blog/Blog'; // Use default import if Blog is exported as default
import { store } from './redux/store';
import VisitorCount from './components/CounterDisplay/VisitorCount';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}> 
      <div className={styles.App}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<><Home /><VisitorCount /><About /><Experience /><Projects /><Contact /><Blog/></>} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;