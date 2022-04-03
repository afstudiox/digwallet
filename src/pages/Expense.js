import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { expenses } from '../actions';
import currencyAPI from '../data/apis';
import '../style.css';

class Expense extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  sendInfo = async (e) => {
    const { expensesDispatch, importNextId } = this.props;
    e.preventDefault();
    this.setState({
      id: importNextId,
      exchangeRates: await currencyAPI(),
    }, () => expensesDispatch(this.state));
    this.setState({ value: '' });
  }

  render() {
    const { importLoadCurrencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div className="container-expense col">
        <form
          className="form-expense row"
        >

          <label htmlFor="value">
            Valor:
            <input
              type="number"
              data-testid="value-input"
              id="value"
              name="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              data-testid="description-input"
              id="description"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="currency">
            Moeda:
            <select
              id="currency"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              { importLoadCurrencies
                .map((item, index) => (
                  <option key={ index }>{ item }</option>
                )) }
            </select>
          </label>

          <label htmlFor="method">
            Método de Pagamento:
            <select
              id="method"
              data-testid="method-input"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="category">
            Categoria:
            <select
              id="category"
              data-testid="tag-input"
              name="tag"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>

          <button
            type="submit"
            onClick={ this.sendInfo }
          >
            Adicionar despesa
          </button>

        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  importLoadCurrencies: state.wallet.currencies,
  importNextId: (state.wallet.expenses).length,
});

const mapDispatchToProps = (dispatch) => ({
  expensesDispatch: (listExpenses) => dispatch(expenses(listExpenses)),
});

Expense.propTypes = {
  importLoadCurrencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  importNextId: PropTypes.number.isRequired,
  expensesDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
