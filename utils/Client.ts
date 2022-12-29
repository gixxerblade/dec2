import { handleError } from './ApiError';

export type ClientOptions = {
  body?: object,
  method?: 'GET' | 'POST',
};


export const Client = async <T = any>(
  endpoint: string,
  options: ClientOptions = {}
): Promise<T> => {
  const { body, method = body ? 'POST' : 'GET' } = options;
  const headers: HeadersInit = {
    Accept: 'application/json'
  };

  if (body) {
    headers['Content-Type'] = 'application/json';
  }

  const config: RequestInit = {
    credentials: 'include',
    headers,
    method,
  };

  if (body && !(body instanceof FormData)) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`api/${endpoint}`, config);

  if (!response.ok) {
    await handleError(response);
  }

  // if (response.status === 204) {
  //   return null;
  // }

  return response.json();
}