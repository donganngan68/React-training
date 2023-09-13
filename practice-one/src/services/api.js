import { APIMethods } from '../constants';

export const apiRequest = async (options) => {
  const {
    apiName, method, header, body,
  } = options;

  // ISSUE: Update to env file for now to avoid issue while deplping to vercel
  const fullAPIEndpoint = `${process.env.REACT_APP_API_ENDPOINT}${apiName}`;

  const isGetMethod = !options.method || options.method === APIMethods.Get; // (isGetMethod = true )

  const requestOptions = !isGetMethod ? {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...header,
    },
    body: JSON.stringify(body),
  } : {};

  try {
    const dataResponse = await fetch(fullAPIEndpoint, method === 'DELETE' ? { method } : requestOptions);

    if (!dataResponse.ok) {
      throw new Error('Something went wrong!!');
    }

    return dataResponse.json();
  } catch (error) {
    throw new Error(error);
  }
};
