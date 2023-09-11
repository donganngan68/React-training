import { APIMethods } from '../constants';

export const apiRequest = async (options) => {
  const {
    apiName, method, header, body, defaultValue,
  } = options;

  // ISSUE: Update to env file for now to avoid issue while deplping to vercel
  const REACT_APP_API_ENDPOINT = 'https://react-training-json-server.onrender.com/';
  const fullAPIEndpoint = `${REACT_APP_API_ENDPOINT}${apiName}`;

  const isGetMethod = !options.method || options.method === APIMethods.Get;

  const requestOptions = !isGetMethod ? {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...header,
    },
    body: JSON.stringify(body),
  } : {};

  try {
    const request = await fetch(fullAPIEndpoint, method === 'DELETE' ? { method } : requestOptions);
    const dataResponse = await request.json();
    return dataResponse;
  } catch (error) {
    return Promise.resolve(defaultValue ?? null);
  }
};
