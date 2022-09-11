import { SUCCESS, REQUEST, EXPENSES, DELETE, EDIT } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  editExpense: [],
};

function wallet(state = initialState, action) {
  const { expenses } = state;
  const { curr, listExpenses, id } = action;
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
      editExpense: [],
    };

  case DELETE:
    return {
      ...state,
      expenses:
        expenses.filter((item) => item.id !== +id),
      editExpense: [],
    };

  case EDIT:
    return {
      ...state,
      editExpense:
        expenses.filter((item) => item.id === +id),
      expenses:
        expenses.filter((item) => item.id !== +id),
    };

  default:
    return state;
  }
}

export default wallet;
