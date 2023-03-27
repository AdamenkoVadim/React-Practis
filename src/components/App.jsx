import Profile from './Profile/profile';
import user from './Profile/user.json';
export const App = () => {
  return (
    <div>
      {user.map(user => (
       <Profile
          key={user.id}
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
      ))}
    </div>
   
  );
};
