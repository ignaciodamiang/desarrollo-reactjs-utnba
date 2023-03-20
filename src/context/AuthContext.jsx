import React, { useState, useContext, useEffect } from 'react';
import firebase from '../config/firebase';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setLogin(true);
      } else {
        setUser(null);
        setLogin(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      setUser(response.user);
      setLogin(true);
    } catch (error) {
      console.error('Error during login:', error);
      // Handle errors here (e.g., show a message to the user)
    }
  };

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      setUser(null);
      setLogin(false);
    } catch (error) {
      console.error('Error during logout:', error);
      // Handle errors here (e.g., show a message to the user)
    }
  };

  return (
    <AuthContext.Provider value={{ login, handleLogin, handleLogout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
