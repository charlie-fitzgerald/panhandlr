import React from 'react';

const MedalIcon = ({ rank }) => {
  const medalColors = {
    1: 'text-yellow-500', // Gold
    2: 'text-gray-400',  // Silver
    3: 'text-orange-500', // Bronze
  };

  const medalLabels = {
    1: '🥇',
    2: '🥈',
    3: '🥉',
  };

  return (
    <span
      className={`text-2xl font-bold ${medalColors[rank]} `}
      title={`Rank ${rank}`}
    >
      {medalLabels[rank]}
    </span>
  );
};

export default MedalIcon;
