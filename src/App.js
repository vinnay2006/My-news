import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key="general" country="us" category="general" />} />
            <Route path="/politics" element={<News key="politics" country="us" category="politics" />} />
            <Route path="/entertainment" element={<News key="entertainment" country="us" category="entertainment" />} />
            <Route path="/sports" element={<News key="sports" country="us" category="sports" />} />
            <Route path="/science" element={<News key="science" country="us" category="science" />} />
            <Route path="/technology" element={<News key="technology" country="us" category="technology" />} />
            <Route path="/health" element={<News key="health" country="us" category="health" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
