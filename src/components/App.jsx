
import userData from '../data/user.json'
import statisticsData from '../data/data.json'
import friendsData from '../data/friends.json'
import transactionsData from '../data/transactions.json'

import Profile from './Profile/Profile'
import StatisticAll from './Statistics/StatisticAll';
import FriendList from './Friends/FriendList'
import TransactionHistory from './Transaction/TransactionHistory'

export const App = () => {
  return (
    <div>
      <Profile username={userData.username} tag={userData.tag} location={userData.location} avatar={userData.avatar} stats={userData.stats} />
      <StatisticAll title="UPLOAD STATS" stats={statisticsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
};
