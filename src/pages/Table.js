import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteExpense, editExpense } from '../actions';
import '../style.css';
import { DeleteIcon, EditIcon, GeneralContainer } from '../styles/Table';

class Table extends Component {
  delExpense = ({ target: { id } }) => {
    const { deleteExpenseDispatch } = this.props;
    deleteExpenseDispatch(id);
  }

  editExpense = ({ target: { id } }) => {
    const { editExpenseDispatch } = this.props;
    editExpenseDispatch(id);
  }

  render() {
    const { importExpenses } = this.props;
    return (
      <GeneralContainer>
        <table>
          <thead>
            <tr>
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
                .map((expense) => {
                  const price = Number(expense.exchangeRates[expense.currency].ask);
                  const value = Number(expense.value);
                  const totalExpense = price * value;
                  const nameCoin = (expense.exchangeRates[expense.currency].name)
                    .split('/');
                  return (
                    <tr key={ expense.id }>
                      <td>{ expense.description }</td>
                      <td>{ expense.tag }</td>
                      <td>{ expense.method }</td>
                      <td>{ value.toFixed(2) }</td>
                      <td>{ nameCoin[0] }</td>
                      <td>{ price.toFixed(2) }</td>
                      <td>{ totalExpense.toFixed(2) }</td>
                      <td>Real</td>
                      <td>
                        <button
                          id={ expense.id }
                          type="button"
                          data-testid="edit-btn"
                          onClick={ this.editExpense }
                        >
                          <EditIcon />Edit
                        </button>
  
                        <button
                          id={ expense.id }
                          type="button"
                          data-testid="delete-btn"
                          onClick={ this.delExpense }
                        >
                          <DeleteIcon />Delete
                        </button>
                      </td>
                    </tr>);
                })
            }
          </tbody>
        </table>
      </GeneralContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  importExpenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpenseDispatch: (id) => dispatch(deleteExpense(id)),
  editExpenseDispatch: (id) => dispatch((editExpense(id))),
});

Table.propTypes = {
  importExpenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  deleteExpenseDispatch: PropTypes.func.isRequired,
  editExpenseDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
