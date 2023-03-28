// we need a way to keep track of user state within React app so when user log in
// we have some global user state to store that email and when they log out
// that state becomes null. We will manage that state using React context.
import React, { createContext, useReducer, useEffect } from 'react';

export const AuthContext = createContext();
const initialState = { user: null };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  //use useEffect to make sure that all localStorage is clear when we log out
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
        dispatch({ type:'LOGIN', payload: user })
    }
  }, [])
  console.log('AuthContext state: ', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};