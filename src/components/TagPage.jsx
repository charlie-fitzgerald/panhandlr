import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { dummyUsers } from '../data/dummyData';

const TagPage = () => {
  const {tag} = useParams(); // Get the tag from the URL parameters
  const filteredUsers = dummyUsers.filter(user => user.tags.includes(tag));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Users with tag: {tag}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map(user => (
          <div key={user.id} className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition">
            <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full mb-4" />
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.bio}</p>
            <Link
              to={`/user/${user.id}`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagPage;
