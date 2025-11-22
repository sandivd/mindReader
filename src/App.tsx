import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import MindReader from './mindReader';
import About from './About';

function App() {
  return (
    <Router basename="/mindReader">
      <Layout>
        <Routes>
          <Route path="/" element={<MindReader />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
