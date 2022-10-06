import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { thunkCurrency } from '../actions';
import { BodyWrapper, GeneralContainer, HeaderContainer, HeaderWrapper, UserField } from '../styles/Wallet';
import Logo from '../wallet.png';
import Expense from './Expense';
import Table from './Table';

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
    const accExpensesString = +this.sumExpenses();
    {console.log(typeof accExpensesString)}
    return (
      <GeneralContainer>

        <HeaderContainer>
          <HeaderWrapper width={100}>
            <figure><Link to="/"><img src={ Logo } alt="Logo" /></Link></figure>
              <h1>DIGWALLET</h1>
          </HeaderWrapper>

          <HeaderWrapper>
            <p>Total<span>{ 
            accExpensesString
              ? accExpensesString.toLocaleString()
                .toLocaleString('pt-br', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2})
              : '0,00' }</span>
            </p>
            <p>Currency<span>BRL</span></p>
            <UserField>{ emailState }</UserField>
          </HeaderWrapper>

        </HeaderContainer>

        <BodyWrapper>
          <Expense />
          <Table />
        </BodyWrapper>

      </GeneralContainer>
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
