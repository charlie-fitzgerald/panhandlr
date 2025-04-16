import React from 'react';
import { Link } from 'react-router-dom';
import { dummyUsers } from '../data/dummyData';

const Hero = () => {
  const randomUser = dummyUsers[Math.floor(Math.random() * dummyUsers.length)];

  return (
    <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-16 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Panhandlr</h1>
        <p className="text-xl mb-8">
          A platform that empowers individuals to raise funds for their causes, passions, and projects. 
          Whether you're funding a dream or helping others, Panhandlr connects you with kindhearted donors.
        </p>
        
        <div className="flex justify-center space-x-6">
          <Link
            to="/top-panhandlrs"
            className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-200 text-lg font-semibold"
          >
            See Top Panhandlrs
          </Link>
          <Link
            to={`/panhandlr/${randomUser.id}`}
            className="bg-white text-pink-600 px-6 py-3 rounded-lg hover:bg-gray-200 text-lg font-semibold"
          >
            Surprise Me!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
