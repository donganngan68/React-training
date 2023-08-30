import { APIMethods } from '../constants';

export const apiRequest = async (options) => {
  const {
    apiName, method, header, body, defaultValue,
  } = options;

  const fullAPIEndpoint = `${process.env.REACT_APP_API_ENDPOINT}${apiName}`;

  const isGetMethod = !options.method || options.method === APIMethods.Get;
  const requestOptions = !isGetMethod ? {
    method,
    header: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...header,
    },
    body,
  } : {};

  try {
    const request = await fetch(fullAPIEndpoint, requestOptions);
    const dataResponse = await request.json();

    return dataResponse;
  } catch (error) {
    return Promise.resolve(defaultValue ?? null);
  }
};
