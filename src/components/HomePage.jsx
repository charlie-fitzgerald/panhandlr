import React from 'react';
import Hero from './Hero.jsx';
import TopPanhandlrs from './TopPanhandlrs.jsx';
import TrendingPanhandlrs from './TrendingPanhandlrs';
import RandomPanhandlrs from './RandomPanhandlrs';

const HomePage = () => {
  return (
    <div className="p-4">
      {/* Welcome Section */}
      <div className="text-center mb-8">
        <Hero />
      </div>

      {/* Top Panhandlrs Section */}
      <section className="mb-8">
        <TopPanhandlrs />
      </section>

      {/* Trending Panhandlrs Section */}
      <section className="mb-8">
        <TrendingPanhandlrs />
      </section>

      {/* Random Panhandlrs Section */}
      <section className="mb-8">
        <RandomPanhandlrs />
      </section>
    </div>
  );
};

export default HomePage;
