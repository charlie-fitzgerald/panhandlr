import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { dummyUsers } from '../data/dummyData';

const milestones = [10, 50, 100, 500, 1000, 5000];

const getNextMilestone = (amountRaised) => {
  return milestones.find((milestone) => milestone > amountRaised) || milestones[milestones.length - 1];
};

const PanhandlrPage = () => {
  const { id } = useParams();
  const user = dummyUsers.find((u) => u.id === parseInt(id));

  if (!user) {
    return <div className="text-center text-red-500">User not found!</div>;
  }

  const nextMilestone = getNextMilestone(user.amountRaised);
  const progressPercentage = Math.min((user.amountRaised / nextMilestone) * 100, 100).toFixed(2);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* User Info */}
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-16 h-16 rounded-full border-2 border-purple-500"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">{user.bio || 'This user has not added a bio yet.'}</p>
        </div>
      </div>

      {/* Donation Progress Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700">💸 Donations Raised:</h3>
        <div className="relative h-6 bg-gray-200 rounded-lg overflow-hidden mt-2">
          <div
            className="bg-gradient-to-r from-green-400 to-purple-500 h-full transition-all"
            style={{ width: `${progressPercentage}%` }}
          ></div>

          {/* Milestone Indicators */}
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="absolute top-0 h-full w-1 bg-purple-600"
              style={{
                left: `${(milestone / nextMilestone) * 100}%`,
                transform: 'translateX(-50%)',
              }}
            >
              <div className="text-xs text-purple-700 -mt-6 whitespace-nowrap">
                ${milestone.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-2">
          ${user.amountRaised.toLocaleString()} raised out of ${nextMilestone.toLocaleString()} milestone
        </p>
      </div>

      {/* Donation Button */}
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg w-full mb-4">
        💖 Donate to {user.name}
      </button>

      {/* Recent Donor Activity */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">📢 Recent Donor Activity</h3>
        <ul className="list-disc ml-6 text-gray-600">
          {user.recentDonations && user.recentDonations.length > 0 ? (
            user.recentDonations.map((donation, index) => (
              <li key={index}>
                {donation.name} donated ${donation.amount} - {donation.timeAgo}
              </li>
            ))
          ) : (
            <li>No recent donations yet.</li>
          )}
        </ul>
      </div>

      {/* Social Media Links */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">🔗 Connect with {user.name}</h3>
        <div className="flex space-x-4">
          <a
            href={`https://twitter.com/${user.name.toLowerCase()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Twitter
          </a>
          <a
            href={`https://instagram.com/${user.name.toLowerCase()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline"
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Footer with Region and Tag Links */}
      <div className="mt-8 pt-4 border-t border-gray-300">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">📚 Additional Info</h3>
        <p className="text-sm text-gray-600">
          🌍 Region:{' '}
          <Link
            to={`/region/${user.region.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-blue-500 hover:underline"
          >
            {user.region}
          </Link>
        </p>
        <p className="text-sm text-gray-600 mt-1">
          🏷️ Tags:{' '}
          {user.tags.map((tag, index) => (
            <span key={index}>
              <Link
                to={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-green-500 hover:underline"
              >
                {tag}
              </Link>
              {index < user.tags.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default PanhandlrPage;
