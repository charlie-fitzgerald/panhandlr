import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { topPanhandlrsData } from '../data/dummyData';

// Medal Icons
const MedalIcon = ({ rank }) => {
  switch (rank) {
    case 1:
      return <span className="text-yellow-500 text-xl">🥇</span>;
    case 2:
      return <span className="text-gray-400 text-xl">🥈</span>;
    case 3:
      return <span className="text-orange-500 text-xl">🥉</span>;
    default:
      return <span className="text-gray-700 text-xl">{rank}.</span>;
  }
};

const TopPanhandlrs = () => {
  const [activeTab, setActiveTab] = useState('overall');
  const tabs = ['day', 'week', 'month', 'overall'];

  // Dynamically get sorted user list for selected timeframe
  const userList = topPanhandlrsData[activeTab];

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">🏆 Top Panhandlrs</h2>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-4 space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold ${
              activeTab === tab
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Ranking List */}
      <ul className="bg-white shadow-lg rounded-lg p-4">
        {userList.map((user, index) => {
          const amountRaised =
          activeTab === 'day'
            ? user.raisedToday
            : activeTab === 'week'
            ? user.raisedThisWeek
            : activeTab === 'month'
            ? user.raisedThisMonth
            : user.amountRaised;

          return (
          <li
            key={user.id}
            className="flex items-center justify-between border-b border-gray-200 py-3 last:border-b-0"
          >
            <div className="flex items-center space-x-4">
              <MedalIcon rank={index + 1} />
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <Link
                to={`/panhandlr/${user.id}`}
                className="text-lg font-semibold text-purple-600 hover:underline"
              >
                {user.name}
              </Link>
            </div>

            <span className="text-lg font-bold text-gray-700">
              ${amountRaised.toLocaleString()}
            </span>
          </li>
        )})}
      </ul>
    </section>
  );
};

export default TopPanhandlrs;
