import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';
import '../style.css';

class Table extends Component {
  delExpense = ({ target: { id } }) => {
    const { deleteExpenseDispatch } = this.props;
    // console.log(id);
    deleteExpenseDispatch(id);
  }

  render() {
    const { importExpenses } = this.props;
    return (
      <table className="table-container col">
        <thead>
          <tr className="table-container-th row">
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>

        <tbody>
          {
            importExpenses
              .map((expense) => (
                <tr key={ expense.id }>
                  <td>{ expense.description }</td>
                  <td>{ expense.tag }</td>
                  <td>{ expense.method }</td>
                  <td>{ Number(expense.value).toFixed(2) }</td>
                  <td>{ expense.exchangeRates[expense.currency].name }</td>
                  <td>
                    { Number(expense.exchangeRates[expense.currency].ask)
                      .toFixed(2) }
                  </td>
                  <td>
                    { ((expense.exchangeRates[expense.currency].ask)
                  * expense.value).toFixed(2) }
                  </td>
                  <td>Real</td>
                  <td>
                    <button
                      id={ expense.id }
                      type="button"
                    >
                      Editar
                    </button>

                    <button
                      id={ expense.id }
                      type="button"
                      data-testid="delete-btn"
                      onClick={ this.delExpense }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>))
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  importExpenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpenseDispatch: (id) => dispatch(deleteExpense(id)),
});

Table.propTypes = {
  importExpenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  deleteExpenseDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
