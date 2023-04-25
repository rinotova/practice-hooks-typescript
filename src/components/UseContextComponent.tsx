import { useContext, useState } from 'react';
import UserContext, { TUser } from '../store';

function ConsumerComponent() {
  const userContext = useContext(UserContext);
  const { user, setUserName } = userContext;
  return (
    <div>
      <p>First name: {user.firstName}</p>
      <p>Last name: {user.lastName}</p>
      <button
        onClick={() =>
          setUserName({
            firstName: 'Rino',
            lastName: 'the second',
          })
        }
      >
        Change Name
      </button>
    </div>
  );
}

function UseContextComponent() {
  const [user, setUser] = useState<TUser>({
    firstName: 'Jane',
    lastName: 'Simth',
  });

  const changeNameHandler = (user: TUser) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, setUserName: changeNameHandler }}>
      <ConsumerComponent />
    </UserContext.Provider>
  );
}

export default UseContextComponent;
