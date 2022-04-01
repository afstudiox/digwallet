// ACTIONS - index.js

export const SUCCESS = 'SUCCESS';
export const REQUEST = 'REQUEST';
export const ERROR = 'ERROR';
export const LOGIN = 'LOGIN';

export const login = (email) => (
  {
    type: LOGIN,
    email,
  }
);

export const request = () => (
  {
    type: REQUEST,
  }
);

export const success = () => (
  {
    type: SUCCESS,
  }
);

export const error = () => (
  {
    type: ERROR,
  }
);
