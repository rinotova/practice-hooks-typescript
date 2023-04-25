import { useEffect, useState } from 'react';

function useFetchData<Payload>(url: string): {
  data: Payload | null;
  isFetchError: boolean;
  isLoading: boolean;
  isDone: boolean;
} {
  const [data, setData] = useState<Payload | null>(null);
  const [isFetchError, setIsFetchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    setIsLoading(true);
    fetch(url, { signal })
      .then((response) => response.json())
      .then((jsonResponse: Payload) => {
        setData(jsonResponse);
      })
      .catch((e: any) => {
        setIsFetchError(true);
      })
      .finally(() => {
        setIsDone(true);
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isFetchError, isLoading, isDone };
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
}

function UseCustomHookComponent() {
  const { data, isDone } = useFetchData<{ users: IUser[] }>(
    'https://dummyjson.com/users?limit=3'
  );
  const users = data?.users;

  return (
    <div>
      <ul>
        {isDone &&
          users?.length &&
          users!.map((user) => {
            return (
              <li key={user.id}>
                <p>{user.firstName}</p>
                <img
                  src={user.image}
                  alt={user.firstName}
                  title={user.firstName}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default UseCustomHookComponent;
