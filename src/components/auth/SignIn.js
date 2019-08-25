import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PulseLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from '../store/actions/authAction';
import './Signin.css';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    const response = await this.props.loginUser({ email, password });
    if (response.type === 'LOGIN_USER_SUCCESS') {
      localStorage.setItem('token', response.payload.token);
      localStorage.setItem('email', response.payload.email);
      this.props.history.push('/dashboard');
      toast.success(`${response.payload.email} logged in successfully`, {
        toastId: 1,
      });
    }
    if (response.type === 'LOGIN_USER_FAILURE') {
      toast.error(`${response.error.error}`, {
        toastId: 1,
        className: 'toastCss',
      });
    }
  };
  render() {
    const { userauth } = this.props;
    return (
      <div className="container">
        <form
          onSubmit={this.handleSubmit}
          className="white signin-form"
          autoComplete="off"
        >
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn orange darken-3 z-depth-0">
              {userauth.isLoading ? (
                <PulseLoader
                  sizeUnit={'px'}
                  size={10}
                  color={'#ffffff'}
                  loading={userauth.isLoading}
                />
              ) : (
                'Login'
              )}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userauth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  loginUser: userObject => dispatch(loginUser(userObject)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
