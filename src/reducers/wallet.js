import { SUCCESS, REQUEST, ERROR } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  isLoading: false,
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case REQUEST:
    return {
      ...state,
      isLoading: true,
    };

  case SUCCESS:
    return {
      ...state,
      isLoading: false,
      currencies:
          Object.keys(action.curr)
            .filter((item) => item !== 'USDT'),
    };

  case ERROR:
    return {
      ...state,
      isLoading: false,
    };

  default:
    return state;
  }
}

export default wallet;
