import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { thunkCurrency } from '../actions';
import '../style.css';

class Wallet extends React.Component {
  componentDidMount() {
    const { importThunkCurrency } = this.props;
    importThunkCurrency();
  }

  render() {
    const { emailState } = this.props;
    return (
      <div className="container-header row">
        <p> Email: </p>
        <span data-testid="email-field">{ emailState }</span>
        <p> Despesa Total: R$ </p>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field"> BRL </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailState: state.user.email });

const mapDispatchToProps = (dispatch) => ({
  importThunkCurrency: (curr) => dispatch(thunkCurrency(curr)),
});

Wallet.propTypes = {
  emailState: PropTypes.string.isRequired,
  importThunkCurrency: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
