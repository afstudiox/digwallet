import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import { GeneralContainer, WrapperContainer } from '../styles/Login';

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
     <GeneralContainer>
        <WrapperContainer>
          Insert image or logo
        </WrapperContainer>
        <WrapperContainer>
          <form>
            <h2>Welcome to your wallet</h2>
            <p>Sign in with your credentials</p>
            <input
              type="email"
              id="email"
              name="email"
              onChange={ this.handleChange }
              value={ email }
              data-testid="email-input"
              placeholder="Enter your email"
            />
    
            <input
              type="password"
              id="password"
              name="password"
              onChange={ this.validateFields }
              data-testid="password-input"
              placeholder="Enter your password"
            />
    
            <button
              type="button"
              disabled={ btnDisable }
              onClick={ this.loginValidation }
            >
              Sign
            </button>
          </form>
        </WrapperContainer>
     </GeneralContainer>
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
