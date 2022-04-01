// ACTIONS - index.js

import currencyAPI from '../data/apis';

export const SUCCESS = 'SUCCESS';
export const REQUEST = 'REQUEST';
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

export const success = (curr) => (
  {
    type: SUCCESS,
    curr,
  }
);

export function thunkCurrency() {
  return async (dispatch) => {
    dispatch(request());
    const curr = await currencyAPI();
    return dispatch(success(curr));
  };
}
