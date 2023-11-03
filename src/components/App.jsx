import Profile from './Profile/Profile.jsx';
import Statistics from './Statistics/Statistics.jsx';
import FriendList from './FriendList/FriendList.jsx';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import css from 'index.css';
import user from 'data/user.json';
import datas from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={datas} />
      <Statistics stats={datas} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
