/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

export const useFetch = (options) => {
  const {
    apiName, method, header, body,
  } = options;

  const [data, setData] = useState(null);

  const getData = async () => {
    const request = await fetch(`${process.env.REACT_APP_API_ENDPOINT}${apiName}`);
    const response = await request.json();

    return response;
  };

  useEffect(() => {
    const callFetch = async () => {
      if (!method || method === 'GET') {
        try {
          const dataResponse = await getData();

          setData(dataResponse);
        } catch (error) {
          setData(null);
        }
      }
    };

    callFetch();
  }, []);

  if (!method || method === 'GET') {
    return {
      data,
    };
  }

  return {
    mutate: getData,
  };
};
