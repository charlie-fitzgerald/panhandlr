import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import TopPanhandlrs from './components/TopPanhandlrs';
import TrendingPanhandlrs from './components/TrendingPanhandlrs';
import RandomPanhandlrs from './components/RandomPanhandlrs';
import PanhandlrPage from './components/PanhandlrPage';
import RegionPage from './components/RegionPage';
import TagPage from './components/TagPage';
import Login from './components/Login';
import Signup from './components/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/top-panhandlrs" element={<TopPanhandlrs />} />
          <Route path="/trending" element={<TrendingPanhandlrs />} />
          <Route path="/random" element={<RandomPanhandlrs />} />
          
          {/* Panhandlr Individual Page */}
          <Route path="/panhandlr/:id" element={<PanhandlrPage />} />
          
          {/* Region and Tag Pages */}
          <Route path="/region/:region" element={<RegionPage />} />
          <Route path="/tag/:tag" element={<TagPage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
