import { SUCCESS, REQUEST, ERROR } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case REQUEST:
    return {
      isLoading: true,
    };

  case SUCCESS:
    return {
      ...state,
      isLoading: false,
    };

  case ERROR:
    return {
      isLoading: false,
    };

  default:
    return state;
  }
}

export default wallet;
