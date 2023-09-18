import React, { useContext, useState, useEffect, ReactNode } from 'react';
import { auth, firebasedb } from '../firebase';
import firebase from 'firebase/compat/app';

interface IProviderProps {
  children: React.ReactNode;
}
export default interface IUsersData {
  user: string;
  email?: string | null;
  password: string;
}

const AuthContext = React.createContext<any | null>(null);
// export const AuthContext = React.createContext({ currentUser: {} as firebase.User | null });
const db = firebasedb.ref('/');

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider: React.FunctionComponent<IProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);

  function signup(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email: string) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email: string) {
    return currentUser?.updateEmail(email);
  }

  function updatePassword(password: string) {
    return currentUser?.updatePassword(password);
  }

  function getAlldata(childval: string) {
    return db.child(childval);
  }

  function createdata(childval: string, createvalue: string) {
    return db.child(childval).push(createvalue);
  }

  function updatedata(key: string, value: string) {
    return db.child(key).update(value);
  }

  function deletedata(key: string, value: string) {
    return db.child(key).child(value).remove();
  }

  function deleteAlldata() {
    return db.remove();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    getAlldata,
    createdata,
    updatedata,
    deletedata,
    deleteAlldata,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
