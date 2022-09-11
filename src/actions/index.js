// ACTIONS - index.js

import currencyAPI from '../data/apis';

// declaração dos tipos das Actions Types
export const SUCCESS = 'SUCCESS';
export const REQUEST = 'REQUEST';
export const LOGIN = 'LOGIN';
export const EXPENSES = 'EXPENSES';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';

// Actions Creators ( Criam e retornam as actions)
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

export const expenses = (listExpenses) => (
  {
    type: EXPENSES,
    listExpenses,
  }
);

export const deleteExpense = (id) => (
  {
    type: DELETE,
    id,
  }
);

export const editExpense = (id) => (
  {
    type: EDIT,
    id,
  }
);

// função assincrona que leva o objeto para filtrar o nome das moedas
export function thunkCurrency() {
  return async (dispatch) => {
    dispatch(request());
    const curr = await currencyAPI();
    return dispatch(success(curr));
  };
}
