import React from 'react';
import { Link } from 'react-router-dom';
import { dummyUsers } from '../data/dummyData';

const RandomPanhandlrs = () => {
  const randomUsers = dummyUsers.sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Random Panhandlrs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {randomUsers.map((user) => (
          <Link
            key={user.id}
            to={`/panhandlr/${user.id}`}
            className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 mx-auto rounded-full mb-2"
            />
            <h3 className="text-lg font-semibold text-center">{user.name}</h3>
            <p className="text-gray-500 text-sm text-center">{user.bio}</p>
            <p className="text-blue-600 font-bold text-center mt-2">
              Donations: ${user.donations}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RandomPanhandlrs;
