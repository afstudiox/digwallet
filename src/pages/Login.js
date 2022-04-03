import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions';
import '../style.css';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      btnDisable: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  validateFields = ({ target }) => {
    const { email } = this.state;
    const { value } = target;
    const FIVE = 5;
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(email) && value.length > FIVE) {
      this.setState({
        btnDisable: false,
      });
    }
  }

  loginValidation = () => {
    const { userLoginDispatch, history } = this.props;
    const { email } = this.state;
    userLoginDispatch(email);
    history.push('/carteira');
  }

  render() {
    const { email, btnDisable } = this.state;
    return (
      <form
        className="form-login col"
      >
        <h2>Login</h2>
        <input
          type="email"
          id="email"
          name="email"
          onChange={ this.handleChange }
          value={ email }
          data-testid="email-input"
          placeholder="Digite seu email"
        />

        <input
          type="password"
          id="password"
          name="password"
          onChange={ this.validateFields }
          data-testid="password-input"
          placeholder="Digite sua senha"
        />

        <button
          type="button"
          disabled={ btnDisable }
          onClick={ this.loginValidation }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLoginDispatch: (email) => dispatch(login(email)),
});

Login.propTypes = {
  userLoginDispatch: (PropTypes.func).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
