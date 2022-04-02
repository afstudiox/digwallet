import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../style.css';

class Expense extends React.Component {
  loadCurrencies = () => {

  }

  render() {
    // console.log(this.props.importLoadCurrencies);
    const { importLoadCurrencies } = this.props;
    return (
      <div className="container-expense">
        <form
          className="form-expense"
        >

          <label htmlFor="value">
            Valor:
            <input
              type="number"
              data-testid="value-input"
              id="value"
            />
          </label>

          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              data-testid="description-input"
              id="description"
            />
          </label>

          <label htmlFor="currency">
            Moeda:
            <select id="currency">
              { importLoadCurrencies
                .map((item, index) => (
                  <option key={ index }>{ item }</option>
                )) }
            </select>
          </label>

          <label htmlFor="method">
            Método de Pagamento:
            <select id="method" data-testid="method-input">
              <option value="">Dinheiro</option>
              <option value="">Cartão de crédito</option>
              <option value="">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="category">
            Categoria:
            <select id="category" data-testid="tag-input">
              <option value="">Alimentação</option>
              <option value="">Lazer</option>
              <option value="">Trabalho</option>
              <option value="">Transporte</option>
              <option value="">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  importLoadCurrencies: state.wallet.currencies });

Expense.propTypes = {
  importLoadCurrencies: (PropTypes.func).isRequired,
};

export default connect(mapStateToProps)(Expense);
