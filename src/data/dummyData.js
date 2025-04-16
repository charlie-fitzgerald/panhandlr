// Dummy User Data
const getUserAvatar = (id) => {
  return `https://picsum.photos/50?random=${id}`;
};

export const dummyUsers = [
  {
    id: 1,
    name: 'Alice',
    avatar: getUserAvatar(1),
    amountRaised: 4500,
    raisedToday: 120,
    raisedThisWeek: 600,
    raisedThisMonth: 1800,
    bio: 'Passionate about animal welfare and helping stray pets.',
    socialLinks: {
      twitter: 'https://twitter.com/alice',
      instagram: 'https://instagram.com/alice',
    },
    recentDonations: [
      { name: 'John', amount: 50, timeago: '2 hours ago' },
      { name: 'Maya', amount: 20, timeago: '5 hours ago' },
    ],
    region: 'United States',
    tags: ['animal lover', 'activist', 'volunteer']
  },
  {
    id: 2,
    name: 'Bob',
    avatar: getUserAvatar(2),
    amountRaised: 3800,
    raisedToday: 200,
    raisedThisWeek: 750,
    raisedThisMonth: 2200,
    bio: 'Raising funds for climate change initiatives.',
    socialLinks: {
      twitter: 'https://twitter.com/bob',
      instagram: 'https://instagram.com/bob',
    },
    recentDonations: [
      { name: 'Eli', amount: 75, timeago: '1 day ago' },
      { name: 'Grace', amount: 25, timeago: '3 days ago' },
    ],
    region: 'Canada',
    tags: ['environmentalist', 'scientist', 'advocate']
  },
  {
    id: 3,
    name: 'Charlie',
    avatar: getUserAvatar(3),
    amountRaised: 3200,
    raisedToday: 90,
    raisedThisWeek: 450,
    raisedThisMonth: 1500,
    bio: 'Fighting for education access in underserved communities.',
    socialLinks: {
      twitter: 'https://twitter.com/charlie',
      instagram: 'https://instagram.com/charlie',
    },
    recentDonations: [
      { name: 'Diane', amount: 100, timeago: '4 hours ago' },
      { name: 'Frank', amount: 40, timeago: '6 hours ago' },
    ],
    region: 'United Kingdom',
    tags: ['educator', 'mentor', 'activist']
  },
  {
    id: 4,
    name: 'Diane',
    avatar: getUserAvatar(4),
    amountRaised: 4100,
    raisedToday: 150,
    raisedThisWeek: 550,
    raisedThisMonth: 1750,
    bio: 'Building homes for the homeless.',
    socialLinks: {
      twitter: 'https://twitter.com/diane',
      instagram: 'https://instagram.com/diane',
    },
    recentDonations: [
      { name: 'Ivy', amount: 60, timeago: '5 hours ago' },
      { name: 'Hank', amount: 30, timeago: '1 day ago' },
    ],
    region: 'Australia',
    tags: ['builder', 'architect', 'philanthropist']
  },
  {
    id: 5,
    name: 'Eli',
    avatar: getUserAvatar(5),
    amountRaised: 3700,
    raisedToday: 130,
    raisedThisWeek: 680,
    raisedThisMonth: 1600,
    bio: 'Supporting mental health awareness.',
    socialLinks: {
      twitter: 'https://twitter.com/eli',
      instagram: 'https://instagram.com/eli',
    },
    recentDonations: [
      { name: 'Alice', amount: 50, timeago: '2 days ago' },
      { name: 'Bob', amount: 25, timeago: '4 days ago' },
    ],
    region: 'Germany',
    tags: ['psychologist', 'counselor', 'activist']
  },
  {
    id: 6,
    name: 'Frank',
    avatar: getUserAvatar(6),
    amountRaised: 3000,
    raisedToday: 80,
    raisedThisWeek: 350,
    raisedThisMonth: 1200,
    bio: 'Raising funds for clean drinking water projects.',
    socialLinks: {
      twitter: 'https://twitter.com/frank',
      instagram: 'https://instagram.com/frank',
    },
    recentDonations: [
      { name: 'Charlie', amount: 60, timeago: '3 hours ago' },
      { name: 'Diane', amount: 35, timeago: '6 hours ago' },
    ],
    region: 'United States',
    tags: ['humanitarian', 'engineer', 'volunteer']
  },
  {
    id: 7,
    name: 'Grace',
    avatar: getUserAvatar(7),
    amountRaised: 5100,
    raisedToday: 160,
    raisedThisWeek: 800,
    raisedThisMonth: 2400,
    bio: 'Empowering women through technology and education.',
    socialLinks: {
      twitter: 'https://twitter.com/grace',
      instagram: 'https://instagram.com/grace',
    },
    recentDonations: [
      { name: 'Alice', amount: 90, timeago: '5 hours ago' },
      { name: 'Frank', amount: 40, timeago: '8 hours ago' },
    ],
    region: 'Canada',
    tags: ['tech advocate', 'mentor', 'activist']
  },
  {
    id: 8,
    name: 'Hank',
    avatar: getUserAvatar(8),
    amountRaised: 2600,
    raisedToday: 50,
    raisedThisWeek: 200,
    raisedThisMonth: 900,
    bio: 'Protecting endangered wildlife through local action.',
    socialLinks: {
      twitter: 'https://twitter.com/hank',
      instagram: 'https://instagram.com/hank',
    },
    recentDonations: [
      { name: 'Diane', amount: 70, timeago: '2 hours ago' },
      { name: 'Eli', amount: 45, timeago: '1 day ago' },
    ],
    region: 'Australia',
    tags: ['conservationist', 'activist', 'scientist']
  },
  {
    id: 9,
    name: 'Ivy',
    avatar: getUserAvatar(9),
    amountRaised: 4700,
    raisedToday: 170,
    raisedThisWeek: 900,
    raisedThisMonth: 2600,
    bio: 'Funding renewable energy solutions in communities.',
    socialLinks: {
      twitter: 'https://twitter.com/ivy',
      instagram: 'https://instagram.com/ivy',
    },
    recentDonations: [
      { name: 'Charlie', amount: 100, timeago: '4 hours ago' },
      { name: 'Frank', amount: 50, timeago: '6 hours ago' },
    ],
    region: 'Germany',
    tags: ['innovator', 'engineer', 'advocate']
  },
  {
    id: 10,
    name: 'Jack',
    avatar: getUserAvatar(10),
    amountRaised: 3400,
    raisedToday: 100,
    raisedThisWeek: 500,
    raisedThisMonth: 1400,
    bio: 'Educating youth about sustainable agriculture.',
    socialLinks: {
      twitter: 'https://twitter.com/jack',
      instagram: 'https://instagram.com/jack',
    },
    recentDonations: [
      { name: 'Hank', amount: 60, timeago: '2 days ago' },
      { name: 'Grace', amount: 45, timeago: '5 days ago' },
    ],
    region: 'United Kingdom',
    tags: ['educator', 'farmer', 'advocate']
  },
  {
    id: 11,
    name: 'Kate',
    avatar: getUserAvatar(11),
    amountRaised: 2900,
    raisedToday: 70,
    raisedThisWeek: 320,
    raisedThisMonth: 1100,
    bio: 'Promoting art education for underprivileged youth.',
    socialLinks: {
      twitter: 'https://twitter.com/kate',
      instagram: 'https://instagram.com/kate',
    },
    recentDonations: [
      { name: 'Ivy', amount: 55, timeago: '3 hours ago' },
      { name: 'Jack', amount: 30, timeago: '1 day ago' },
    ],
    region: 'France',
    tags: ['artist', 'educator', 'activist'],
  },
  {
    id: 12,
    name: 'Liam',
    avatar: getUserAvatar(12),
    amountRaised: 4200,
    raisedToday: 150,
    raisedThisWeek: 750,
    raisedThisMonth: 2000,
    bio: 'Supporting STEM initiatives for young innovators.',
    socialLinks: {
      twitter: 'https://twitter.com/liam',
      instagram: 'https://instagram.com/liam',
    },
    recentDonations: [
      { name: 'Alice', amount: 80, timeago: '5 hours ago' },
      { name: 'Bob', amount: 45, timeago: '1 day ago' },
    ],
    region: 'United States',
    tags: ['engineer', 'innovator', 'mentor'],
  },
  {
    id: 13,
    name: 'Mia',
    avatar: getUserAvatar(13),
    amountRaised: 3500,
    raisedToday: 90,
    raisedThisWeek: 500,
    raisedThisMonth: 1500,
    bio: 'Providing healthcare access in remote areas.',
    socialLinks: {
      twitter: 'https://twitter.com/mia',
      instagram: 'https://instagram.com/mia',
    },
    recentDonations: [
      { name: 'Diane', amount: 70, timeago: '6 hours ago' },
      { name: 'Eli', amount: 50, timeago: '1 day ago' },
    ],
    region: 'Australia',
    tags: ['doctor', 'humanitarian', 'volunteer'],
  },
  {
    id: 14,
    name: 'Noah',
    avatar: getUserAvatar(14),
    amountRaised: 3100,
    raisedToday: 85,
    raisedThisWeek: 430,
    raisedThisMonth: 1350,
    bio: 'Promoting clean energy solutions worldwide.',
    socialLinks: {
      twitter: 'https://twitter.com/noah',
      instagram: 'https://instagram.com/noah',
    },
    recentDonations: [
      { name: 'Frank', amount: 65, timeago: '2 hours ago' },
      { name: 'Grace', amount: 40, timeago: '1 day ago' },
    ],
    region: 'Germany',
    tags: ['scientist', 'advocate', 'innovator'],
  },
  {
    id: 15,
    name: 'Olivia',
    avatar: getUserAvatar(15),
    amountRaised: 4600,
    raisedToday: 180,
    raisedThisWeek: 880,
    raisedThisMonth: 2700,
    bio: 'Empowering local communities through sustainable agriculture.',
    socialLinks: {
      twitter: 'https://twitter.com/olivia',
      instagram: 'https://instagram.com/olivia',
    },
    recentDonations: [
      { name: 'Charlie', amount: 90, timeago: '4 hours ago' },
      { name: 'Jack', amount: 55, timeago: '2 days ago' },
    ],
    region: 'Canada',
    tags: ['farmer', 'community builder', 'advocate'],
  },
];

  // Get Top Panhandlrs based on timeframe
  const getTopUsers = (timeframe) => {
    const keyMap = {
      day: 'raisedToday',
      week: 'raisedThisWeek',
      month: 'raisedThisMonth',
      overall: 'amountRaised',
    };
  
    // Sort by timeframe and get top 5 users
    return [...dummyUsers]
      .sort((a, b) => b[keyMap[timeframe]] - a[keyMap[timeframe]])
      .slice(0, 5);
  };
  
  // Dummy Data for Top Panhandlrs by Timeframe
  export const topPanhandlrsData = {
    day: getTopUsers('day'),
    week: getTopUsers('week'),
    month: getTopUsers('month'),
    overall: getTopUsers('overall'),
  };
  
  