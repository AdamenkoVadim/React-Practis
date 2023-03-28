import Profile from './Profile/profile';
import user from './Profile/user.json';
import Counter from './Counter/Counter'
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
      <Counter />
    </div>
    
   
  );
};
