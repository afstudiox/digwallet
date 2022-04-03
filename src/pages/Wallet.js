import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { thunkCurrency } from '../actions';
import '../style.css';
import Logo from '../wallet.png';
import Expense from './Expense';

class Wallet extends React.Component {
  componentDidMount() {
    const { importThunkCurrency } = this.props;
    importThunkCurrency();
  }

  sumExpenses = () => {
    const { importExpenses } = this.props;
    if (importExpenses.length > 0) {
      const accExpenses = importExpenses
        .map((expense) => {
          const expenseValue = expense.value;
          const expenseCurrency = expense.currency;
          const expensePrice = expense.exchangeRates[expenseCurrency].ask;
          const convertValue = expenseValue * expensePrice;
          return convertValue;
        }).reduce((acc, curr) => {
          acc += curr;
          return acc;
        }).toFixed(2);
      return accExpenses;
    }
    return 0;
  }

  render() {
    const { emailState } = this.props;
    return (
      <div className="container">
        <header className="container-header row">

          <figure className="header-logo row">
            <Link to="/"><img src={ Logo } alt="Logo" /></Link>
          </figure>

          <h1>TRYBE WALLET</h1>

          <div className="header-data row">
            <p>
              Email :
              <span data-testid="email-field">{ emailState }</span>
            </p>
            <p>
              Despesa Total : R$
              <span data-testid="total-field">{ this.sumExpenses() }</span>
            </p>
            <span data-testid="header-currency-field">BRL</span>
          </div>

        </header>
        <Expense />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailState: state.user.email,
  importExpenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  importThunkCurrency: (curr) => dispatch(thunkCurrency(curr)),
});

Wallet.propTypes = {
  emailState: PropTypes.string.isRequired,
  importThunkCurrency: PropTypes.func.isRequired,
  importExpenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
