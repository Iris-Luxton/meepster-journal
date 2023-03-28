import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        'http://localhost:5000/api/login',
        { email, password }
      );
      //save the user to local storage (so when they close the browser and open again, they are still logged in)
      localStorage.setItem('user', JSON.stringify(response.data));
      //now we have the json version of the object
        
      //update the auth context
      dispatch({ type: 'LOGIN', payload: response.data });
      setIsLoading(false);
    } catch (error) {
        setIsLoading(false);
        if (error.response && error.response.data && error.response.data.error) {
          setError(error.response.data.error);
        } else {
          setError(error.message);
        }
      }
    };
  return { login, isLoading, error };
};