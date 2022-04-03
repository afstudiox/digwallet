import { SUCCESS, REQUEST, EXPENSES } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

function wallet(state = initialState, action) {
  const { expenses } = state;
  const { curr, listExpenses } = action;
  switch (action.type) {
  case REQUEST:
    return {
      ...state,
    };

  case SUCCESS:
    return {
      ...state,
      currencies:
          Object.keys(curr)
            .filter((item) => item !== 'USDT'),
    };

  case EXPENSES:
    return {
      ...state,
      expenses:
        [
          ...expenses,
          listExpenses,
        ],
    };

  default:
    return state;
  }
}

export default wallet;
