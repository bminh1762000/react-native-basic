import React, {useState, useEffect} from 'react';
import api from '../api/api';

export default () => {
  const [listRestaurant, setListRestaurant] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const getListRestaurant = async search => {
    try {
      const res = await api.get('/search', {
        params: {
          limit: 50,
          term: search,
          location: 'san jose',
        },
      });
      const {name, rating, review_count, ...other} = res?.data?.businesses;
      setListRestaurant(res?.data?.businesses);
    } catch (error) {
      setErrorMessage(error);
    }
  };

  useEffect(() => {
    getListRestaurant('');
  }, []);

  return [getListRestaurant, listRestaurant, errorMessage];
};
