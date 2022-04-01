import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { emailState } = this.props;
    return (
      <div className="container">
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

Wallet.propTypes = {
  emailState: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Wallet);
