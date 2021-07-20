import { useEffect, useState } from 'react';
import { firebase } from '../lib/firebase.prod';

export const useAuthListener = () => {
  const [user, setUser] = useState<any>();
  const firebaseData = firebase;

  useEffect(() => {
    const listener = firebaseData.auth().onAuthStateChanged((firebaseUser: any) => {
      if (firebaseUser) {
        localStorage.setItem('auth-user', JSON.stringify(user));
        setUser(firebaseUser);
      } else {
        localStorage.removeItem('auth-user');
        setUser(null);
      }
    });
    return () => listener();
  }, []);

  return { user };
};
